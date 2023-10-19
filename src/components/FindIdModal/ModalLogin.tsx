import React from "react";
import * as S from "./ModalLogin.style";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <S.Container>
      <S.Content>
        {children}
        <S.CloseBtn onClick={onClose}>확인</S.CloseBtn>
      </S.Content>
      <S.ModalOverlay onClick={onClose} />
    </S.Container>
  );
};

export default Modal;
