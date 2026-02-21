import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Step = "delivery" | "payment" | "confirm";

type CheckoutUiState = {
  isOpen: boolean;
  step: Step;
};

const initialState: CheckoutUiState = {
  isOpen: false,
  step: "delivery",
};

const checkoutUiSlice = createSlice({
  name: "checkoutUi",
  initialState,
  reducers: {
    openCheckout(state) {
      state.isOpen = true;
      state.step = "delivery";
    },
    closeCheckout(state) {
      state.isOpen = false;
      state.step = "delivery";
    },
    goToStep(state, action: PayloadAction<Step>) {
      state.step = action.payload;
      state.isOpen = true;
    },
  },
});

export const { openCheckout, closeCheckout, goToStep } = checkoutUiSlice.actions;
export default checkoutUiSlice.reducer;