"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import {
  removeCartItem,
  updateQuantity,
  applyDiscountCode,
} from "@/lib/cartSlice";
import React, { useState } from "react";

const Cart: React.FC = () => {
  const cartData = useSelector((state: RootState) => state.cart.cartData);
  const discount = useSelector((state: RootState) => state.cart.discount);
  const dispatch = useDispatch();
  const [msg, setMsg] = useState<string | null>(null);
  const [discountCode, setDiscountCode] = useState<string>("");

  const handleRemove = (id: number) => {
    dispatch(removeCartItem(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (isNaN(quantity) || quantity <= 0) {
      setMsg("Quantity must be a positive number.");
    } else {
      setMsg(null);
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const calculateSubtotal = () => {
    return cartData.reduce(
      (acc, item) => acc + item.price * (item.quantity ?? 1),
      0
    );
  };

  const handleDiscountCode = () => {
    if (discountCode === "DISCOUNT30") {
      dispatch(applyDiscountCode(30));
      setMsg("Coupon Applied");
    } else {
      setMsg("Invalid discount code. Try DISCOUNT30");
    }
  };

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-4 mb-4"
            >
              <img
                className="w-full h-48 sm:w-24 sm:h-24 object-cover rounded-md"
                src={item.images[0]}
                alt={item.title}
              />
              <div className="flex-1 sm:ml-4 mt-4 sm:mt-0">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-gray-600">{item.brand}</p>
                <p>₹{Math.floor(item.price)}</p>
              </div>
              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, (item.quantity ?? 1) - 1)
                  }
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity ?? 1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                  className="w-12 text-center border border-gray-300 rounded"
                />
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, (item.quantity ?? 1) + 1)
                  }
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          {msg && <p className="text-red-500">{msg}</p>}
          <div className="mt-8">
            <h2 className="text-xl font-bold">Cart Summary</h2>
            <p className="text-lg">
              Subtotal:{" "}
              <span className="font-bold">
                ₹{Math.floor(calculateSubtotal() * (1 - discount / 100))}
              </span>
            </p>
          </div>
          <div className="mt-4">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Enter discount code"
              className="border p-2 rounded mr-2"
            />
            <button
              onClick={handleDiscountCode}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Apply Discount
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
