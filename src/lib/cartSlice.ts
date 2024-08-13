import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  title: string;
  images: string;
  price: number;
  brand: string;
  quantity: number;
};

type CartState = {
  cartData: CartItem[];
  discount: number;
};

const initialState: CartState = {
  cartData: [],
  discount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartItem>) => {
      state.cartData.push(action.payload);
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.cartData.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    applyDiscountCode: (state, action: PayloadAction<number>) => {
      state.discount = action.payload;
    },
  },
});

export const { addCart, removeCartItem, updateQuantity, applyDiscountCode } =
  cartSlice.actions;
export default cartSlice.reducer;
