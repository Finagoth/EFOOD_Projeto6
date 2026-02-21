import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeCart, removeItem } from "../../store/slices/cartSlice";
import { openCheckout } from "../../store/slices/checkoutUiSlice";

import {
  Overlay,
  Sidebar,
  Header,
  Title,
  CloseButton,
  Items,
  Item,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  RemoveButton,
  Footer,
  TotalRow,
  TotalLabel,
  TotalValue,
  CheckoutButton,
} from "./styles";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isOpen, items } = useAppSelector((state) => state.cart);

  const total = useMemo(
    () => items.reduce((acc, item) => acc + item.preco, 0),
    [items],
  );

  const formatPrice = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={() => dispatch(closeCart())} />

      <Sidebar>
        <Header>
          <Title>Carrinho</Title>
          <CloseButton onClick={() => dispatch(closeCart())}>×</CloseButton>
        </Header>

        <Items>
          {items.map((item) => (
            <Item key={item.id}>
              <ItemImage src={item.foto} alt={item.nome} />

              <ItemInfo>
                <ItemName>{item.nome}</ItemName>
                <ItemPrice>{formatPrice(item.preco)}</ItemPrice>
              </ItemInfo>

              <RemoveButton
                type="button"
                aria-label="Remover item"
                onClick={() => dispatch(removeItem(item.id))}
              >
                🗑️
              </RemoveButton>
            </Item>
          ))}
        </Items>

        <Footer>
          <TotalRow>
            <TotalLabel>Valor total</TotalLabel>
            <TotalValue>{formatPrice(total)}</TotalValue>
          </TotalRow>

          <CheckoutButton
            type="button"
            disabled={items.length === 0}
            onClick={() => {
              dispatch(closeCart());
              dispatch(openCheckout());
            }}
          >
            Continuar com a entrega
          </CheckoutButton>
        </Footer>
      </Sidebar>
    </>
  );
}
