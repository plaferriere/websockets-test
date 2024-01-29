/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps } from "@aws-amplify/ui-react";
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
export declare type ActionCreateFormInputValues = {
    requestType?: string;
    cleared?: boolean;
    completed?: boolean;
};
export declare type ActionCreateFormValidationValues = {
    requestType?: ValidationFunction<string>;
    cleared?: ValidationFunction<boolean>;
    completed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActionCreateFormOverridesProps = {
    ActionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    requestType?: PrimitiveOverrideProps<SelectFieldProps>;
    cleared?: PrimitiveOverrideProps<SwitchFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ActionCreateFormProps = React.PropsWithChildren<{
    overrides?: ActionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ActionCreateFormInputValues) => ActionCreateFormInputValues;
    onSuccess?: (fields: ActionCreateFormInputValues) => void;
    onError?: (fields: ActionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActionCreateFormInputValues) => ActionCreateFormInputValues;
    onValidate?: ActionCreateFormValidationValues;
} & React.CSSProperties>;
export default function ActionCreateForm(props: ActionCreateFormProps): React.ReactElement;
