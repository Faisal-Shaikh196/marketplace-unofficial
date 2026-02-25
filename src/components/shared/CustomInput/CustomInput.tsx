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
import React, { useRef } from "react";
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
  otp?: boolean;
  otpLength?: number;
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
  otp = false,
  otpLength = 4,
  ...props
}: SearchFieldProps) {
  const $store = useObservable({
    isSecure: secureTextEntry ?? false,
    otpValues: Array(otpLength).fill("") as string[],
  });

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleTogglePassword = () => {
    $store.isSecure.set((prev) => !prev);
  };

  const handleOtpChange = (index: number, value: string) => {
    // Only allow single digit
    const digit = value.slice(-1);
    if (digit && !/^\d$/.test(digit)) return;

    const newOtpValues = [...$store.otpValues.get()];
    newOtpValues[index] = digit;
    $store.otpValues.set(newOtpValues);

    // Call onChange with combined OTP value
    onChange?.(newOtpValues.join(""));

    // Auto-focus next input
    if (digit && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !$store.otpValues.get()[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, otpLength);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtpValues = Array(otpLength).fill("");
    pastedData.split("").forEach((char, i) => {
      if (i < otpLength) newOtpValues[i] = char;
    });
    $store.otpValues.set(newOtpValues);
    onChange?.(newOtpValues.join(""));

    // Focus last filled input or the next empty one
    const focusIndex = Math.min(pastedData.length, otpLength - 1);
    inputRefs.current[focusIndex]?.focus();
  };

  if (otp) {
    return (
      <div className="custom-searchfield otp-field">
        <div className="input-header">
          {label && (
            <Label className="input-title">
              {label}
              {props.isRequired && <span>*</span>}
            </Label>
          )}
        </div>
        <div className="otp-inputs">
          <Memo>
            {() => (
              <>
                {$store.otpValues.get().map((val, index) => (
                  <React.Fragment key={index}>
                    <Input
                      ref={(el) => {
                        inputRefs.current[index] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      className="otp-input"
                      value={val}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      onPaste={handleOtpPaste}
                      name={name ? `${name}-${index}` : undefined}
                    />
                    {index < otpLength - 1 && (
                      <span className="otp-separator">.</span>
                    )}
                  </React.Fragment>
                ))}
              </>
            )}
          </Memo>
        </div>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </div>
    );
  }

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
              className="react-aria-Input inset para-sm"
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
