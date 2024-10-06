import React from "react";
import { FaMedal } from "react-icons/fa";

export default function ChooseCard() {
  return (
    <div className=" min-w-[250px] flex gap-5 flex-col p-5 rounded-2xl hover:shadow-xl hover:bg-white transition-all ">
      <div className=" w-[50px] h-[50px] flex items-center justify-center bg-opacity-25 bg-primary rounded-full p-3">
        <FaMedal className="font-primary" />
      </div>
      <h3 className="font-bold ">Quality Food</h3>
      <p className="opacity-35">We provide the best quality food</p>
    </div>
  );
}
