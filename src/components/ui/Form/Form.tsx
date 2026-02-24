import {
  Form as RACForm,
  Label as RACLabel,
  FieldError as RACFieldError,
  Button,
} from "react-aria-components";
import type {
  FormProps,
  LabelProps,
  FieldErrorProps,
  ButtonProps,
  TextProps,
} from "react-aria-components";
import "./style.scss";
import { Text } from "../Content/Content";

export function Form(props: FormProps) {
  return <RACForm {...props} />;
}

export function Label(props: LabelProps) {
  return <RACLabel {...props} />;
}

export function FieldError(props: FieldErrorProps) {
  return <RACFieldError {...props} />;
}

export function Description(props: TextProps) {
  return <Text slot="description" className="field-description" {...props} />;
}

export function FieldButton(props: ButtonProps) {
  return <Button {...props} className="field-Button" />;
}
