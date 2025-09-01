/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
