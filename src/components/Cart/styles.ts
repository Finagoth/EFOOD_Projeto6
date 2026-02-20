import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  max-width: 90vw;
  height: 100vh;
  background: #e66767;
  padding: 32px 16px;
  z-index: 1000;
  overflow-y: auto;
`;

export const Title = styled.h2`
  color: #ffebd9;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Item = styled.div`
  background: #ffebd9;
  padding: 8px;
  display: grid;
  grid-template-columns: 80px 1fr 24px;
  gap: 8px;
  align-items: start;
`;

export const ItemImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  display: block;
`;

export const ItemInfo = styled.div``;

export const ItemName = styled.h3`
  font-size: 14px;
  font-weight: 900;
  color: #e66767;
  margin: 0 0 4px 0;
`;

export const ItemPrice = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #e66767;
  margin: 0;
`;

export const RemoveBtn = styled.button`
  border: 0;
  background: transparent;
  color: #e66767;
  font-size: 18px;
  cursor: pointer;
  line-height: 1;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  color: #ffebd9;
  font-weight: 700;
`;

export const TotalLabel = styled.span`
  font-size: 14px;
`;

export const TotalValue = styled.span`
  font-size: 14px;
`;

export const ActionBtn = styled.button`
  width: 100%;
  margin-top: 16px;
  border: 0;
  cursor: pointer;
  padding: 8px;
  background: #ffebd9;
  color: #e66767;
  font-weight: 700;
  font-size: 14px;
`;