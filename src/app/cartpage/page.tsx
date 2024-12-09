import CartItems from "@/components/CartItems";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function CartPage() {
  return (
    <>
      <div className="container flex items-center justify-center">
        <div className="cart-container mb-10">
          <div className="flex gap-2 items-center mb-10">
            <div className="arrow-back">
              <FaArrowLeftLong />
            </div>
            <h1 className="font-bold text-[27px]">Order Summary</h1>
          </div>
          <div className="cart-item_container">
            <CartItems />
          </div>
        </div>
      </div>
    </>
  );
}
