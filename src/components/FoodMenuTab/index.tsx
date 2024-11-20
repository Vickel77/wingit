"use client";

import { useState } from "react";
import FiveStar from "../Icons/FiveStar";
import { menuCategories } from "@/util/data";

export default function FoodMenuTab({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string;
  setActiveCategory: any;
}) {
  const handleTabClick = (id: string) => {
    setActiveCategory(id);

    const tabBg = document.getElementById("blurBg");
  };

  const activeCategoryCards = menuCategories.filter(
    (category) => category.id === activeCategory
  );

  return (
    <div>
      <section className="container">
        <div className="pills-container flex w-[80%]">
          {[
            ...new Map(
              menuCategories.map((item) => [item.name, item])
            ).values(),
          ].map((category) => (
            <div
              key={category.id}
              onClick={() => handleTabClick(category.id)}
              className={`pill ${
                activeCategory === category.id ? "active-pill" : ""
              }`}
            >
              {category.name}
            </div>
          ))}
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="menu-card_container gap-[15px] flex justify-start w-full flex-wrap">
          {activeCategoryCards.map(
            ({ image, price, subTitle, title }, index) => (
              <div className="col-4" key={index}>
                <div className="hover:shadow-2xl hover:translate-y-[-10px] transition-all bg-white rounded-3xl card-edit menu-card-edit overflow-hidden">
                  <div className="h-[200px] w-full flex justify-center items-center overflow-hidden">
                    <img src={image} alt="" className=" w-full" />
                  </div>
                  <div className="p-5">
                    <div className=" mb-5 w-full flex justify-between  items-start">
                      <div>
                        <h3 className="p-0 m-0 leading-none font-bold">
                          {title}
                        </h3>
                        <small className="p-0 m-0 opacity-55">{subTitle}</small>
                      </div>
                      <div className="font-bold">₦{price}</div>
                    </div>
                    <div className=" w-full flex justify-between items-center">
                      <div>
                        <FiveStar />
                      </div>
                      <button className="px-3 py-1 rounded-full bg-primary text-white text-[14px] flex gap-2 items-center">
                        Add to Cart
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.86399 16.455C4.40999 18.638 4.68299 19.729 5.49599 20.365C6.30999 21 7.43499 21 9.68499 21H14.315C16.565 21 17.69 21 18.505 20.365C19.318 19.729 19.591 18.638 20.136 16.455C20.994 13.023 21.423 11.308 20.523 10.154C19.622 9 17.853 9 14.316 9H9.68499C6.14699 9 4.37899 9 3.47799 10.154C2.94899 10.831 2.87799 11.702 3.08399 13"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M19.5 9.5L18.79 6.895C18.516 5.89 18.379 5.388 18.098 5.009C17.8178 4.63246 17.4373 4.3424 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5L5.21 6.895C5.484 5.89 5.621 5.388 5.902 5.009C6.18218 4.63246 6.56269 4.3424 7 4.172C7.44 4 7.96 4 9 4"
                            stroke="white"
                            stroke-width="1.5"
                          />
                          <path
                            d="M9 4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4C15 4.26522 14.8946 4.51957 14.7071 4.70711C14.5196 4.89464 14.2652 5 14 5H10C9.73478 5 9.48043 4.89464 9.29289 4.70711C9.10536 4.51957 9 4.26522 9 4Z"
                            stroke="white"
                            stroke-width="1.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
