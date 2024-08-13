import { addCart } from "@/lib/cartSlice";
import { useAppDispatch } from "@/lib/hook";
import React, { useState } from "react";
import Notification from "./Notification";

type Product = {
  id: number;
  title: string;
  description: string;
  images: string;
  price: number;
  brand: string;
  quantity?: number;
  discountPercentage: number;
};

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { id, title, description, images, price, brand, discountPercentage } =
    data;
  const dispatch = useAppDispatch();
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = () => {
    dispatch(addCart({ ...data, quantity: data.quantity ?? 1 }));
    setShowNotification(true);
    const timerID = setTimeout(() => setShowNotification(false), 1500);
    if (showNotification) clearTimeout(timerID);
  };

  return (
    <div className="flex flex-col h-fit border-2 border-solid shadow-sm mb-2 rounded-md px-2 pb-3 gap-1">
      <img className="w-[250px] h-[200px] bg-cover" src={images} alt={title} />
      <p className="text-gray-500">{brand}</p>
      <h2>{title}</h2>
      <div className="flex justify-between items-center">
        <p>Price: ${price}</p>
        <button
          onClick={handleClick}
          className="bg-red-500 text-white rounded-md px-2 py-1"
        >
          Add to cart
        </button>
      </div>
      {showNotification && (
        <Notification
          message={`${title} added to cart!`}
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};

export default ProductCard;
