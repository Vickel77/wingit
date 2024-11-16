import { popular } from "@/util/data";
import FiveStar from "../Icons/FiveStar";
import PopularCard, { PopularCardProps } from "../PopularCard";

export default function CarouselCard() {
  return (
    <div className="carousel-card flex  justify-center center-items gap-5  z-10">
      {popular.map((item: PopularCardProps, index) => (
        <div key={index} className="min-w-[280px]">
          <PopularCard item={item} />
        </div>
      ))}
    </div>
  );
}
