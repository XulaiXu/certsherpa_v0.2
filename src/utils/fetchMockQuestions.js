import { generateClient } from 'aws-amplify/api';
import { listByBucketRandom } from '../graphql/queries';

export async function fetchMockQuestions(N = 10) {
  try {
    console.log('🔍 fetchMockQuestions: Starting to fetch questions...');
    const client = generateClient(); // Call after Amplify.configure has run
    const bucket = Math.floor(Math.random() * 100);
    console.log('🔍 fetchMockQuestions: Using bucket:', bucket);

    const a = await client.graphql({
      query: listByBucketRandom,
      variables: { bucket, limit: N }
    });
    console.log('🔍 fetchMockQuestions: First query result:', a?.data?.listByBucketRandom?.items?.length || 0, 'questions');
    let items = a?.data?.listByBucketRandom?.items ?? [];

    if (items.length < N) {
      // Try a different bucket if we don't have enough questions
      const bucket2 = Math.floor(Math.random() * 100);
      console.log('🔍 fetchMockQuestions: Trying second bucket:', bucket2);
      const b = await client.graphql({
        query: listByBucketRandom,
        variables: { bucket: bucket2, limit: N - items.length }
      });
      console.log('🔍 fetchMockQuestions: Second query result:', b?.data?.listByBucketRandom?.items?.length || 0, 'questions');
      items = items.concat(b?.data?.listByBucketRandom?.items ?? []);
    }

    // shuffle to reduce ordering bias
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    
    // Transform items to match expected format
    const transformedItems = items.slice(0, N).map(item => ({
      id: item.id,
      text: item.text,
      answerA: item.answerA,
      answerB: item.answerB,
      answerC: item.answerC,
      answerD: item.answerD,
      correctAnswer: item.correctAnswer
    }));
    
    console.log('🔍 fetchMockQuestions: Returning', transformedItems.length, 'questions');
    console.log('🔍 fetchMockQuestions: Sample question:', transformedItems[0]);
    
    return transformedItems;
  } catch (error) {
    console.error('Error fetching questions:', error);
    // Return demo questions if database is unavailable
    return [
      {
        id: 'demo1',
        text: 'What is the capital of France?',
        answerA: 'London',
        answerB: 'Paris',
        answerC: 'Berlin',
        answerD: 'Madrid',
        correctAnswer: 'B'
      },
      {
        id: 'demo2',
        text: 'Which planet is known as the Red Planet?',
        answerA: 'Venus',
        answerB: 'Mars',
        answerC: 'Jupiter',
        answerD: 'Saturn',
        correctAnswer: 'B'
      },
      {
        id: 'demo3',
        text: 'What is the largest ocean on Earth?',
        answerA: 'Atlantic Ocean',
        answerB: 'Indian Ocean',
        answerC: 'Arctic Ocean',
        answerD: 'Pacific Ocean',
        correctAnswer: 'D'
      },
      {
        id: 'demo4',
        text: 'Who wrote "Romeo and Juliet"?',
        answerA: 'Charles Dickens',
        answerB: 'William Shakespeare',
        answerC: 'Jane Austen',
        answerD: 'Mark Twain',
        correctAnswer: 'B'
      },
      {
        id: 'demo5',
        text: 'What is the chemical symbol for gold?',
        answerA: 'Ag',
        answerB: 'Au',
        answerC: 'Fe',
        answerD: 'Cu',
        correctAnswer: 'B'
      },
      {
        id: 'demo6',
        text: 'What year did World War II end?',
        answerA: '1943',
        answerB: '1944',
        answerC: '1945',
        answerD: '1946',
        correctAnswer: 'C'
      },
      {
        id: 'demo7',
        text: 'What is the square root of 64?',
        answerA: '6',
        answerB: '7',
        answerC: '8',
        answerD: '9',
        correctAnswer: 'C'
      },
      {
        id: 'demo8',
        text: 'Which country is home to the kangaroo?',
        answerA: 'New Zealand',
        answerB: 'South Africa',
        answerC: 'Australia',
        answerD: 'India',
        correctAnswer: 'C'
      },
      {
        id: 'demo9',
        text: 'What is the largest mammal?',
        answerA: 'African Elephant',
        answerB: 'Blue Whale',
        answerC: 'Giraffe',
        answerD: 'Hippopotamus',
        correctAnswer: 'B'
      },
      {
        id: 'demo10',
        text: 'What is the capital of Japan?',
        answerA: 'Seoul',
        answerB: 'Beijing',
        answerC: 'Tokyo',
        answerD: 'Bangkok',
        correctAnswer: 'C'
      }
    ];
  }
}
