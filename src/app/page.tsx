"use client";
import ChooseCard from "@/components/ChooseCard";
import NavBar from "@/components/NavBar";
import PopularCard, { PopularCardProps } from "@/components/PopularCard";
import { customerReviews, popular } from "@/util/data";
import { FaArrowRight } from "react-icons/fa";
import Carousel from "nuka-carousel";
import Customer from "@/components/Customer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header className=" container relative flex flex-wrap items-center justify-between w-full h-screen pt-20 height-edit ">
        <div className="ml-16 lg:w-[37%] md:w-[37%] overflow-hidden hero-text-edit">
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
        <div className="lg:w-[50%] md:w-[50%] hero-img">
          {/* <img
            src="header-right.png"
            alt=""
            width="700"
            className="absolute right-0 top-0"

          /> */}
          <div className="flex justify-center relative article-padding">
            <HeaderFloatingFood />
            <img src="owner.png" alt="" className="relative " />
          </div>
        </div>
      </header>
      <article className="max-w-6xl bottom-2 w-full article-padding">
        <section className="flex px-4 edit-flex-reverse about-gap justify-between items-center mt-20 ">
          <div className="lg:w-[30%] md:w-[30%]  ">
            <img src="about-img.png" alt="" className="" />
          </div>
          <div className="lg:w-[60%] md:w-[60%] about">
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
        <section className="mt-40 relative w-[100%]  m-auto">
          <h2 className="text-3xl mb-10 text-center font-bold">
            MOST POPULAR
            <span className="text-primary"> FOOD </span>
          </h2>

          <div className="w-full flex edit-flex flex-wrap justify-center center-items gap-5  z-10">
            {popular.map((item: PopularCardProps) => (
              <PopularCard item={item} />
            ))}
          </div>
        </section>
        <section className="mt-40 relative w-[100%]  m-auto">
          <h2 className="text-3xl mb-10 text-center font-bold">
            WHY CHOOSE OUR
            <span className="text-primary"> FOOD </span>
          </h2>

          <div className="w-full flex edit-flex flex-wrap gap-5 justify-between z-10   items-center">
            {[1, 2, 3].map((x) => (
              <ChooseCard />
            ))}
          </div>
        </section>
        <section className="mt-40 relative w-[100%]  m-auto">
          <h2 className="text-3xl mb-10 text-center font-bold">
            WHAT OUR CUSTOMERS
            <span className="text-primary"> SAY </span>
          </h2>
          <div className="  w-3xl flex flex-wrap edit-flex  gap-5 justify-between z-10 mb-8">
            <div className="w-[100%] lg:w-[60%]">
              <Carousel autoplay withoutControls wrapAround>
                {customerReviews.map((customer) => (
                  <Customer customer={customer} />
                ))}
              </Carousel>
            </div>
            <div className="w-[100%] sm:w-[37%]  ">
              <img src="about-img.png" alt="" className="" />
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

const HeaderFloatingFood = ({}) => {
  return (
    <div>
      <img
        src="header-right-3.png"
        className="absolute top-40 right-[36%] drop-shadow-2xl one"
        alt="header plate"
        width={100}
      />
      <img
        src="header-right-2.png"
        className="absolute top-30 right-20 drop-shadow-2xl two"
        alt="header plate"
        width={100}
      />
      <img
        src="header-right-1.png"
        className="absolute bottom-40 left-15 drop-shadow-2xl three"
        alt="header plate"
        width={150}
      />
    </div>
  );
};
