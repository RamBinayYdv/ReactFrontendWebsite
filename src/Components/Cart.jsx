import React from "react";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Cart = ({ setIsShowCart, cart, handleAddToCart, handleRemoveToCart }) => {
  const DollarUsd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const total = (arr) => {
    return arr.reduce((cal, item) => {
      return cal + item.price * item.amount;
    }, 0);
  };

  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.7)]"
      onClick={() => setIsShowCart(false)}
    >
      <div
        className="bg-black text-white w-[250px] h-full absolute right-0 overflow-y-scroll py-2"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="bg-red-400 py-2 text-center">Cart</h1>
        <div className="flex flex-col items-center py-4 px-2">
          {cart.map((item) => (
            <div
              key={item.id}
              alt={item.name}
              className="text-center border-b-[3px] mb-5 w-full flex flex-col items-center"
            >
              <img src={item.image} className="h-[100px] w-[100px]"></img>
              <p className="text-red-700 font-bold h-6 w-6 rounded-full">
                {item.amount}
              </p>
              <h3 className="text-[0.8rem">{item.name}</h3>
              <div className="flex items-center my-3">
                <button onClick={() => handleAddToCart(item)}>
                  <AiFillPlusCircle className="text-[30px] text-gray-500 mx-2" />
                </button>
                <p className="text-red-600"> {DollarUsd.format(item.price)}</p>
                <button onClick={() => handleRemoveToCart(item.id)}>
                  <AiFillMinusCircle className="text-[30px] text-gray-500 mx-2" />
                </button>
              </div>
            </div>
          ))}
          {cart.length > 0 && <p>Total :{DollarUsd.format(total(cart))}</p>}
          <div>
          {cart.length > 0 && <button className="bg-blue-500 w-full  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">CheckOut</button>}
        </div></div>
      </div>
    </div>
  );
};

export default Cart;
