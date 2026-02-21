import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import checkoutReducer from "./slices/checkoutSlice";
import checkoutUiReducer from "./slices/checkoutUiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
    checkoutUi: checkoutUiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;