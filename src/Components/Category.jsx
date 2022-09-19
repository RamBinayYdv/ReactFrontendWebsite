import React, { useState } from "react";

const Category = ({ product, handleAddToCart }) => {
  const DollarUsd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className='flex-1 flex flex-col self-stretch items-center min-w-[333px] border-2 border-["lightgray"] px-2 mr-3 mb-3 rounded-lg'>
      <div className="w-[333px]">
        <img src={product.image} alt="montain" className="w-full h-full"></img>
      </div>
      <div className="text-white text-center" key={product.id}>
        <h1 className="text-lime-500">
          {" "}
          {product.name} {product.category}
        </h1>
        <h4 className="text-orange-500 text-lg font-semibold">
          {DollarUsd.format(product.price)}
        </h4>
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-blue-500 w-full  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          {" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Category;
