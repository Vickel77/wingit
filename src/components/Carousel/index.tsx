import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CarouselCard from "../CarouselCard";

export default function Carousel() {
  return (
    <div className="flex gap-8 relative carousel_outer-container items-center">
      <div className="backward-btn absolute bg-primary">
        <FaAngleLeft size={30} color="#fff" />
      </div>
      <div className="carousel-container relative p-5 py-8">
        <CarouselCard />
      </div>
      <div className="forward-btn absolute bg-primary">
        <FaAngleRight size={30} color="#fff" />
      </div>
    </div>
  );
}
