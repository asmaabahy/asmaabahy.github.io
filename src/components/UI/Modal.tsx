import { motion } from "motion/react";
import { createPortal } from "react-dom";

import { ReactNode } from "react";

function Modal({ children }: { children: ReactNode }) {
  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;

  return createPortal(
    <motion.dialog
      open
      className="modal"
    >
      {children}
    </motion.dialog>,
    modalRoot
  );
}

export default Modal;
