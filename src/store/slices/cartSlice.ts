import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
    id: number;
    nome: string;
    foto: string;
    preco: number;
};

type CartState = {
    isOpen: boolean;
    items: CartItem[];
};

const initialState: CartState = {
    isOpen: false,
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        openCart: (state) => {
            state.isOpen = true;
        },
        closeCart: (state) => {
            state.isOpen = false;
        },
        addItem: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((i) => i.id !== action.payload);
        },
        clearCart(state) {
            state.items = [];
            state.isOpen = false;
        }
    },
});

export const { openCart, closeCart, addItem, removeItem, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;