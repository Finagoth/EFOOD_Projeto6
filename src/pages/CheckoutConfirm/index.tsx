import { useAppSelector } from "../../store/hooks";
import { Form, PanelTitle, PrimaryButton } from "../../components/Checkout/styles";

type Props = {
  onFinish: () => void;
};

export default function CheckoutConfirm({ onFinish }: Props) {
  const resp = useAppSelector((s) => s.checkout.response);

  const orderId =
    (resp?.orderId as string | number | undefined) ??
    (resp?.id as string | number | undefined) ??
    (resp?.order_id as string | number | undefined) ??
    "";

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <PanelTitle>
        Pedido realizado - {orderId ? String(orderId) : "(ORDER_ID)"}
      </PanelTitle>

      <p style={{ fontSize: 12, lineHeight: "18px", margin: 0 }}>
        Estamos felizes em informar que seu pedido já está em processo de preparação
        e, em breve, será entregue no endereço fornecido.
        <br /><br />
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar
        cobranças extras.
        <br /><br />
        Lembre-se da importância de higienizar as mãos após o recebimento do pedido,
        garantindo assim sua segurança e bem-estar durante a refeição.
        <br /><br />
        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica.
        Bom apetite!
      </p>

      <PrimaryButton type="button" onClick={onFinish}>
        Concluir
      </PrimaryButton>
    </Form>
  );
}