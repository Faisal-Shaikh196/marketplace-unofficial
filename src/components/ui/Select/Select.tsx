import { Select as AriaSelect, SelectValue } from "react-aria-components";
import type {
  SelectProps as AriaSelectProps,
  ListBoxItemProps,
  ValidationResult,
  ListBoxProps,
  Key,
} from "react-aria-components";
import { Button } from "../Button/Button";
import { DropdownItem, DropdownListBox } from "../ListBox/ListBox";
import { ChevronDown } from "lucide-react";
import { Popover } from "../Popover/Popover";
import { Label, FieldError, Description } from "../Form/Form";
import "./style.scss";
import type React from "react";
import { isValidElement, useState } from "react";

export type SelectOption = {
  label: string;
  value?: string;
  icon?: React.ElementType | React.ReactNode;
  rytIcon?: React.ElementType | React.ReactNode;
};

export interface SelectProps<T extends object> extends Omit<
  AriaSelectProps<T>,
  "children"
> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  addBtn?: React.ReactNode;
  options?: SelectOption[];
  placeholder?: string;
  scrollbarNone?: boolean;
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  addBtn,
  placeholder,
  options,
  defaultSelectedKey,
  scrollbarNone = false,
  onChange,
  ...props
}: SelectProps<T>) {
  const [selectedKey, setSelectedKey] = useState<Key | null>(
    defaultSelectedKey ?? null
  );

  const handleSelectionChange = (key: Key | null) => {
    setSelectedKey(key);
    onSelectionChange?.(key);
  };

  const getSelectedIcon = () => {
    if (!options || !selectedKey) return null;
    const selectedOption = options.find(
      (opt) => opt.value === selectedKey || opt.label === selectedKey
    );
    if (!selectedOption?.icon) return null;

    if (isValidElement(selectedOption.icon)) return selectedOption.icon;
    const Icon = selectedOption.icon as React.ElementType;
    return <Icon size={16} />;
  };

  return (
    <AriaSelect
      {...props}
      placeholder={placeholder}
      defaultSelectedKey={defaultSelectedKey}
      aria-label={label}
      onChange={handleSelectionChange}
    >
      {label && (
        <Label>
          {label}
          {props.isRequired && <span>*</span>}
        </Label>
      )}

      <Button>
        <SelectValue>
          {({ selectedText, isPlaceholder }) => {
            if (isPlaceholder) return placeholder ?? "Select";
            const icon = getSelectedIcon();
            return (
              <span
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                {icon}
                {selectedText}
              </span>
            );
          }}
        </SelectValue>
        <ChevronDown />
      </Button>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover hideArrow className="select-popover">
        <SelectListBox
          style={scrollbarNone ? { scrollbarWidth: "none" } : undefined}
          items={items}
        >
          {children}
        </SelectListBox>
        <div className="select-btn"> {addBtn && addBtn}</div>
      </Popover>
    </AriaSelect>
  );
}

export function SelectListBox<T extends object>(props: ListBoxProps<T>) {
  return <DropdownListBox {...props} />;
}

export function SelectItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} />;
}
