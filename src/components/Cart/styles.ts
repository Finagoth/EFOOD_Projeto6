import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 999;
`;

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 360px;
  background: #e66767;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  margin: 0;
  color: #ffebd9;
  font-size: 18px;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: #ffebd9;
  font-size: 24px;
  cursor: pointer;
  line-height: 1;
`;

export const Items = styled.div`
  padding: 8px 16px;
  overflow: auto;
  flex: 1;
`;

export const Item = styled.div`
  background: #ffebd9;
  padding: 8px;
  display: grid;
  grid-template-columns: 80px 1fr 28px;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  display: block;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ItemName = styled.p`
  margin: 0;
  color: #e66767;
  font-size: 14px;
  font-weight: 700;
`;

export const ItemPrice = styled.p`
  margin: 0;
  color: #e66767;
  font-size: 14px;
  font-weight: 700;
`;

export const RemoveButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Footer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalLabel = styled.span`
  color: #ffebd9;
  font-weight: 700;
  font-size: 14px;
`;

export const TotalValue = styled.span`
  color: #ffebd9;
  font-weight: 700;
  font-size: 14px;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  border: none;
  padding: 8px;
  cursor: pointer;
  background: #ffebd9;
  color: #e66767;
  font-weight: 700;
  font-size: 14px;
`;