import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setDelivery } from "../../store/slices/checkoutSlice";
import { Form, Label, Input, Row, PrimaryButton, SecondaryButton } from "../../components/Checkout/styles";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function CheckoutDelivery({ onNext, onBack }: Props) {
  const dispatch = useAppDispatch();
  const delivery = useAppSelector((s) => s.checkout.delivery);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
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
            })
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
            })
          )
        }
      />

      <Row>
        <div>
          <Label>CEP</Label>
          <Input
            value={delivery.address.zipCode}
            onChange={(e) =>
              dispatch(
                setDelivery({
                  ...delivery,
                  address: { ...delivery.address, zipCode: e.target.value },
                })
              )
            }
          />
        </div>

        <div>
          <Label>Número</Label>
          <Input
            type="number"
            value={delivery.address.number || ""}
            onChange={(e) =>
              dispatch(
                setDelivery({
                  ...delivery,
                  address: { ...delivery.address, number: Number(e.target.value) },
                })
              )
            }
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
            })
          )
        }
      />

      <PrimaryButton type="submit">Continuar com o pagamento</PrimaryButton>
      <SecondaryButton type="button" onClick={onBack}>
        Voltar para o carrinho
      </SecondaryButton>
    </Form>
  );
}