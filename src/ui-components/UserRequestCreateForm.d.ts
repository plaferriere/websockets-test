/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type UserRequestCreateFormInputValues = {
    requestType?: string;
    response?: string;
    message?: string;
    status?: string;
};
export declare type UserRequestCreateFormValidationValues = {
    requestType?: ValidationFunction<string>;
    response?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserRequestCreateFormOverridesProps = {
    UserRequestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    requestType?: PrimitiveOverrideProps<SelectFieldProps>;
    response?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type UserRequestCreateFormProps = React.PropsWithChildren<{
    overrides?: UserRequestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserRequestCreateFormInputValues) => UserRequestCreateFormInputValues;
    onSuccess?: (fields: UserRequestCreateFormInputValues) => void;
    onError?: (fields: UserRequestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserRequestCreateFormInputValues) => UserRequestCreateFormInputValues;
    onValidate?: UserRequestCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserRequestCreateForm(props: UserRequestCreateFormProps): React.ReactElement;
