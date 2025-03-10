import { products } from "../constants";
import React from "react";
import PopularProductsCard from "../components/PopularProductsCard"; 

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col gap-6 justify-start">
        <h1 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="text-lg text-slate-gray font-montserrat lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        { 
          products.map((product) => (
            <PopularProductsCard src={product.name} {...product} />
          ))
        }
      </div>
    </section>
  );
};

export default PopularProducts;
