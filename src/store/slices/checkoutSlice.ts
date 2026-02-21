import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CheckoutPayload, CheckoutResponse } from "../../services/checkoutType";
import { postCheckout } from "../../services/checkout";

type CartProduct = { id: number; price: number };

type DeliveryForm = CheckoutPayload["delivery"];
type PaymentForm = CheckoutPayload["payment"];

type CheckoutState = {
    delivery: DeliveryForm;
    payment: PaymentForm;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    response: CheckoutResponse | null;
};

const initialState: CheckoutState = {
    delivery: {
        receiver: "",
        address: { description: "", city: "", zipCode: "", number: 0, complement: "" },
    },
    payment: {
        card: {
            name: "",
            number: "",
            code: 0,
            expires: { month: 0, year: 0 },
        },
    },
    status: "idle",
    error: null,
    response: null,
};

export const submitCheckout = createAsyncThunk<
    CheckoutResponse,
    { products: CartProduct[]; delivery: DeliveryForm; payment: PaymentForm }
>("checkout/submit", async ({ products, delivery, payment }) => {
    const payload: CheckoutPayload = {
        products: products.map((p) => ({ id: p.id, price: p.price })),
        delivery,
        payment,
    };

    return postCheckout(payload);
});

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        setDelivery(state, action: PayloadAction<DeliveryForm>) {
            state.delivery = action.payload;
        },
        setPayment(state, action: PayloadAction<PaymentForm>) {
            state.payment = action.payload;
        },
        resetCheckout(state) {
            state.delivery = initialState.delivery;
            state.payment = initialState.payment;
            state.status = "idle";
            state.error = null;
            state.response = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitCheckout.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(submitCheckout.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.response = action.payload;
            })
            .addCase(submitCheckout.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? "Erro ao finalizar pedido";
            });
    },
});

export const { setDelivery, setPayment, resetCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;