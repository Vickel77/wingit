"use client";
import { useState, useRef, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CarouselCard from "../CarouselCard";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardListRef = useRef(null);

  const visibleCards = 2;
  const totalCards = 5; // Adjust this based on your data
  const maxIndex = totalCards - visibleCards;

  // Function to move the carousel left or right
  const moveCarousel = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = 0;
      if (newIndex > maxIndex) newIndex = maxIndex;
      return newIndex;
    });
  };

  useEffect(() => {
    const cardWidth = 300; // Adjust spacing if needed
    cardListRef.current.style.transform = `translateX(-${
      currentIndex * cardWidth
    }px)`;
  }, [currentIndex]);
  return (
    <>
      <div className="flex gap-8 relative carousel_outer-container items-center">
        <div
          className="backward-btn absolute bg-primary"
          onClick={() => moveCarousel(-1)}
        >
          <FaAngleLeft size={30} color="#fff" />
        </div>
        <div className="carousel-container caro-container_edit relative py-0 lg:p-5 lg:py-8">
          <div className="carousel-container caro-container_edit relative p-5 py-8 overflow-hidden w-full max-w-[700px]">
            <div
              ref={cardListRef}
              className="flex transition-transform duration-500 ease-in-out"
            >
              <CarouselCard />
            </div>
          </div>
        </div>
        <div
          className="forward-btn absolute bg-primary"
          onClick={() => moveCarousel(1)}
        >
          <FaAngleRight size={30} color="#fff" />
        </div>
      </div>

      <div className="mobile-carousel_nav flex justify-between">
        <div
          className="mb-backward-btn  bg-primary"
          onClick={() => moveCarousel(-1)}
        >
          <FaAngleLeft size={30} color="#fff" />
        </div>

        <div
          className="mb-forward-btn  bg-primary"
          onClick={() => moveCarousel(1)}
        >
          <FaAngleRight size={30} color="#fff" />
        </div>
      </div>
    </>
  );
}
