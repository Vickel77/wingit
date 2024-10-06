import React from "react";
import FiveStar from "../Icons/FiveStar";

export default function Customer({ customer }: { customer: CustomerProps }) {
  const { image, name, review } = customer;
  return (
    <div>
      <div className="flex justify-start items-center mb-5">
        <div>
          <img src={image} alt="" className="w-14 mr-5" />
        </div>
        <div className="">
          <h2 className=" font-bold text-xl">{name}</h2>
          <FiveStar />
        </div>
      </div>
      <p className="mb-5 leading-7 ">{review}</p>
    </div>
  );
}
