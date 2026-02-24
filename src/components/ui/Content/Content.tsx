import {
  Heading as AriaHeading,
  Text as AriaText,
} from "react-aria-components";
import type { HeadingProps, TextProps } from "react-aria-components";

import "./style.scss";

export function Heading(props: HeadingProps) {
  return <AriaHeading {...props} />;
}

export function Text(props: TextProps) {
  return <AriaText {...props} />;
}
