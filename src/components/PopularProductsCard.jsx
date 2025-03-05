import React from "react";
import { star } from "../assets/icons";

const PopularProductsCard = ({ imgURL, price, name }) => {
  return (
    <div className="flex flex-1 flex-col items-center w-full max-sm:w-full cursor-pointer">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat leading-normal text-slate-gray text-xl">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 font-bold text-3xl font-palanquin leading-normal ">{name}</h3>
      <p className="mt-2 font-semibold text-coral-red font-montserrat leading-normal text-xl">{price}</p>
    </div>
  );
};

export default PopularProductsCard;
