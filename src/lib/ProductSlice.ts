import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  description: string;
  images: string;
  price: number;
  brand: string;
  discountPercentage: number;
}

interface ProductState {
  productData: Product[];
}

const initialState: ProductState = {
  productData: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductData: (state, action: PayloadAction<Product[]>) => {
      state.productData = action.payload;
    },
  },
});

export const { addProductData } = ProductSlice.actions;
export default ProductSlice.reducer;
