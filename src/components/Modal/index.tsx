import React, { useEffect } from "react";
import { Overlay, ModalBox, CloseButton } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox
        onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
      >
        <CloseButton type="button" onClick={onClose} aria-label="Fechar">
          ×
        </CloseButton>
        {children}
      </ModalBox>
    </Overlay>
  );
};
