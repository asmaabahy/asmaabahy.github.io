import { motion } from "motion/react";
import { createPortal } from "react-dom";

function Modal({children}) {
  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;

  return createPortal(
    <motion.dialog
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      open
      className="modal"
    >
      {children}
    </motion.dialog>,
    modalRoot
  );
}

export default Modal;
