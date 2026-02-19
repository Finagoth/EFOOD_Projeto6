import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #E66767;
  background-color: #fff;
  overflow: hidden;
  width: 100%;
  margin: 10px;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const CardImageWrapper = styled.div`
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0 0 5px 0;
  color: #E66767;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #E66767;
  flex-grow: 1;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: #E66767;
  color: #FFEBD9;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #b52b2b;
  }
`;

export const Rating = styled.span`
  color: #E66767;
  font-weight: bold;
  font-size: 18px
`;