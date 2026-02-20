import React, { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeCart, removeItem } from "../../store/slices/cartSlice";
import {
  Overlay,
  Drawer,
  Title,
  Items,
  Item,
  ItemImg,
  ItemInfo,
  ItemName,
  ItemPrice,
  RemoveBtn,
  Row,
  TotalLabel,
  TotalValue,
  ActionBtn,
} from "./styles";

const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, items } = useAppSelector((state) => state.cart);

  const total = useMemo(
    () => items.reduce((acc, item) => acc + item.preco, 0),
    [items],
  );

  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={() => dispatch(closeCart())} />

      <Drawer>
        <Title>Carrinho</Title>

        <Items>
          {items.map((item) => (
            <Item key={item.id}>
              <ItemImg src={item.foto} alt={item.nome} />
              <ItemInfo>
                <ItemName>{item.nome}</ItemName>
                <ItemPrice>{formatPrice(item.preco)}</ItemPrice>
              </ItemInfo>

              <RemoveBtn
                type="button"
                aria-label="Remover item"
                onClick={() => dispatch(removeItem(item.id))}
              >
                ×
              </RemoveBtn>
            </Item>
          ))}
        </Items>

        <Row>
          <TotalLabel>Valor total</TotalLabel>
          <TotalValue>{formatPrice(total)}</TotalValue>
        </Row>

        <ActionBtn type="button">Continuar com a entrega</ActionBtn>
      </Drawer>
    </>
  );
};

export default Cart;