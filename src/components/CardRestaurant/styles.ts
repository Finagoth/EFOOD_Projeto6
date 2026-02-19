import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #e6e6e6;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff8f2;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

export const CardImageWrapper = styled.div`
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
`;

export const CardContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardTitle = styled.h3`
  margin: 0;
  color: #E66767;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
`;

export const CardDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #E66767;
  line-height: 22px;
  flex-grow: 1;
`;

export const CardFooter = styled.div`
  margin-top: auto;
  padding-top: 12px;
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled.button`
  width: fit-content;
  background-color: #E66767;
  color: #FFEBD9;
  border: none;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 14px;
`;

export const Rating = styled.span`
  color: #E66767;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;

  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
`;