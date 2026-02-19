import styled from "styled-components";

export const Card = styled.div`
  background: #e66767;
  padding: 8px;
  color: #FFEBD9;
`;

export const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 8px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`;

export const Desc = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  font-family: Roboto, sans-serif;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 8px;
  cursor: pointer;
  background: #ffebd9;
  color: #e66767;
  font-weight: 700;
  font-size: 14px;
`;

export default Card;