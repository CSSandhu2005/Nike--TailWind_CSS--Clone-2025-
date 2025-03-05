import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div
        className="relative xl:w-2/5 flex flex-col justify-center items-start
      w-full max-xl:padding-x pt-28"
      >
        <p className="text-coral-red text-xl font-montserrat">
          Our Summer Collection
        </p>
        <h1
          className="mt-10 font-palanquin text-8xl font-bold 
        max-sm:text-[72px] max-sm:leading-[82px]"
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-lg text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="w-full flex flex-wrap items-start justify-start mt-20 gap-16">
          {statistics.map((val) => (
            <div key={val.label}>
              <p className="text-4xl font-palanquin font-bold">{val.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {val.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div
        className="relative flex flex-1 items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover 
        bg-center 
      "
      >
        <img
          src={bigShoeImage}
          alt="Shoes Collection"
          height={610}
          width={500}
          className="object-contain relative z-10"
        />
        <div className="flex absolute -bottom-[5%] sm:left-[10%] max-sm:gap-6 gap-4">
          {shoes.map((shoe, index) => (
            <ShoeCard
              imgURL={shoe}
              changeBigShoeImage={shoe => setBigShoeImage(shoe)}
              bigShoeImage={bigShoeImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
