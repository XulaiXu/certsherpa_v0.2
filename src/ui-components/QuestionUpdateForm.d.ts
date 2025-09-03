/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type QuestionUpdateFormInputValues = {
    questionId?: string;
    text?: string;
    svgKey?: string;
    answerA?: string;
    answerB?: string;
    answerC?: string;
    answerD?: string;
    correctAnswer?: string;
    solution?: string;
    bucket?: number;
    tags?: string[];
    difficulty?: number;
    geneIndex?: number;
};
export declare type QuestionUpdateFormValidationValues = {
    questionId?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    svgKey?: ValidationFunction<string>;
    answerA?: ValidationFunction<string>;
    answerB?: ValidationFunction<string>;
    answerC?: ValidationFunction<string>;
    answerD?: ValidationFunction<string>;
    correctAnswer?: ValidationFunction<string>;
    solution?: ValidationFunction<string>;
    bucket?: ValidationFunction<number>;
    tags?: ValidationFunction<string>;
    difficulty?: ValidationFunction<number>;
    geneIndex?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionUpdateFormOverridesProps = {
    QuestionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    questionId?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    svgKey?: PrimitiveOverrideProps<TextFieldProps>;
    answerA?: PrimitiveOverrideProps<TextFieldProps>;
    answerB?: PrimitiveOverrideProps<TextFieldProps>;
    answerC?: PrimitiveOverrideProps<TextFieldProps>;
    answerD?: PrimitiveOverrideProps<TextFieldProps>;
    correctAnswer?: PrimitiveOverrideProps<TextFieldProps>;
    solution?: PrimitiveOverrideProps<TextFieldProps>;
    bucket?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
    difficulty?: PrimitiveOverrideProps<TextFieldProps>;
    geneIndex?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionUpdateFormProps = React.PropsWithChildren<{
    overrides?: QuestionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    question?: any;
    onSubmit?: (fields: QuestionUpdateFormInputValues) => QuestionUpdateFormInputValues;
    onSuccess?: (fields: QuestionUpdateFormInputValues) => void;
    onError?: (fields: QuestionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionUpdateFormInputValues) => QuestionUpdateFormInputValues;
    onValidate?: QuestionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionUpdateForm(props: QuestionUpdateFormProps): React.ReactElement;
