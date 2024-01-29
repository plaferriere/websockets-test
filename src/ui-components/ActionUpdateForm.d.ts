/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps } from "@aws-amplify/ui-react";
import { Action } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ActionUpdateFormInputValues = {
    requestType?: string;
    cleared?: boolean;
    completed?: boolean;
};
export declare type ActionUpdateFormValidationValues = {
    requestType?: ValidationFunction<string>;
    cleared?: ValidationFunction<boolean>;
    completed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActionUpdateFormOverridesProps = {
    ActionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    requestType?: PrimitiveOverrideProps<SelectFieldProps>;
    cleared?: PrimitiveOverrideProps<SwitchFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ActionUpdateFormProps = React.PropsWithChildren<{
    overrides?: ActionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    action?: Action;
    onSubmit?: (fields: ActionUpdateFormInputValues) => ActionUpdateFormInputValues;
    onSuccess?: (fields: ActionUpdateFormInputValues) => void;
    onError?: (fields: ActionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActionUpdateFormInputValues) => ActionUpdateFormInputValues;
    onValidate?: ActionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ActionUpdateForm(props: ActionUpdateFormProps): React.ReactElement;
