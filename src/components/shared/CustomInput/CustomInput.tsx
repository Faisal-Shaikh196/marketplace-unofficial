import {
  Button,
  Input,
  SearchField as AriaSearchField,
} from "react-aria-components";
import type {
  SearchFieldProps as AriaSearchFieldProps,
  ValidationResult,
} from "react-aria-components";
import { Label, FieldError, Description } from "../../ui/Form/Form";
import { Eye, EyeClosed, Info } from "lucide-react";
import { Tooltip, TooltipTrigger } from "../../ui/Tooltip/Tooltip";
import React from "react";
import { Memo, useObservable } from "@legendapp/state/react";
import type { Observable } from "@legendapp/state";
import "./style.scss";

export interface SearchFieldProps extends AriaSearchFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
  icon?: React.ElementType;
  tooltip?: string;
  type?: "text" | "password" | "email" | "tel";
  secureTextEntry?: boolean;
  value$?: Observable<string>;
  onChange?: (value: string) => void;
  onClear?: () => void;
  name?: string;
}

function CustomInput({
  label,
  description,
  errorMessage,
  placeholder,
  tooltip,
  icon,
  secureTextEntry,
  type = "text",
  value$,
  onChange,
  onClear,
  name,
  ...props
}: SearchFieldProps) {
  //   const [isSecure, setIsSecure] = React.useState(secureTextEntry ?? false);
  const $store = useObservable({
    isSecure: secureTextEntry ?? false,
  });

  const handleTogglePassword = () => {
    $store.isSecure.set((prev) => !prev);
  };

  return (
    <AriaSearchField className="custom-searchfield" {...props}>
      <div className="input-header">
        {label && (
          <Label className="input-title">
            {label}
            {props.isRequired && <span>*</span>}
          </Label>
        )}
        {onClear && (
          <button className="input-clear" type="button" onClick={onClear}>
            Clear
          </button>
        )}
      </div>
      <div className="input-label">
        {icon &&
          React.createElement(icon, { size: 16, color: "var(--bg-grey-500)" })}
        <Memo>
          {() => (
            <Input
              name={name}
              placeholder={placeholder}
              type={$store.isSecure.get() ? "password" : type}
              className="react-aria-Input inset"
              value={value$?.get()}
              onChange={(e) => onChange?.(e.target.value)}
            />
          )}
        </Memo>
        {tooltip && (
          <TooltipTrigger>
            <Button className="clear-button" aria-label={tooltip}>
              <Info size={18} color="var(--bg-grey-500)" />
            </Button>
            <Tooltip>{tooltip}</Tooltip>
          </TooltipTrigger>
        )}
        {secureTextEntry && (
          <Memo>
            {() => (
              <button
                type="button"
                className="eye-button"
                aria-label="Toggle password visibility"
                onClick={handleTogglePassword}
              >
                {$store.isSecure.get() ? (
                  <Eye size={13} color="var(--bg-grey-500)" />
                ) : (
                  <EyeClosed size={13} color="var(--bg-grey-500)" />
                )}
              </button>
            )}
          </Memo>
        )}
      </div>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaSearchField>
  );
}

export default CustomInput;
