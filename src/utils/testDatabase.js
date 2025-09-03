import { generateClient } from 'aws-amplify/api';
import { listQuestions } from '../graphql/queries';

export async function testDatabaseConnection() {
  try {
    console.log('🧪 Testing database connection...');
    
    const client = generateClient();
    console.log('🧪 Client generated successfully');
    
    // Try a simple list query first
    const result = await client.graphql({
      query: listQuestions,
      variables: { limit: 5 }
    });
    
    console.log('🧪 List query result:', result);
    console.log('🧪 Questions found:', result?.data?.listQuestions?.items?.length || 0);
    
    if (result?.data?.listQuestions?.items?.length > 0) {
      console.log('🧪 Sample question:', result.data.listQuestions.items[0]);
    }
    
    return result;
  } catch (error) {
    console.error('🧪 Database connection test failed:', error);
    throw error;
  }
}
