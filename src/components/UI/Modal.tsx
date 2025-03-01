import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { ModalProps } from "../../constants/interfaces";

export default function Modal({
  children,
  open,
  className = "",
  onClose,
}: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  

  useEffect(() => {
    const modal = dialog.current!;
    if (open) {
      modal.showModal();
    }
    return () => {
      modal.close();
    };
  }, [open]);

  useEffect(() => {
    const modal = dialog.current!;
    function handleClickOutside(event: MouseEvent) {
      if (modal && modal.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return createPortal(
    <dialog
      ref={dialog}
      className={`fixed inset-0 m-auto bg-transparent border-none w-11/12 max-w-[40rem] ${className}`}
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.getElementById("modal")!
  );
}
