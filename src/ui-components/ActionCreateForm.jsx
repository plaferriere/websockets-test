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
  SwitchField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createAction } from "../graphql/mutations";
const client = generateClient();
export default function ActionCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    cleared: false,
    completed: false,
  };
  const [requestType, setRequestType] = React.useState(
    initialValues.requestType
  );
  const [cleared, setCleared] = React.useState(initialValues.cleared);
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRequestType(initialValues.requestType);
    setCleared(initialValues.cleared);
    setCompleted(initialValues.completed);
    setErrors({});
  };
  const validations = {
    requestType: [],
    cleared: [],
    completed: [],
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
          cleared,
          completed,
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
            query: createAction.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ActionCreateForm")}
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
              cleared,
              completed,
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
      </SelectField>
      <SwitchField
        label="Cleared"
        defaultChecked={false}
        isDisabled={false}
        isChecked={cleared}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              requestType,
              cleared: value,
              completed,
            };
            const result = onChange(modelFields);
            value = result?.cleared ?? value;
          }
          if (errors.cleared?.hasError) {
            runValidationTasks("cleared", value);
          }
          setCleared(value);
        }}
        onBlur={() => runValidationTasks("cleared", cleared)}
        errorMessage={errors.cleared?.errorMessage}
        hasError={errors.cleared?.hasError}
        {...getOverrideProps(overrides, "cleared")}
      ></SwitchField>
      <SwitchField
        label="Completed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={completed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              requestType,
              cleared,
              completed: value,
            };
            const result = onChange(modelFields);
            value = result?.completed ?? value;
          }
          if (errors.completed?.hasError) {
            runValidationTasks("completed", value);
          }
          setCompleted(value);
        }}
        onBlur={() => runValidationTasks("completed", completed)}
        errorMessage={errors.completed?.errorMessage}
        hasError={errors.completed?.hasError}
        {...getOverrideProps(overrides, "completed")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
