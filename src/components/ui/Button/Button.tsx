import { Button as RACButton, composeRenderProps } from "react-aria-components";
import type { ButtonProps as RACButtonProps } from "react-aria-components";
import { ProgressCircle } from "../ProgressCircle/ProgressCircle";
import "./style.scss";

type SizeToken = "small" | "medium" | "large";
type VariantToken = "primary" | "secondary" | "quiet" | "success" | "danger";

interface ButtonProps extends Omit<RACButtonProps, "className"> {
  /**
   * The visual style of the button (Vanilla CSS implementation specific).
   * @default 'primary'
   */
  variant?: VariantToken | SizeToken;
  /**
   * Explicit size override. Defaults to using the variant when it matches a size token.
   */
  size?: SizeToken;
  className?: string;
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
}

export function Button({
  variant = "primary",
  size,
  className,
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ...rest
}: ButtonProps) {
  const isSizeToken = (value: string): value is SizeToken =>
    ["small", "medium", "large"].includes(value as SizeToken);

  const resolvedSize = size
    ? size
    : isSizeToken(variant)
      ? (variant as SizeToken)
      : undefined;

  const resolvedVariant: VariantToken = isSizeToken(variant)
    ? "primary"
    : (variant as VariantToken);

  const mergedClassName = ["react-aria-Button", "button-base", className]
    .filter(Boolean)
    .join(" ");

  return (
    <RACButton
      {...rest}
      className={mergedClassName}
      data-variant={resolvedVariant}
      data-size={resolvedSize}
    >
      {composeRenderProps(children, (content, { isPending }) => (
        <>
          {LeftIcon && <LeftIcon />}
          {!isPending && content}
          {isPending && (
            <ProgressCircle aria-label="Saving..." isIndeterminate />
          )}
          {RightIcon && <RightIcon />}
        </>
      ))}
    </RACButton>
  );
}
