import {
  Modal as RACModal,
  type ModalOverlayProps,
} from "react-aria-components";
import "./style.scss";

export function Modal(props: ModalOverlayProps) {
  return <RACModal {...props} />;
}
