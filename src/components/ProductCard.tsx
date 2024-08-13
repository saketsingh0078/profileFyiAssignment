import { addCart } from "@/lib/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import React, { useState } from "react";
import Notification from "./Notification";
import { useRouter } from "next/navigation";

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
  const { id, title, images, price, brand } = data;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cartData = useAppSelector((store) => store.cart.cartData);
  const [showNotification, setShowNotification] = useState(false);

  const isInCart = cartData.some((item) => item.id === id);

  const handleClick = () => {
    if (isInCart) {
      router.push("/cart");
    } else {
      dispatch(addCart({ ...data, quantity: data.quantity ?? 1 }));
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 1500);
    }
  };

  return (
    <div className="flex flex-col w-[270px]  border-2 border-solid shadow-md mb-2 rounded-md px-2 pb-3 gap-1">
      <img
        className="w-[250px] h-[240px] bg-cover"
        src={images[0]}
        alt={title}
      />
      <p className="text-gray-500">{brand}</p>
      <h2>{title}</h2>
      <div className="flex justify-between items-center">
        <p>Price: ₹{Math.floor(price)}</p>
        <button
          onClick={handleClick}
          className={`${
            isInCart ? "bg-blue-400" : "bg-red-500"
          } text-white rounded-md px-2 py-1`}
        >
          {isInCart ? "Go to cart" : "Add to cart"}
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
