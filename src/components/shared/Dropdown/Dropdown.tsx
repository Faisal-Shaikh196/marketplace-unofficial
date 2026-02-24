import { useObservable, useObserve } from "@legendapp/state/react";
import "./style.scss";
import type { DropdownProps, Option } from "../../../types/dropdown";
import { Select, SelectItem } from "../../ui/Select/Select";
import { type Key, isValidElement } from "react";

const Dropdown = ({
  $options,
  multiSelect = false,
  placeholder,
  defaultValue,
  onChange,
  label,
  addBtn,
  isRequired = false,
  scrollbarNone = false,
}: DropdownProps) => {
  const $state = useObservable({
    optionType: "string" as "string" | "object",
  });

  const handleChange = (key: Key | Key[] | null) => {
    if (!key) return;

    const keyString = Array.isArray(key) ? key.map(String) : String(key);
    const options = $options.get();
    let result: string | Option | string[] | Option[];

    if (multiSelect) {
      if ($options.get().length > 0) {
        if (typeof options[0] === "string") {
          result = options.filter((opt) =>
            keyString.includes(opt as string)
          ) as string[];
        } else {
          result = (options as Option[]).filter(
            (opt) =>
              keyString.includes(opt.value ?? opt.label) ||
              keyString.includes(opt.label)
          ) as Option[];
        }
      }
    } else {
      if ($state.optionType.get() === "string") {
        result = keyString;
      } else {
        const opts = options as Option[];
        let res =
          opts.find(
            (opt) => opt.value === keyString || opt.label === keyString
          ) ?? keyString;
        result = res;
      }
    }

    onChange && onChange(result);
  };

  useObserve(() => {
    const firstOption = $options.get()[0];

    if (typeof firstOption === "string") {
      $state.optionType.set("string");
    } else if (typeof firstOption === "object" && firstOption !== null) {
      $state.optionType.set("object");
    }
  });

  return (
    <>
      <Select
        label={label}
        aria-label={label}
        selectionMode={multiSelect ? "multiple" : "single"}
        placeholder={placeholder}
        defaultSelectedKey={
          typeof defaultValue === "string" ? defaultValue : undefined
        }
        onSelectionChange={handleChange}
        scrollbarNone={scrollbarNone}
        isRequired={isRequired}
        addBtn={addBtn}
        options={
          $state.optionType.get() === "object"
            ? ($options.get() as Option[])
            : undefined
        }
      >
        {$state.optionType.get() === "string" &&
          ($options.get() as string[]).map((option: string) => (
            <SelectItem key={option} id={option}>
              {option}
            </SelectItem>
          ))}

        {$state.optionType.get() === "object" &&
          ($options.get() as Option[]).map((option) => {
            const IconComponent = option.icon;
            const RytIconComponent = option.rytIcon;

            const renderIcon = () => {
              if (!IconComponent) return null;
              if (isValidElement(IconComponent)) return IconComponent;
              const Icon = IconComponent as React.ElementType;
              return <Icon size={13} />;
            };

            const renderRytIcon = () => {
              if (!RytIconComponent) return null;
              if (isValidElement(RytIconComponent)) return RytIconComponent;
              const RytIcon = RytIconComponent as React.ElementType;
              return <RytIcon size={13} />;
            };

            return (
              <SelectItem
                key={option.value ?? option.label}
                id={option.value ?? option.label}
                isDisabled={option.isDisabled ? true : false}
                textValue={option.label}
                style={
                  option.icon
                    ? {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                        justifyContent: "flex-start",
                        padding: "5px 10px 5px 20px",
                      }
                    : undefined
                }
              >
                {renderIcon()}
                <span style={{ flex: 1 }}> {option.label}</span>    
                {renderRytIcon()}
              </SelectItem>
            );
          })}
      </Select>
    </>
  );
};

export default Dropdown;
