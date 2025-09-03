/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getQuestion } from "../graphql/queries";
import { updateQuestion } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function QuestionUpdateForm(props) {
  const {
    id: idProp,
    question: questionModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    questionId: "",
    text: "",
    svgKey: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    correctAnswer: "",
    solution: "",
    bucket: "",
    tags: [],
    difficulty: "",
    geneIndex: "",
  };
  const [questionId, setQuestionId] = React.useState(initialValues.questionId);
  const [text, setText] = React.useState(initialValues.text);
  const [svgKey, setSvgKey] = React.useState(initialValues.svgKey);
  const [answerA, setAnswerA] = React.useState(initialValues.answerA);
  const [answerB, setAnswerB] = React.useState(initialValues.answerB);
  const [answerC, setAnswerC] = React.useState(initialValues.answerC);
  const [answerD, setAnswerD] = React.useState(initialValues.answerD);
  const [correctAnswer, setCorrectAnswer] = React.useState(
    initialValues.correctAnswer
  );
  const [solution, setSolution] = React.useState(initialValues.solution);
  const [bucket, setBucket] = React.useState(initialValues.bucket);
  const [tags, setTags] = React.useState(initialValues.tags);
  const [difficulty, setDifficulty] = React.useState(initialValues.difficulty);
  const [geneIndex, setGeneIndex] = React.useState(initialValues.geneIndex);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = questionRecord
      ? { ...initialValues, ...questionRecord }
      : initialValues;
    setQuestionId(cleanValues.questionId);
    setText(cleanValues.text);
    setSvgKey(cleanValues.svgKey);
    setAnswerA(cleanValues.answerA);
    setAnswerB(cleanValues.answerB);
    setAnswerC(cleanValues.answerC);
    setAnswerD(cleanValues.answerD);
    setCorrectAnswer(cleanValues.correctAnswer);
    setSolution(cleanValues.solution);
    setBucket(cleanValues.bucket);
    setTags(cleanValues.tags ?? []);
    setCurrentTagsValue("");
    setDifficulty(cleanValues.difficulty);
    setGeneIndex(cleanValues.geneIndex);
    setErrors({});
  };
  const [questionRecord, setQuestionRecord] = React.useState(questionModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getQuestion.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getQuestion
        : questionModelProp;
      setQuestionRecord(record);
    };
    queryData();
  }, [idProp, questionModelProp]);
  React.useEffect(resetStateValues, [questionRecord]);
  const [currentTagsValue, setCurrentTagsValue] = React.useState("");
  const tagsRef = React.createRef();
  const validations = {
    questionId: [],
    text: [],
    svgKey: [],
    answerA: [{ type: "Required" }],
    answerB: [{ type: "Required" }],
    answerC: [{ type: "Required" }],
    answerD: [{ type: "Required" }],
    correctAnswer: [{ type: "Required" }],
    solution: [],
    bucket: [{ type: "Required" }],
    tags: [],
    difficulty: [],
    geneIndex: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          questionId: questionId ?? null,
          text: text ?? null,
          svgKey: svgKey ?? null,
          answerA,
          answerB,
          answerC,
          answerD,
          correctAnswer,
          solution: solution ?? null,
          bucket,
          tags: tags ?? null,
          difficulty: difficulty ?? null,
          geneIndex: geneIndex ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateQuestion.replaceAll("__typename", ""),
            variables: {
              input: {
                id: questionRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "QuestionUpdateForm")}
      {...rest}
    >
      <TextField
        label="Question id"
        isRequired={false}
        isReadOnly={false}
        value={questionId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              questionId: value,
              text,
              svgKey,
              answerA,
              answerB,
              answerC,
              answerD,
              correctAnswer,
              solution,
              bucket,
              tags,
              difficulty,
              geneIndex,
            };
            const result = onChange(modelFields);
            value = result?.questionId ?? value;
          }
          if (errors.questionId?.hasError) {
            runValidationTasks("questionId", value);
          }
          setQuestionId(value);
        }}
        onBlur={() => runValidationTasks("questionId", questionId)}
        errorMessage={errors.questionId?.errorMessage}
        hasError={errors.questionId?.hasError}
        {...getOverrideProps(overrides, "questionId")}
      ></TextField>
      <TextField
        label="Text"
        isRequired={false}
        isReadOnly={false}
        value={text}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              questionId,
              text: value,
              svgKey,
              answerA,
              answerB,
              answerC,
              answerD,
              correctAnswer,
              solution,
              bucket,
              tags,
              difficulty,
              geneIndex,
            };
            const result = onChange(modelFields);
            value = result?.text ?? value;
          }
          if (errors.text?.hasError) {
            runValidationTasks("text", value);
          }
          setText(value);
        }}
        onBlur={() => runValidationTasks("text", text)}
        errorMessage={errors.text?.errorMessage}
        hasError={errors.text?.hasError}
        {...getOverrideProps(overrides, "text")}
      ></TextField>
      <TextField
        label="Svg key"
        isRequired={false}
        isReadOnly={false}
        value={svgKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              questionId,
              text,
              svgKey: value,
              answerA,
              answerB,
              answerC,
              answerD,
              correctAnswer,
              solution,
              bucket,
              tags,
              difficulty,
              geneIndex,
            };
            const result = onChange(modelFields);
            value = result?.svgKey ?? value;
          }
          if (errors.svgKey?.hasError) {
            runValidationTasks("svgKey", value);
          }
          setSvgKey(value);
        }}
        onBlur={() => runValidationTasks("svgKey", svgKey)}
        errorMessage={errors.svgKey?.errorMessage}
        hasError={errors.svgKey?.hasError}
        {...getOverrideProps(overrides, "svgKey")}
      ></TextField>
      <TextField
        label="Answer a"
        isRequired={true}
        isReadOnly={false}
        value={answerA}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              questionId,
              text,
              svgKey,
              answerA: value,
              answerB,
              answerC,
              answerD,
              correctAnswer,
              solution,
              bucket,
              tags,
              difficulty,
              geneIndex,
            };
            const result = onChange(modelFields);
            value = result?.answerA ?? value;
          }
          if (errors.answerA?.hasError) {
            runValidationTasks("answerA", value);
          }
          setAnswerA(value);
        }}
        onBlur={() => runValidationTasks("answerA", answerA)}
        errorMessage={errors.answerA?.errorMessage}
        hasError={errors.answerA?.hasError}
        {...getOverrideProps(overrides, "answerA")}
      ></TextField>
      <TextField
        label="Answer b"
        isRequired={true}
        isReadOnly={false}
        value={answerB}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              questionId,
              text,
              svgKey,
              answerA,
              answerB: value,
              answerC,
              answerD,
              correctAnswer,
              solution,
              bucket,
              tags,
              difficulty,
              geneIndex,
            };
            const result = onChange(modelFields);
            value = result?.answerB ?? value;
          }
          if (errors.answerB?.hasError) {
            runValidationTasks("answerB", value);
          }
          setAnswerB(value);
        }}
        onBlur={() => runValidationTasks("answerB", answerB)}
        errorMessage={errors.answerB?.errorMessage}
        hasError={errors.answerB?.hasError}
        {...getOverrideProps(overrides, "answerB")}
      ></TextField>
      <TextField
        label="Answer c"
        isRequired={true}
        isReadOnly={false}
        value={answerC}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              questionId,
              text,
              svgKey,
              answerA,
              answerB,
              answerC: value,
              answerD,
              correctAnswer,
              solution,
              bucket,
              tags,
              difficulty,
              geneIndex,
            };
            const result = onChange(modelFields);
            value = result?.answerC ?? value;
          }
          if (errors.answerC?.hasError) {
            runValidationTasks("answerC", value);
          }
          setAnswerC(value);
        }}
        onBlur={() => runValidationTasks("answerC", answerC)}
        errorMessage={errors.answerC?.errorMessage}
        hasError={errors.answerC?.hasError}
        {...getOverrideProps(overrides, "answerC")}
      ></TextField>
      <TextField
        label="Answer d"
        isRequired={true}
        isReadOnly={false}
        value={answerD}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              questionId,
              text,
              svgKey,
              answerA,
              answerB,
              answerC,
              answerD: value,
              correctAnswer,
              solution,
              bucket,
              tags,
              difficulty,
              geneIndex,
            };
            const result = onChange(modelFields);
            value = result?.answerD ?? value;
          }
          if (errors.answerD?.hasError) {
            runValidationTasks("answerD", value);
          }
          setAnswerD(value);
        }}
        onBlur={() => runValidationTasks("answerD", answerD)}
        errorMessage={errors.answerD?.errorMessage}
        hasError={errors.answerD?.hasError}
        {...getOverrideProps(overrides, "answerD")}
      ></TextField>
      <TextField
        label="Correct answer"
        isRequired={true}
        isReadOnly={false}
        value={correctAnswer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              questionId,
              text,
              svgKey,
              answerA,
              answerB,
              answerC,
              answerD,
              correctAnswer: value,
              solution,
              bucket,
              tags,
              difficulty,
              geneIndex,
            };
            const result = onChange(modelFields);
            value = result?.correctAnswer ?? value;
          }
          if (errors.correctAnswer?.hasError) {
            runValidationTasks("correctAnswer", value);
          }
          setCorrectAnswer(value);
        }}
        onBlur={() => runValidationTasks("correctAnswer", correctAnswer)}
        errorMessage={errors.correctAnswer?.errorMessage}
        hasError={errors.correctAnswer?.hasError}
        {...getOverrideProps(overrides, "correctAnswer")}
      ></TextField>
      <TextField
        label="Solution"
        isRequired={false}
        isReadOnly={false}
        value={solution}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              questionId,
              text,
              svgKey,
              answerA,
              answerB,
              answerC,
              answerD,
              correctAnswer,
              solution: value,
              bucket,
              tags,
              difficulty,
              geneIndex,
            };
            const result = onChange(modelFields);
            value = result?.solution ?? value;
          }
          if (errors.solution?.hasError) {
            runValidationTasks("solution", value);
          }
          setSolution(value);
        }}
        onBlur={() => runValidationTasks("solution", solution)}
        errorMessage={errors.solution?.errorMessage}
        hasError={errors.solution?.hasError}
        {...getOverrideProps(overrides, "solution")}
      ></TextField>
      <TextField
        label="Bucket"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={bucket}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              questionId,
              text,
              svgKey,
              answerA,
              answerB,
              answerC,
              answerD,
              correctAnswer,
              solution,
              bucket: value,
              tags,
              difficulty,
              geneIndex,
            };
            const result = onChange(modelFields);
            value = result?.bucket ?? value;
          }
          if (errors.bucket?.hasError) {
            runValidationTasks("bucket", value);
          }
          setBucket(value);
        }}
        onBlur={() => runValidationTasks("bucket", bucket)}
        errorMessage={errors.bucket?.errorMessage}
        hasError={errors.bucket?.hasError}
        {...getOverrideProps(overrides, "bucket")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              questionId,
              text,
              svgKey,
              answerA,
              answerB,
              answerC,
              answerD,
              correctAnswer,
              solution,
              bucket,
              tags: values,
              difficulty,
              geneIndex,
            };
            const result = onChange(modelFields);
            values = result?.tags ?? values;
          }
          setTags(values);
          setCurrentTagsValue("");
        }}
        currentFieldValue={currentTagsValue}
        label={"Tags"}
        items={tags}
        hasError={errors?.tags?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("tags", currentTagsValue)
        }
        errorMessage={errors?.tags?.errorMessage}
        setFieldValue={setCurrentTagsValue}
        inputFieldRef={tagsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Tags"
          isRequired={false}
          isReadOnly={false}
          value={currentTagsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tags?.hasError) {
              runValidationTasks("tags", value);
            }
            setCurrentTagsValue(value);
          }}
          onBlur={() => runValidationTasks("tags", currentTagsValue)}
          errorMessage={errors.tags?.errorMessage}
          hasError={errors.tags?.hasError}
          ref={tagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tags")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Difficulty"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={difficulty}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              questionId,
              text,
              svgKey,
              answerA,
              answerB,
              answerC,
              answerD,
              correctAnswer,
              solution,
              bucket,
              tags,
              difficulty: value,
              geneIndex,
            };
            const result = onChange(modelFields);
            value = result?.difficulty ?? value;
          }
          if (errors.difficulty?.hasError) {
            runValidationTasks("difficulty", value);
          }
          setDifficulty(value);
        }}
        onBlur={() => runValidationTasks("difficulty", difficulty)}
        errorMessage={errors.difficulty?.errorMessage}
        hasError={errors.difficulty?.hasError}
        {...getOverrideProps(overrides, "difficulty")}
      ></TextField>
      <TextField
        label="Gene index"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={geneIndex}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              questionId,
              text,
              svgKey,
              answerA,
              answerB,
              answerC,
              answerD,
              correctAnswer,
              solution,
              bucket,
              tags,
              difficulty,
              geneIndex: value,
            };
            const result = onChange(modelFields);
            value = result?.geneIndex ?? value;
          }
          if (errors.geneIndex?.hasError) {
            runValidationTasks("geneIndex", value);
          }
          setGeneIndex(value);
        }}
        onBlur={() => runValidationTasks("geneIndex", geneIndex)}
        errorMessage={errors.geneIndex?.errorMessage}
        hasError={errors.geneIndex?.hasError}
        {...getOverrideProps(overrides, "geneIndex")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || questionModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || questionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
