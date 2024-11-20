"use client";
import Carousel from "@/components/Carousel";
import FoodMenuTab from "@/components/FoodMenuTab";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<
    "sides" | "snacks" | "drinks" | "h-regs"
  >("sides");

  const getBgImage = () => {
    switch (activeCategory) {
      case "sides":
        return "blur-bg.png";
      case "snacks":
        return "snack-blur-bg.png";
      default:
        return "blur-bg.png";
    }
  };

  return (
    <>
      <div className="container menu ">
        <div className="menu_hero-section">
          <p className="text-black ">Order your</p>
          <p className=" font-bold text-6xl mb-5 text-primary">Favorite Food</p>
          <div className="food-tray absolute ">
            <div className="food-tray_image ">
              <img src="food-tray.png" alt="" width={450} />
            </div>
          </div>
          <div className="blur-tray absolute">
            <div className="blur-tray_image ">
              <img src="blur-tray.png" alt="" width={100} />
            </div>
          </div>
          <br />
          <br />
          <br />
          <Carousel />
        </div>
      </div>
      <section className="w-full overflow-hidden relative ">
        <div className="bg-img absolute w-full">
          <img src={getBgImage()} alt="" className="w-full" id="blurBg" />
        </div>
        <div className="container px-5 w-full relative z-5 m-auto pb-8">
          <SearchBar />
          <br />
          <br />
          <FoodMenuTab
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </section>
    </>
  );
}
