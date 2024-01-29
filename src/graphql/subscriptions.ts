/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserRequest = /* GraphQL */ `subscription OnCreateUserRequest(
  $filter: ModelSubscriptionUserRequestFilterInput
) {
  onCreateUserRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserRequestSubscriptionVariables,
  APITypes.OnCreateUserRequestSubscription
>;
export const onUpdateUserRequest = /* GraphQL */ `subscription OnUpdateUserRequest(
  $filter: ModelSubscriptionUserRequestFilterInput
) {
  onUpdateUserRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserRequestSubscriptionVariables,
  APITypes.OnUpdateUserRequestSubscription
>;
export const onDeleteUserRequest = /* GraphQL */ `subscription OnDeleteUserRequest(
  $filter: ModelSubscriptionUserRequestFilterInput
) {
  onDeleteUserRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserRequestSubscriptionVariables,
  APITypes.OnDeleteUserRequestSubscription
>;
export const onCreateNotification = /* GraphQL */ `subscription OnCreateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onCreateNotification(filter: $filter) {
    id
    message
    cleared
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNotificationSubscriptionVariables,
  APITypes.OnCreateNotificationSubscription
>;
export const onUpdateNotification = /* GraphQL */ `subscription OnUpdateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onUpdateNotification(filter: $filter) {
    id
    message
    cleared
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationSubscriptionVariables,
  APITypes.OnUpdateNotificationSubscription
>;
export const onDeleteNotification = /* GraphQL */ `subscription OnDeleteNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onDeleteNotification(filter: $filter) {
    id
    message
    cleared
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationSubscriptionVariables,
  APITypes.OnDeleteNotificationSubscription
>;
