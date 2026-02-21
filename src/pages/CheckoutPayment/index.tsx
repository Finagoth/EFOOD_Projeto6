import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setPayment, submitCheckout } from "../../store/slices/checkoutSlice";
import {
  Form,
  Label,
  Input,
  Row,
  PrimaryButton,
  SecondaryButton,
  PanelTitle,
} from "../../components/Checkout/styles";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function CheckoutPayment({ onNext, onBack }: Props) {
  const dispatch = useAppDispatch();

  const payment = useAppSelector((s) => s.checkout.payment);
  const delivery = useAppSelector((s) => s.checkout.delivery);
  const cartItems = useAppSelector((s) => s.cart.items);

  const status = useAppSelector((s) => s.checkout.status);

  const total = cartItems.reduce((acc, item) => acc + item.preco, 0);
  const formatPrice = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const products = cartItems.map((item) => ({
    id: item.id,
    price: item.preco,
  }));

  const isValid =
    payment.card.name.trim().length > 0 &&
    payment.card.number.length === 16 &&
    String(payment.card.code).length === 3 &&
    payment.card.expires.month >= 1 &&
    payment.card.expires.month <= 12 &&
    String(payment.card.expires.year).length === 4;

  const onlyDigits = (value: string) => value.replace(/\D/g, "");

  const setCardNumber = (value: string) => {
    const v = onlyDigits(value).slice(0, 16);
    dispatch(setPayment({ ...payment, card: { ...payment.card, number: v } }));
  };

  const setCvv = (value: string) => {
    const v = onlyDigits(value).slice(0, 3);
    dispatch(
      setPayment({
        ...payment,
        card: { ...payment.card, code: Number(v || 0) },
      }),
    );
  };

  const setMonth = (value: string) => {
    const v = onlyDigits(value).slice(0, 2);
    const monthNum = Number(v);
    const safe = v.length === 0 ? 0 : Math.min(Math.max(monthNum, 1), 12);
    dispatch(
      setPayment({
        ...payment,
        card: {
          ...payment.card,
          expires: { ...payment.card.expires, month: safe },
        },
      }),
    );
  };

  const setYear = (value: string) => {
    const v = onlyDigits(value).slice(0, 4);
    dispatch(
      setPayment({
        ...payment,
        card: {
          ...payment.card,
          expires: { ...payment.card.expires, year: Number(v || 0) },
        },
      }),
    );
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isValid) {
      alert("Preencha os dados do cartão corretamente.");
      return;
    }

    try {
      await dispatch(submitCheckout({ products, delivery, payment })).unwrap();
      onNext(); // ✅ vai pra confirmação
    } catch (err) {
      console.error("Checkout falhou:", err);
      alert("Não foi possível finalizar o pedido. Tente novamente.");
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <PanelTitle>Pagamento - Valor a pagar {formatPrice(total)}</PanelTitle>

      <Label>Nome no cartão</Label>
      <Input
        value={payment.card.name}
        onChange={(e) =>
          dispatch(
            setPayment({
              ...payment,
              card: { ...payment.card, name: e.target.value },
            }),
          )
        }
      />

      <Row>
        <div>
          <Label>Número do cartão</Label>
          <Input
            inputMode="numeric"
            maxLength={16}
            placeholder="0000 0000 0000 0000"
            value={payment.card.number}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div>
          <Label>CVV</Label>
          <Input
            inputMode="numeric"
            maxLength={3}
            placeholder="000"
            value={payment.card.code ? String(payment.card.code) : ""}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
      </Row>

      <Row>
        <div>
          <Label>Mês de vencimento</Label>
          <Input
            inputMode="numeric"
            maxLength={2}
            placeholder="MM"
            value={
              payment.card.expires.month
                ? String(payment.card.expires.month).padStart(2, "0")
                : ""
            }
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>

        <div>
          <Label>Ano de vencimento</Label>
          <Input
            inputMode="numeric"
            maxLength={4}
            placeholder="AAAA"
            value={
              payment.card.expires.year ? String(payment.card.expires.year) : ""
            }
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
      </Row>

      <PrimaryButton type="submit" disabled={status === "loading" || !isValid}>
        {status === "loading" ? "Enviando..." : "Finalizar pagamento"}
      </PrimaryButton>

      <SecondaryButton type="button" onClick={onBack}>
        Voltar para a edição de endereço
      </SecondaryButton>
    </Form>
  );
}
