import React from "react";
import FiveStar from "../Icons/FiveStar";

export interface PopularCardProps {
  image: string;
  title: string;
  subTitle: string;
  price: string;
  bgColor?: string;
}
export default function PopularCard({
  item,
  bgColor,
}: {
  item: PopularCardProps;
  bgColor?: string;
}) {
  const { image, title, subTitle, price } = item;
  console.log({ bgColor });
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`hover:shadow-2xl hover:translate-y-[-10px] transition-all  w-[280px] ${
        !bgColor && "border-[1px] border-primary"
      }  rounded-3xl `}
    >
      <div className="h-[200px] w-full flex justify-center items-center">
        <img src={image} alt="" width={150} className="drop-shadow-2xl" />
      </div>
      <div className="p-5">
        <div className=" mb-5 w-full flex justify-between  items-start">
          <div>
            <h3 className="p-0 m-0 leading-none font-bold">{title}</h3>
            <small className="p-0 m-0 opacity-55">{subTitle}</small>
          </div>
          <div className="font-bold">₦{price}</div>
        </div>
        <div className=" w-full flex justify-between items-center">
          <div>
            <FiveStar />
          </div>
          <button className="px-3 py-1 rounded-full bg-primary text-white text-[12px] ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
