/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUserRequest = /* GraphQL */ `mutation CreateUserRequest(
  $input: CreateUserRequestInput!
  $condition: ModelUserRequestConditionInput
) {
  createUserRequest(input: $input, condition: $condition) {
    id
    requestType
    response
    message
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserRequestMutationVariables,
  APITypes.CreateUserRequestMutation
>;
export const updateUserRequest = /* GraphQL */ `mutation UpdateUserRequest(
  $input: UpdateUserRequestInput!
  $condition: ModelUserRequestConditionInput
) {
  updateUserRequest(input: $input, condition: $condition) {
    id
    requestType
    response
    message
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserRequestMutationVariables,
  APITypes.UpdateUserRequestMutation
>;
export const deleteUserRequest = /* GraphQL */ `mutation DeleteUserRequest(
  $input: DeleteUserRequestInput!
  $condition: ModelUserRequestConditionInput
) {
  deleteUserRequest(input: $input, condition: $condition) {
    id
    requestType
    response
    message
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserRequestMutationVariables,
  APITypes.DeleteUserRequestMutation
>;
export const createNotification = /* GraphQL */ `mutation CreateNotification(
  $input: CreateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  createNotification(input: $input, condition: $condition) {
    id
    message
    cleared
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateNotificationMutationVariables,
  APITypes.CreateNotificationMutation
>;
export const updateNotification = /* GraphQL */ `mutation UpdateNotification(
  $input: UpdateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  updateNotification(input: $input, condition: $condition) {
    id
    message
    cleared
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateNotificationMutationVariables,
  APITypes.UpdateNotificationMutation
>;
export const deleteNotification = /* GraphQL */ `mutation DeleteNotification(
  $input: DeleteNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  deleteNotification(input: $input, condition: $condition) {
    id
    message
    cleared
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteNotificationMutationVariables,
  APITypes.DeleteNotificationMutation
>;
