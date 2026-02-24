import type { Observable } from "@legendapp/state";

export type Option = {
  label: string;
  value?: string;
  isDisabled?: boolean;
  icon?: React.ElementType | React.ReactNode;
  rytIcon?: React.ElementType | React.ReactNode;
};

export interface DropdownProps {
  $options: Observable<Option[] | string[]>;
  multiSelect?: boolean;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string | Option[]) => void;
  label?: string;
  addBtn?: React.ReactNode;
  rytIcon?: React.ElementType;
  icon?: React.ElementType;
  isRequired?: boolean;
  scrollbarNone?: boolean;
}
