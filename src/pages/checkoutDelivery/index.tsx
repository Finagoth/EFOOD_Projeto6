import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setDelivery } from "../../store/slices/checkoutSlice";
import {
  Form,
  Label,
  Input,
  Row,
  PrimaryButton,
  SecondaryButton,
} from "../../components/Checkout/styles";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function CheckoutDelivery({ onNext, onBack }: Props) {
  const dispatch = useAppDispatch();
  const delivery = useAppSelector((s) => s.checkout.delivery);
  const isValid =
    delivery.receiver.trim().length > 0 &&
    delivery.address.description.trim().length > 0 &&
    delivery.address.city.trim().length > 0 &&
    delivery.address.zipCode.trim().length > 0 &&
    delivery.address.number > 0;

  const onlyDigits = (value: string) => value.replace(/\D/g, "");

  const formatCep = (value: string) => {
    const digits = onlyDigits(value).slice(0, 8);
    if (digits.length <= 5) return digits;
    return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  };

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isValid) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    onNext();
  }

  return (
    <Form onSubmit={onSubmit}>
      <Label>Quem irá receber</Label>
      <Input
        value={delivery.receiver}
        onChange={(e) =>
          dispatch(setDelivery({ ...delivery, receiver: e.target.value }))
        }
      />

      <Label>Endereço</Label>
      <Input
        value={delivery.address.description}
        onChange={(e) =>
          dispatch(
            setDelivery({
              ...delivery,
              address: { ...delivery.address, description: e.target.value },
            }),
          )
        }
      />

      <Label>Cidade</Label>
      <Input
        value={delivery.address.city}
        onChange={(e) =>
          dispatch(
            setDelivery({
              ...delivery,
              address: { ...delivery.address, city: e.target.value },
            }),
          )
        }
      />

      <Row>
        <div>
          <Label>CEP</Label>
          <Input
            inputMode="numeric"
            maxLength={9}
            placeholder="00000-000"
            value={formatCep(delivery.address.zipCode)}
            onChange={(e) =>
              dispatch(
                setDelivery({
                  ...delivery,
                  address: {
                    ...delivery.address,
                    zipCode: onlyDigits(e.target.value).slice(0, 8),
                  },
                }),
              )
            }
          />
        </div>

        <div>
          <Label>Número</Label>
          <Input
            inputMode="numeric"
            maxLength={4}
            placeholder="0000"
            value={
              delivery.address.number ? String(delivery.address.number) : ""
            }
            onChange={(e) => {
              const v = onlyDigits(e.target.value).slice(0, 4);
              dispatch(
                setDelivery({
                  ...delivery,
                  address: {
                    ...delivery.address,
                    number: Number(v || 0),
                  },
                }),
              );
            }}
          />
        </div>
      </Row>

      <Label>Complemento (opcional)</Label>
      <Input
        value={delivery.address.complement ?? ""}
        onChange={(e) =>
          dispatch(
            setDelivery({
              ...delivery,
              address: { ...delivery.address, complement: e.target.value },
            }),
          )
        }
      />

      <PrimaryButton type="submit" disabled={!isValid}>
        Continuar com o pagamento
      </PrimaryButton>
      <SecondaryButton type="button" onClick={onBack}>
        Voltar para o carrinho
      </SecondaryButton>
    </Form>
  );
}
