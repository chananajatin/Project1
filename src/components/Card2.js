import React from "react";
import img1 from "../components/assets/3.jpg";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";

const Card2 = () => {
  const [isWishlist, setIsWishlist] = React.useState(false);

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };
  return (
    <div>
      <div
        className="mx-4 mt-4
       w-auto  flex justify-center xl:w-96"
      >
        <img className="w-auto h-auto" src={img1} alt="Product" />
      </div>
      <div className="mx-4 my-0 px-1  flex justify-start">
        <p className="py-2 text-sm font-thin">Latest collection Affordable</p>
      </div>
      <div className="mx-3 my-0 px-1  flex justify-start">
        <h1>Nike Dunks</h1>
      </div>
      <div className="mx-3 mt-2 px-1  flex justify-start">
        <div className="flex items-center">
          <span className="text-gray-600 line-through mr-2">₹12000</span>
          <span className="text-black font-bold mr-2">₹9999</span>
          <span className="text-black font-bold">(-18%)</span>
        </div>
      </div>
      <div className="mx-3 mt-2 px-1 flex justify-between items-center">
        <button className="mr-2 border border-gray-400  px-2 py-1">
          Select Options
        </button>
        {isWishlist ? (
          <RiHeartFill
            className="h-6 w-8 cursor-pointer text-red-500 transition-colors duration-300 hover:text-gray-500"
            onClick={toggleWishlist}
          />
        ) : (
          <RiHeartLine
            className="h-6 w-8 cursor-pointer text-gray-500 transition-colors duration-300 hover:text-red-500"
            onClick={toggleWishlist}
          />
        )}
      </div>
    </div>
  );
};

export default Card2;
