import { popular } from "@/util/data";
import FiveStar from "../Icons/FiveStar";
import PopularCard, { PopularCardProps } from "../PopularCard";

export default function CarouselCard() {
  return (
    // <div className="hover:shadow-2xl hover:translate-y-[-10px] transition-all  w-[280px] border-[1px] border-primary rounded-3xl card-edit">
    //   <div className="h-[200px] w-full flex justify-center items-center">
    //     <img src="plate-1.png" alt="" width={150} className="drop-shadow-2xl" />
    //   </div>
    //   <div className="p-5">
    //     <div className=" mb-5 w-full flex justify-between  items-start">
    //       <div>
    //         <h3 className="p-0 m-0 leading-none font-bold">Indian Fries</h3>
    //         <small className="p-0 m-0 opacity-55">Break Fast</small>
    //       </div>
    //       <div className="font-bold">₦5000</div>
    //     </div>
    //     <div className=" w-full flex justify-between items-center">
    //       <div>
    //         <FiveStar />
    //       </div>
    //       <button className="px-3 py-1 rounded-full bg-primary text-white text-[12px] ">
    //         Add to Cart
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="carousel-card flex  justify-center center-items gap-5  z-10">
      {popular.map((item: PopularCardProps, index) => (
        <div key={index} className="min-w-[280px]">
          <PopularCard item={item} />
        </div>
      ))}
    </div>
  );
}
