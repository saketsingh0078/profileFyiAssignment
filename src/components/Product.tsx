"use client";
import { MOCK_DATA } from "@/lib/constant";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { addProductData } from "@/lib/ProductSlice";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  const dispatch = useAppDispatch();
  const productData = useAppSelector((store) => store.product.productData);

  console.log(productData);

  useEffect(() => {
    dispatch(addProductData(MOCK_DATA));
  }, [dispatch]);

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {productData.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Product;
