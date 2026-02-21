import React, { useEffect, useMemo, useRef, useState } from "react";
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

const onlyDigits = (value: string) => value.replace(/\D/g, "");

const formatCardNumber = (digits: string) =>
  digits.replace(/(\d{4})(?=\d)/g, "$1 ");

export default function CheckoutPayment({ onNext, onBack }: Props) {
  const dispatch = useAppDispatch();

  const payment = useAppSelector((s) => s.checkout.payment);
  const delivery = useAppSelector((s) => s.checkout.delivery);
  const cartItems = useAppSelector((s) => s.cart.items);
  const status = useAppSelector((s) => s.checkout.status);

  // refs pra “pular” automaticamente
  const cvvRef = useRef<HTMLInputElement | null>(null);
  const monthRef = useRef<HTMLInputElement | null>(null);
  const yearRef = useRef<HTMLInputElement | null>(null);

  // ✅ textos locais (UI) pra não travar mês/ano/cvv com padStart
  const [cvvText, setCvvText] = useState("");
  const [monthText, setMonthText] = useState("");
  const [yearText, setYearText] = useState("");

  // init 1x ao montar (não briga com digitação)
  useEffect(() => {
    setMonthText(
      payment.card.expires.month ? String(payment.card.expires.month) : "",
    );
    setYearText(
      payment.card.expires.year ? String(payment.card.expires.year) : "",
    );
    setCvvText(
      payment.card.code
        ? onlyDigits(String(payment.card.code)).slice(0, 3)
        : "",
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const total = cartItems.reduce((acc, item) => acc + item.preco, 0);
  const formatPrice = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const products = cartItems.map((item) => ({
    id: item.id,
    price: item.preco,
  }));

  // número do cartão no state: só dígitos
  const cardDigits = payment.card.number;
  const cardFormatted = useMemo(
    () => formatCardNumber(cardDigits),
    [cardDigits],
  );

  // ✅ validação simples (sem Luhn)
  const isValid =
    payment.card.name.trim().length > 0 &&
    cardDigits.length === 16 &&
    cvvText.length === 3 &&
    payment.card.expires.month >= 1 &&
    payment.card.expires.month <= 12 &&
    yearText.length === 4;

  const setName = (value: string) => {
    dispatch(
      setPayment({
        ...payment,
        card: { ...payment.card, name: value },
      }),
    );
  };

  const setCardNumber = (value: string) => {
    const digits = onlyDigits(value).slice(0, 16);

    dispatch(
      setPayment({
        ...payment,
        card: { ...payment.card, number: digits },
      }),
    );

    // auto-avança quando completar 16 dígitos
    if (digits.length === 16) cvvRef.current?.focus();
  };

  const setCvv = (value: string) => {
    const v = onlyDigits(value).slice(0, 3);
    setCvvText(v);

    dispatch(
      setPayment({
        ...payment,
        card: { ...payment.card, code: Number(v || 0) },
      }),
    );

    if (v.length === 3) monthRef.current?.focus();
  };

  // ✅ mês sem auto "01" ao digitar 1
  const setMonth = (value: string) => {
    const v = onlyDigits(value).slice(0, 2);
    setMonthText(v);

    if (v.length === 0) {
      dispatch(
        setPayment({
          ...payment,
          card: {
            ...payment.card,
            expires: { ...payment.card.expires, month: 0 },
          },
        }),
      );
      return;
    }

    const monthNum = Number(v);
    dispatch(
      setPayment({
        ...payment,
        card: {
          ...payment.card,
          expires: { ...payment.card.expires, month: monthNum },
        },
      }),
    );

    // quando completar 2 dígitos, normaliza 01–12 e avança
    if (v.length === 2) {
      const safe = Math.min(Math.max(monthNum, 1), 12);
      if (safe !== monthNum) {
        setMonthText(String(safe)); // ex: 13 vira 12
        dispatch(
          setPayment({
            ...payment,
            card: {
              ...payment.card,
              expires: { ...payment.card.expires, month: safe },
            },
          }),
        );
      }
      yearRef.current?.focus();
    }
  };

  const setYear = (value: string) => {
    const v = onlyDigits(value).slice(0, 4);
    setYearText(v);

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
      onNext();
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
        onChange={(e) => setName(e.target.value)}
      />

      <Row>
        <div>
          <Label>Número do cartão</Label>
          <Input
            inputMode="numeric"
            maxLength={19}
            placeholder="0000 0000 0000 0000"
            value={cardFormatted}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div>
          <Label>CVV</Label>
          <Input
            ref={cvvRef}
            inputMode="numeric"
            maxLength={3}
            placeholder="000"
            value={cvvText}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
      </Row>

      <Row>
        <div>
          <Label>Mês de vencimento</Label>
          <Input
            ref={monthRef}
            inputMode="numeric"
            maxLength={2}
            placeholder="MM"
            value={monthText}
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>

        <div>
          <Label>Ano de vencimento</Label>
          <Input
            ref={yearRef}
            inputMode="numeric"
            maxLength={4}
            placeholder="AAAA"
            value={yearText}
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
