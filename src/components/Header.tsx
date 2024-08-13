"use client";

import { LOGO_IMG } from "@/lib/constant";
import { useAppSelector } from "@/lib/hook";
import { IoCartOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Header = () => {
  const cartData = useAppSelector((store) => store.cart.cartData);
  const router = useRouter();

  const handleCartClick = () => {
    router.push("/cart");
  };

  return (
    <div className="flex justify-between items-center px-2">
      <img
        className="w-[130px] h-[60px] mix-blend-normal"
        src={LOGO_IMG}
        alt="logo"
      />
      <div className="flex items-center gap-3 text-lg">
        <h1>Home</h1>
        <div
          className="flex items-center cursor-pointer"
          onClick={handleCartClick}
        >
          <IoCartOutline className="w-[50px] h-[30px]" />
          <p>Cart - {cartData.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
