import React, { useState } from "react";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";

const Card2 = ({ image, name }) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    toggleDropdown(); // Close the dropdown after selecting a size
  };

  return (
    <div className="">
      <div className="mx-4 mt-4 w-40 h-28 bg-red-500  flex justify-center xl:w-96">
        <img className="w-full h-full object-cover" src={image} alt="Product" />
      </div>
      <div className="mx-3 my-0 px-1  flex justify-start">
        <p className="py-2 text-sm font-thin">Latest collection </p>
      </div>
      <div className="mx-3 my-0 px-1  flex justify-start">
        <h1>{name}</h1>
      </div>
      <div className="mx-3 mt-2 px-1  flex justify-start">
        <div className="flex items-center">
          <span className="text-gray-600 line-through mr-2">₹1200</span>
          <span className="text-black font-bold mr-2">₹999</span>
          <span className="text-black font-bold">(-18%)</span>
        </div>
      </div>
      <div className="mx-3 mt-2 px-1 flex justify-between items-center">
        {isDropdownOpen ? (
          <div className="absolute top-10 right-0 z-10 bg-white border border-gray-400 p-2">
            <p className="text-gray-600 mb-1">Select Size:</p>
            <button
              className="border border-gray-400 px-2 py-1 mr-1"
              onClick={() => handleSizeSelect("6")}
            >
              6
            </button>
            <button
              className="border border-gray-400 px-2 py-1 mr-1"
              onClick={() => handleSizeSelect("7")}
            >
              7
            </button>
            <button
              className="border border-gray-400 px-2 py-1 mr-1"
              onClick={() => handleSizeSelect("8")}
            >
              8
            </button>
            <button
              className="border border-gray-400 px-2 py-1 mr-1"
              onClick={() => handleSizeSelect("9")}
            >
              9
            </button>
            <button
              className="border border-gray-400 px-2 py-1 mr-1"
              onClick={() => handleSizeSelect("10")}
            >
              10
            </button>
          </div>
        ) : (
          <button
            className="mr-2 border border-gray-400 px-2 py-1"
            onClick={toggleDropdown}
          >
            Select Options
          </button>
        )}
        {selectedSize && (
          <button
            className="bg-blue-500 text-white px-2 py-1"
            onClick={() => console.log(`Size selected: ${selectedSize}`)}
          >
            Add to Cart
          </button>
        )}
        {isWishlist ? (
          <RiHeartFill
            className="h-6 w-8 cursor-pointer text-red-500 transition-colors duration-300 hover:text-red-500"
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
