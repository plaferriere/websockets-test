/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserRequestInput = {
  id?: string | null,
  requestType: RequestType,
  response?: string | null,
  message?: string | null,
  status?: StatusType | null,
};

export enum RequestType {
  GET_SIMS = "GET_SIMS",
  LONG_PROCESS = "LONG_PROCESS",
}


export enum StatusType {
  STARTING = "STARTING",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
}


export type ModelUserRequestConditionInput = {
  requestType?: ModelRequestTypeInput | null,
  response?: ModelStringInput | null,
  message?: ModelStringInput | null,
  status?: ModelStatusTypeInput | null,
  and?: Array< ModelUserRequestConditionInput | null > | null,
  or?: Array< ModelUserRequestConditionInput | null > | null,
  not?: ModelUserRequestConditionInput | null,
};

export type ModelRequestTypeInput = {
  eq?: RequestType | null,
  ne?: RequestType | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStatusTypeInput = {
  eq?: StatusType | null,
  ne?: StatusType | null,
};

export type UserRequest = {
  __typename: "UserRequest",
  id: string,
  requestType: RequestType,
  response?: string | null,
  message?: string | null,
  status?: StatusType | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserRequestInput = {
  id: string,
  requestType?: RequestType | null,
  response?: string | null,
  message?: string | null,
  status?: StatusType | null,
};

export type DeleteUserRequestInput = {
  id: string,
};

export type CreateNotificationInput = {
  id?: string | null,
  message: string,
  cleared?: boolean | null,
};

export type ModelNotificationConditionInput = {
  message?: ModelStringInput | null,
  cleared?: ModelBooleanInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Notification = {
  __typename: "Notification",
  id: string,
  message: string,
  cleared?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNotificationInput = {
  id: string,
  message?: string | null,
  cleared?: boolean | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type ModelUserRequestFilterInput = {
  id?: ModelIDInput | null,
  requestType?: ModelRequestTypeInput | null,
  response?: ModelStringInput | null,
  message?: ModelStringInput | null,
  status?: ModelStatusTypeInput | null,
  and?: Array< ModelUserRequestFilterInput | null > | null,
  or?: Array< ModelUserRequestFilterInput | null > | null,
  not?: ModelUserRequestFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserRequestConnection = {
  __typename: "ModelUserRequestConnection",
  items:  Array<UserRequest | null >,
  nextToken?: string | null,
};

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  cleared?: ModelBooleanInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserRequestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  requestType?: ModelSubscriptionStringInput | null,
  response?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserRequestFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserRequestFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  cleared?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateUserRequestMutationVariables = {
  input: CreateUserRequestInput,
  condition?: ModelUserRequestConditionInput | null,
};

export type CreateUserRequestMutation = {
  createUserRequest?:  {
    __typename: "UserRequest",
    id: string,
    requestType: RequestType,
    response?: string | null,
    message?: string | null,
    status?: StatusType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserRequestMutationVariables = {
  input: UpdateUserRequestInput,
  condition?: ModelUserRequestConditionInput | null,
};

export type UpdateUserRequestMutation = {
  updateUserRequest?:  {
    __typename: "UserRequest",
    id: string,
    requestType: RequestType,
    response?: string | null,
    message?: string | null,
    status?: StatusType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserRequestMutationVariables = {
  input: DeleteUserRequestInput,
  condition?: ModelUserRequestConditionInput | null,
};

export type DeleteUserRequestMutation = {
  deleteUserRequest?:  {
    __typename: "UserRequest",
    id: string,
    requestType: RequestType,
    response?: string | null,
    message?: string | null,
    status?: StatusType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    id: string,
    message: string,
    cleared?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    id: string,
    message: string,
    cleared?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    id: string,
    message: string,
    cleared?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserRequestQueryVariables = {
  id: string,
};

export type GetUserRequestQuery = {
  getUserRequest?:  {
    __typename: "UserRequest",
    id: string,
    requestType: RequestType,
    response?: string | null,
    message?: string | null,
    status?: StatusType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserRequestsQueryVariables = {
  filter?: ModelUserRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserRequestsQuery = {
  listUserRequests?:  {
    __typename: "ModelUserRequestConnection",
    items:  Array< {
      __typename: "UserRequest",
      id: string,
      requestType: RequestType,
      response?: string | null,
      message?: string | null,
      status?: StatusType | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    id: string,
    message: string,
    cleared?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      message: string,
      cleared?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserRequestSubscriptionVariables = {
  filter?: ModelSubscriptionUserRequestFilterInput | null,
};

export type OnCreateUserRequestSubscription = {
  onCreateUserRequest?:  {
    __typename: "UserRequest",
    id: string,
    requestType: RequestType,
    response?: string | null,
    message?: string | null,
    status?: StatusType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserRequestSubscriptionVariables = {
  filter?: ModelSubscriptionUserRequestFilterInput | null,
};

export type OnUpdateUserRequestSubscription = {
  onUpdateUserRequest?:  {
    __typename: "UserRequest",
    id: string,
    requestType: RequestType,
    response?: string | null,
    message?: string | null,
    status?: StatusType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserRequestSubscriptionVariables = {
  filter?: ModelSubscriptionUserRequestFilterInput | null,
};

export type OnDeleteUserRequestSubscription = {
  onDeleteUserRequest?:  {
    __typename: "UserRequest",
    id: string,
    requestType: RequestType,
    response?: string | null,
    message?: string | null,
    status?: StatusType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    id: string,
    message: string,
    cleared?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    id: string,
    message: string,
    cleared?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    id: string,
    message: string,
    cleared?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
