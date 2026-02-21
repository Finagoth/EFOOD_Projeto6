import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeCheckout, goToStep } from "../../store/slices/checkoutUiSlice";

import CheckoutDelivery from "../../pages/checkoutDelivery";
import CheckoutPayment from "../../pages/CheckoutPayment";
import CheckoutConfirm from "../../pages/CheckoutConfirm";

import { Overlay, Sidebar, Header, Title, CloseButton } from "../Cart/styles";
import { resetCheckout } from "../../store/slices/checkoutSlice";

export default function Checkout() {
  const dispatch = useAppDispatch();
  const { isOpen, step } = useAppSelector((s) => s.checkoutUi);

  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={() => dispatch(closeCheckout())} />

      <Sidebar>
        <Header>
          <Title>
            {step === "delivery" && "Entrega"}
            {step === "payment" && "Pagamento"}
            {step === "confirm" && "Confirmação"}
          </Title>

          <CloseButton onClick={() => dispatch(closeCheckout())}>×</CloseButton>
        </Header>

        {step === "delivery" && (
          <CheckoutDelivery
            onNext={() => dispatch(goToStep("payment"))}
            onBack={() => dispatch(closeCheckout())}
          />
        )}

        {step === "payment" && (
          <CheckoutPayment
            onNext={() => dispatch(goToStep("confirm"))}
            onBack={() => dispatch(goToStep("delivery"))}
          />
        )}

        {step === "confirm" && (
          <CheckoutConfirm
            onFinish={() => {
              dispatch(closeCheckout());
              dispatch(resetCheckout());
            }}
          />
        )}
      </Sidebar>
    </>
  );
}
