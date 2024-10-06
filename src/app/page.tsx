"use client";
import ChooseCard from "@/components/ChooseCard";
import NavBar from "@/components/NavBar";
import PopularCard, { PopularCardProps } from "@/components/PopularCard";
import { customerReviews, popular } from "@/util/data";
import { FaArrowRight } from "react-icons/fa";
import Carousel from "nuka-carousel";
import Customer from "@/components/Customer";

export default function Home() {
  return (
    <main className="flex flex-col text-black items-center justify-between bg-primary-accent">
      <NavBar />

      <header className=" relative flex items-center justify-between w-full h-screen pt-20 ">
        <div className="ml-16 lg:w-[50%]">
          <img
            src="header-left-bg.png"
            alt=""
            // width="500"
            className="fixed top-10"
          />
          <h1 className=" font-bold text-6xl mb-5 ">
            Best <span className="text-primary">Food</span> for <br />
            Your Taste
          </h1>
          <small>
            Fastest delivery in town for the kind of food <br /> order now and
            have a swell time eating
          </small>
          <div>
            <button className=" shadow-2xl flex items-center justify-between bg-black  rounded-full px-3 py-3 text-white mt-5">
              <p className="pr-5 pl-3 text-xl">Explore Menu</p>
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full stroke-black fill-black ">
                <FaArrowRight color="#333" />
              </div>
            </button>
          </div>
        </div>
        <div className="">
          {/* <img
            src="header-right.png"
            alt=""
            width="700"
            className="absolute right-0 top-0"
          /> */}
          <div className="flex justify-center">
            <HeaderFloatingFood />
            <img src="owner.png" alt="" className="relative " />
          </div>
        </div>
      </header>
      <article className="max-w-6xl bottom-2">
        <section className="flex justify-between items-center mt-40 ">
          <div className="w-[100%] mr-20 ">
            <img src="about-img.png" alt="" className="" />
          </div>
          <div>
            <h2 className="mb-5 font-bold text-2xl">
              ABOUT <span className="text-primary">US </span>
            </h2>
            <p className="mb-5 leading-7">
              Fastest delivery in town for the kind of food order now and have a
              swell time eating Fastest delivery in town for the kind of food
              order now and have a swell time eating Fastest delivery in town
              for the kind of food
            </p>
            <button className="px-5 py-3 border-2 border-primary rounded-full text-primary">
              View More
            </button>
          </div>
        </section>
        <section className="mt-40 relative max-w-[80%] m-auto">
          <h2 className="text-3xl mb-10 text-center font-bold">
            MOST POPULAR
            <span className="text-primary"> FOOD </span>
          </h2>

          <div className="w-full flex gap-5 justify-between z-10">
            {popular.map((item: PopularCardProps) => (
              <PopularCard item={item} />
            ))}
          </div>
        </section>
        <section className="mt-40 relative max-w-[80%] m-auto">
          <h2 className="text-3xl mb-10 text-center font-bold">
            WHY CHOOSE OUR
            <span className="text-primary"> FOOD </span>
          </h2>

          <div className="w-full flex gap-5 justify-between z-10">
            {[1, 2, 3].map((x) => (
              <ChooseCard />
            ))}
          </div>
        </section>
        <section className="mt-40 relative max-w-[80%] m-auto">
          <h2 className="text-3xl mb-10 text-center font-bold">
            WHAT OUR CUSTOMERS
            <span className="text-primary"> SAY </span>
          </h2>
          <div className="w-3xl flex gap-5 justify-between z-10 h-60">
            <Carousel autoplay withoutControls wrapAround>
              {customerReviews.map((customer) => (
                <Customer customer={customer} />
              ))}
            </Carousel>
            <div className="w-[100%] mr-20 ">
              <img src="about-img.png" alt="" className="" />
            </div>
          </div>
        </section>
        <footer></footer>
      </article>
    </main>
  );
}

const HeaderFloatingFood = ({}) => {
  return (
    <div>
      <img
        src="header-right-3.png"
        className="absolute top-40 right-[36%] drop-shadow-2xl"
        alt="header plate"
        width={100}
      />
      <img
        src="header-right-2.png"
        className="absolute top-30 right-20 drop-shadow-2xl"
        alt="header plate"
        width={100}
      />
      <img
        src="header-right-1.png"
        className="absolute bottom-40 left-15 drop-shadow-2xl"
        alt="header plate"
        width={150}
      />
    </div>
  );
};
