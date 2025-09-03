// scripts/bulkImportQuestions.mjs
import fs from "fs";
import { parse } from "csv-parse/sync";
import pLimit from "p-limit";
import { GraphQLClient, gql } from "graphql-request";
import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUser,
} from "amazon-cognito-identity-js";
import awsconfig from "../src/aws-exports.js";

/** ---- CONFIG YOU SET ---- */
const CSV_PATH = process.argv[2];            // e.g. "./data/questions.csv"
const COGNITO_USERNAME = process.env.IMPORT_USER; // your existing user email
const COGNITO_PASSWORD = process.env.IMPORT_PASS; // its password
const REGION = awsconfig.aws_project_region;

/** ---- Auth (User Pools) -> idToken ---- */
function signInUser(username, password) {
  const poolData = {
    UserPoolId: awsconfig.aws_user_pools_id,
    ClientId: awsconfig.aws_user_pools_web_client_id,
  };
  const userPool = new CognitoUserPool(poolData);
  const user = new CognitoUser({ Username: username, Pool: userPool });
  const authDetails = new AuthenticationDetails({
    Username: username,
    Password: password,
  });

  return new Promise((resolve, reject) => {
    user.authenticateUser(authDetails, {
      onSuccess: (result) => resolve(result.getIdToken().getJwtToken()),
      onFailure: reject,
    });
  });
}

/** ---- GraphQL mutation ---- */
const CREATE_QUESTION = gql/* GraphQL */ `
  mutation CreateQuestion($input: CreateQuestionInput!) {
    createQuestion(input: $input) {
      id
      questionId
    }
  }
`;

/** deterministic 0..1 from an integer id */
function seededFraction(n) {
  if (n == null) return Math.random();
  const v = (n * 9301 + 49297) % 233280;
  return v / 233280;
}

const emptyToNull = (v) =>
  v === undefined || v === null || String(v).trim() === "" ? null : v;

function rowToInput(r) {
  const geneIndex = r.geneIndex ? parseInt(r.geneIndex, 10) : null;

  const bucket =
    r.bucket != null && String(r.bucket).trim() !== ""
      ? parseInt(r.bucket, 10)
      : geneIndex != null
      ? geneIndex % 100
      : Math.floor(Math.random() * 100);

  const randomIndex =
    r.randomIndex != null && String(r.randomIndex).trim() !== ""
      ? parseFloat(r.randomIndex)
      : seededFraction(geneIndex ?? Math.floor(Math.random() * 100000));

  let tags = null;
  if (r.tag && String(r.tag).trim() !== "") {
    try {
      tags = JSON.parse(r.tag);
    } catch {
      console.warn("Bad tag JSON for row with QuestionID:", r.QuestionID);
      tags = null;
    }
  }

  return {
    questionId: emptyToNull(r.QuestionID),
    text: emptyToNull(r.qestionText),
    svgKey: emptyToNull(r.questionsvgKey),

    answerA: emptyToNull(r.answerA),
    answerB: emptyToNull(r.answerB),
    answerC: emptyToNull(r.answerC),
    answerD: emptyToNull(r.answerD),

    correctAnswer: emptyToNull(r.correctAnswer),
    solution: emptyToNull(r.solution),

    difficulty:
      r.difficulty != null && String(r.difficulty).trim() !== ""
        ? parseInt(r.difficulty, 10)
        : null,

    tags,
    geneIndex,

    // randomization helpers used by your query pattern
    bucket,
    randomIndex,
  };
}

async function main() {
  if (!CSV_PATH) {
    console.error("Usage: node scripts/bulkImportQuestions.mjs <path/to.csv>");
    process.exit(1);
  }
  if (!COGNITO_USERNAME || !COGNITO_PASSWORD) {
    console.error(
      "Set IMPORT_USER and IMPORT_PASS env vars for a valid Cognito user."
    );
    process.exit(1);
  }

  const csv = fs.readFileSync(CSV_PATH, "utf8");
  const records = parse(csv, { columns: true, skip_empty_lines: true });
  console.log(`Parsed ${records.length} rows from ${CSV_PATH}`);

  const idToken = await signInUser(COGNITO_USERNAME, COGNITO_PASSWORD);
  const client = new GraphQLClient(awsconfig.aws_appsync_graphqlEndpoint, {
    headers: { Authorization: idToken },
  });

  const limit = pLimit(10); // concurrency
  let ok = 0,
    fail = 0;

  await Promise.all(
    records.map((r, idx) =>
      limit(async () => {
        const input = rowToInput(r);
        try {
          await client.request(CREATE_QUESTION, { input });
          ok++;
          if (ok % 50 === 0) console.log(`Imported ${ok}/${records.length}...`);
        } catch (e) {
          fail++;
          console.error(
            `Row ${idx + 1} (QuestionID=${r.QuestionID}) failed:`,
            e.response?.errors?.[0]?.message || e.message
          );
        }
      })
    )
  );

  console.log(`Done. Success: ${ok}, Failed: ${fail}`);
  process.exit(fail ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
