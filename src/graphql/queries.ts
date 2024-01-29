/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserRequest = /* GraphQL */ `query GetUserRequest($id: ID!) {
  getUserRequest(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserRequestQueryVariables,
  APITypes.GetUserRequestQuery
>;
export const listUserRequests = /* GraphQL */ `query ListUserRequests(
  $filter: ModelUserRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      requestType
      response
      message
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserRequestsQueryVariables,
  APITypes.ListUserRequestsQuery
>;
export const getNotification = /* GraphQL */ `query GetNotification($id: ID!) {
  getNotification(id: $id) {
    id
    message
    cleared
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNotificationQueryVariables,
  APITypes.GetNotificationQuery
>;
export const listNotifications = /* GraphQL */ `query ListNotifications(
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      message
      cleared
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationsQueryVariables,
  APITypes.ListNotificationsQuery
>;
