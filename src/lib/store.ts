import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cartSlice";
import productReducer from "./ProductSlice";

export const store = configureStore({
  reducer: {
    cart: cardReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
