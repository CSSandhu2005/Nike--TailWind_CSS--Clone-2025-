import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex max-lg:flex-col w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h1 className="mt-10 font-palanquin text-4xl font-bold capitalize">
          We Provide You
          <span className="text-coral-red"> Super</span> <br />
          <span className="text-coral-red">Quality</span> Shoes
        </h1>
        <p className="info-text mt-4 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 lg:max-w-lg">
          <Button label="Shop now" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="Shoe Image" 
          width={570}
          height={522} 
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
