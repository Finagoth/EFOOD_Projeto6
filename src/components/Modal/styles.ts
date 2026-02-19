import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 9999;
`;

export const ModalBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 1024px;
  background: #e66767;
  padding: 32px;
  color: #ffebd9;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  border: 0;
  cursor: pointer;
  background: transparent;
  color: #ffebd9;
  font-size: 20px;
  line-height: 24px;
`;