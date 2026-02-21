import styled from "styled-components";

const primaryColor = "#E66767";
const lightColor = "#FFEBD9";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background-color: ${primaryColor};
  color: #fff;
  height: 100%;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: #fff;
`;

export const Input = styled.input`
  height: 32px;
  padding: 0 8px;
  border: none;
  outline: none;
  width: 100%;
  background-color: ${lightColor};
  font-weight: 600;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

export const Button = styled.button`
  height: 32px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  background-color: ${lightColor};
  color: ${primaryColor};
  transition: 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  margin-top: 8px;
`;

export const SecondaryButton = styled(Button)`
  margin-top: 4px;
`;

export const PanelTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px 0;
`;