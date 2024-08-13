"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { addProductData } from "@/lib/ProductSlice";
import axios from "axios";
import Shimmer from "./Shimmer";

interface Product {
  id: number;
  title: string;
  description: string;
  images: string;
  price: number;
  brand: string;
  quantity?: number;
  discountPercentage: number;
}

const Product: React.FC = () => {
  const dispatch = useAppDispatch();
  const productData = useAppSelector((store) => store.product.productData);
  const [limit] = useState<number>(10); // Number of products to load per fetch
  const [skip, setSkip] = useState<number>(0); // Number of products to skip
  const [hasMore, setHasMore] = useState<boolean>(true); // Track if more products are available
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await axios.get<{ products: Product[] }>(
        `https://dummyjson.com/products`,
        {
          params: {
            limit: limit,
            skip: skip,
          },
        }
      );

      const newProducts = response.data.products;
      dispatch(addProductData([...productData, ...newProducts])); // Add new products to the Redux store
      setSkip(skip + limit);

      if (newProducts.length < limit) {
        setHasMore(false); // No more products to load
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight
    )
      return;

    fetchProducts();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [skip, loading]);

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {productData.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
      <div>
        {loading && <Shimmer />}
        {!hasMore && <p>No more products to load.</p>}
      </div>
    </div>
  );
};

export default Product;
