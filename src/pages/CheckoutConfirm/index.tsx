import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearCart } from "../../store/slices/cartSlice";
import { resetCheckout } from "../../store/slices/checkoutSlice";

import {
  Form,
  PanelTitle,
  PrimaryButton,
} from "../../components/Checkout/styles";

type Props = {
  onFinish: () => void;
};

export default function CheckoutConfirm({ onFinish }: Props) {
  const dispatch = useAppDispatch();

  const orderId = useAppSelector((s) => s.checkout.response?.orderId);

  function handleFinish() {
    dispatch(clearCart());
    dispatch(resetCheckout());
    onFinish();
  }

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <PanelTitle>
        Pedido realizado - {orderId ? `#${orderId}` : "(ORDER_ID)"}
      </PanelTitle>

      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>

      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </p>

      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>

      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>

      <PrimaryButton type="button" onClick={handleFinish}>
        Concluir
      </PrimaryButton>
    </Form>
  );
}
