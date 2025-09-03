/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onCreateQuestion(filter: $filter) {
      id
      questionId
      text
      svgKey
      answerA
      answerB
      answerC
      answerD
      correctAnswer
      solution
      bucket
      tags
      difficulty
      geneIndex
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onUpdateQuestion(filter: $filter) {
      id
      questionId
      text
      svgKey
      answerA
      answerB
      answerC
      answerD
      correctAnswer
      solution
      bucket
      tags
      difficulty
      geneIndex
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onDeleteQuestion(filter: $filter) {
      id
      questionId
      text
      svgKey
      answerA
      answerB
      answerC
      answerD
      correctAnswer
      solution
      bucket
      tags
      difficulty
      geneIndex
      createdAt
      updatedAt
      __typename
    }
  }
`;
