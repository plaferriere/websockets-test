/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUserRequest } from "../graphql/queries";
import { updateUserRequest } from "../graphql/mutations";
const client = generateClient();
export default function UserRequestUpdateForm(props) {
  const {
    id: idProp,
    userRequest: userRequestModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    requestType: "",
    response: "",
    message: "",
    status: "",
  };
  const [requestType, setRequestType] = React.useState(
    initialValues.requestType
  );
  const [response, setResponse] = React.useState(initialValues.response);
  const [message, setMessage] = React.useState(initialValues.message);
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRequestRecord
      ? { ...initialValues, ...userRequestRecord }
      : initialValues;
    setRequestType(cleanValues.requestType);
    setResponse(cleanValues.response);
    setMessage(cleanValues.message);
    setStatus(cleanValues.status);
    setErrors({});
  };
  const [userRequestRecord, setUserRequestRecord] =
    React.useState(userRequestModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUserRequest.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserRequest
        : userRequestModelProp;
      setUserRequestRecord(record);
    };
    queryData();
  }, [idProp, userRequestModelProp]);
  React.useEffect(resetStateValues, [userRequestRecord]);
  const validations = {
    requestType: [{ type: "Required" }],
    response: [],
    message: [],
    status: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          requestType,
          response: response ?? null,
          message: message ?? null,
          status: status ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateUserRequest.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userRequestRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserRequestUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Request type"
        placeholder="Please select an option"
        isDisabled={false}
        value={requestType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requestType: value,
              response,
              message,
              status,
            };
            const result = onChange(modelFields);
            value = result?.requestType ?? value;
          }
          if (errors.requestType?.hasError) {
            runValidationTasks("requestType", value);
          }
          setRequestType(value);
        }}
        onBlur={() => runValidationTasks("requestType", requestType)}
        errorMessage={errors.requestType?.errorMessage}
        hasError={errors.requestType?.hasError}
        {...getOverrideProps(overrides, "requestType")}
      >
        <option
          children="Get sims"
          value="GET_SIMS"
          {...getOverrideProps(overrides, "requestTypeoption0")}
        ></option>
        <option
          children="Long process"
          value="LONG_PROCESS"
          {...getOverrideProps(overrides, "requestTypeoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Response"
        isRequired={false}
        isReadOnly={false}
        value={response}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requestType,
              response: value,
              message,
              status,
            };
            const result = onChange(modelFields);
            value = result?.response ?? value;
          }
          if (errors.response?.hasError) {
            runValidationTasks("response", value);
          }
          setResponse(value);
        }}
        onBlur={() => runValidationTasks("response", response)}
        errorMessage={errors.response?.errorMessage}
        hasError={errors.response?.hasError}
        {...getOverrideProps(overrides, "response")}
      ></TextField>
      <TextField
        label="Message"
        isRequired={false}
        isReadOnly={false}
        value={message}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requestType,
              response,
              message: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.message ?? value;
          }
          if (errors.message?.hasError) {
            runValidationTasks("message", value);
          }
          setMessage(value);
        }}
        onBlur={() => runValidationTasks("message", message)}
        errorMessage={errors.message?.errorMessage}
        hasError={errors.message?.hasError}
        {...getOverrideProps(overrides, "message")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              requestType,
              response,
              message,
              status: value,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Starting"
          value="STARTING"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Processing"
          value="PROCESSING"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Completed"
          value="COMPLETED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userRequestModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userRequestModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
