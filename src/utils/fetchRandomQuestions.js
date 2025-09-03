import { generateClient } from 'aws-amplify/api';
import { listByBucketRandom } from '../graphql/queries';

const client = generateClient();

export async function fetchRandomQuestions(N) {
  const bucket = Math.floor(Math.random() * 100);

  const a = await client.graphql({
    query: listByBucketRandom,
    variables: { bucket, limit: N }
  });
  let items = a?.data?.listByBucketRandom?.items ?? [];

  if (items.length < N) {
    // Try a different bucket if we don't have enough questions
    const bucket2 = Math.floor(Math.random() * 100);
    const b = await client.graphql({
      query: listByBucketRandom,
      variables: { bucket: bucket2, limit: N - items.length }
    });
    items = items.concat(b?.data?.listByBucketRandom?.items ?? []);
  }

  // shuffle to reduce ordering bias
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items.slice(0, N);
}
