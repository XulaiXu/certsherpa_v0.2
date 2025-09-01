/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      text
      svgKey
      answerA
      answerB
      answerC
      answerD
      correctAnswer
      bucket
      randomIndex
      tags
      difficulty
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        svgKey
        answerA
        answerB
        answerC
        answerD
        correctAnswer
        bucket
        randomIndex
        tags
        difficulty
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listByBucketRandom = /* GraphQL */ `
  query ListByBucketRandom(
    $bucket: Int!
    $randomIndex: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listByBucketRandom(
      bucket: $bucket
      randomIndex: $randomIndex
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        svgKey
        answerA
        answerB
        answerC
        answerD
        correctAnswer
        bucket
        randomIndex
        tags
        difficulty
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
