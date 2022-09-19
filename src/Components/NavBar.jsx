import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Categories from "./Categories";
import Category from "./Category";
import Cart from "./Cart";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  const [data, setData] = useState(Categories);
  // console.log(data);
  const [nav, setNav] = useState("false");
  // this function is using for Navigation bar which make rise and hidden
  const [cart, setCart] = useState([]);
  // this for handle add to cart
  const [isShowCart, setIsShowCart] = useState(false);
  //this is for showing cart

  const handleNav = () => {
    setNav(!nav);
  };

  //here i am using filter function for searching watch,mobile,laptop...(category) from given data
  const filterResult = (catItm) => {
    const result = Categories.filter((cunData) => {
      return cunData.category === catItm;
    });
    setData(result);
  };

  // this for using  handle add to cart
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const findDataInCart = prev.find((item) => item.id === product.id);
      // firt
      if (findDataInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...product, amount: 1 }];
    });
  };

  // this for handle to remove the cart
  const handleRemoveToCart = (id) => {
    setCart((prev) => {
      return prev.reduce((cal, item) => {
        if (item.id === id) {
          if (item.amount === 1) return cal;
          return [...cal, { ...item, amount: item.amount - 1 }];
        }
        return [...cal, { ...item }];
      }, []);
    });
  };

  return (
    <div>
      { /* This section is Nav by section  starting */ }
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl  text-[#00df9a]"> E-SHOP. </h1>
        <ul className="hidden md:flex">
          <li className="p-4">CategoryBy</li>
          <button className="p-4" onClick={() => filterResult("Laptop")}>
            Laptop
          </button>
          <button className="p-4" onClick={() => filterResult("Mobile")}>
            Mobile
          </button>
          <button className="p-4" onClick={() => filterResult("Watch")}>
            Watch
          </button>
          <button className="p-4" onClick={() => filterResult("Keyboard")}>
            keyboard
          </button>
          <button className="p-4" onClick={() => filterResult("Headseat")}>
            Headseat
          </button>
          <div className=" relative p-4 flex items-center" onClick={() => setIsShowCart(true)}>
            <AiOutlineShoppingCart className="text-[24px] " />
            {cart.length > 0 && (
              <span className="bg-blue-700 text-white w-5 h-4 rounded-full absolute text-center leading-5 top-1 left-2">
                {cart.length}
              </span>
            )}
          </div>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-[#000300] "
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl  m-4 text-[#00df9a]"> E-SHOP. </h1>
          <ul className=" uppercase">
            <li className="p-4 border-b border-gray-600">CategoryBy</li>
            <button className="p-4" onClick={() => filterResult("Laptop")}>
              Laptop
            </button>
            <button className="p-4" onClick={() => filterResult("Mobile")}>
              Mobile
            </button>
            <button className="p-4" onClick={() => filterResult("Watch")}>
              Watch
            </button>
            <button className="p-4" onClick={() => filterResult("Keyboard")}>
              keyboard
            </button>
            <button className="p-4" onClick={() => filterResult("Headseat")}>
              Headseat
            </button>
            <div
              className=" relative p-4 flex items-center"
              onClick={() => setIsShowCart(true)}
            >
              <AiOutlineShoppingCart className="text-[24px] " />
              {cart.length > 0 && (
                <span className="bg-blue-700 text-white w-5 h-4 rounded-full absolute text-center leading-5 top-1 left-2">
                  {cart.length}
                </span>
              )}
            </div>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap my-4 container mx-auto  ">
        {data.map((product) => {
          return (
            <Category
              handleAddToCart={handleAddToCart}
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
      {isShowCart && (
        <Cart
          handleAddToCart={handleAddToCart}
          handleRemoveToCart={handleRemoveToCart}
          cart={cart}
          setIsShowCart={setIsShowCart}
        />
      )}
    </div>
  );
};

export default NavBar;
