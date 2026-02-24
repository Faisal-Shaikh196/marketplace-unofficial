import {
  Button,
  Input,
  SearchField as AriaSearchField,
} from "react-aria-components";
import type {
  SearchFieldProps as AriaSearchFieldProps,
  ValidationResult,
} from "react-aria-components";
import { Label, FieldError, Description } from "../Form/Form";
import { Info } from "lucide-react";
import "../styles/SearchField.css";
import { Tooltip, TooltipTrigger } from "../Tooltip/Tooltip";
import React, { useRef } from "react";

export interface SearchFieldProps extends AriaSearchFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
  icon?: React.ElementType;
  tooltip?: string;
}

export function SearchField({
  label,
  description,
  errorMessage,
  placeholder,
  tooltip,
  icon,
  ...props
}: SearchFieldProps) {
  const renderCount = useRef(0);
  renderCount.current += 1;
  console.log(`SearchField render count: ${renderCount.current}`);

  return (
    <AriaSearchField className="custom-searchfield" {...props}>
      {label && <Label>{label}</Label>}
      {icon && React.createElement(icon)}
      <Input
        placeholder={placeholder}
        type="text"
        className="react-aria-Input inset"
      />
      {tooltip && (
        <TooltipTrigger>
          <Button className="clear-button" aria-label={tooltip}>
            <Info />
          </Button>
          <Tooltip>{tooltip}</Tooltip>
        </TooltipTrigger>
      )}
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaSearchField>
  );
}
