import { createPortal } from "react-dom";

import { ReactNode, useEffect } from "react";

function Modal({ children }: { children: ReactNode }) {
  const modalRoot = document.getElementById("modal");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!modalRoot) return null;

  return createPortal(
    <div className="fixed overflow-hidden inset-0 p-5 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm">
      <dialog
        open
        className="bg-background text-foreground border border-border rounded-2xl mx-auto shadow-xl p-6 animate-fade-in"
      >
        {children}
      </dialog>
    </div>,
    modalRoot
  );
}

export default Modal;
