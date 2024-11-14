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
    const cardWidth = 600 + 1; // Adjust spacing if needed
    cardListRef.current.style.transform = `translateX(-${
      currentIndex * cardWidth
    }px)`;
  }, [currentIndex]);
  return (
    <div className="flex gap-8 relative carousel_outer-container items-center">
      <div
        className="backward-btn absolute bg-primary"
        onClick={() => moveCarousel(-1)}
      >
        <FaAngleLeft size={30} color="#fff" />
      </div>
      <div className="carousel-container relative p-5 py-8">
        <div className="carousel-container relative p-5 py-8 overflow-hidden w-full max-w-[700px]">
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
  );
}
