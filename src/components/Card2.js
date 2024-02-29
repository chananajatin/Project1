import React, { useState } from "react";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";

const Card2 = ({ image, name }) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [wishListMessage, setWishListMessage] = useState(false);

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
    if (!isWishlist) {
      setWishListMessage(true);
      setTimeout(() => {
        setWishListMessage(false);
      }, 2000);
    }
  };

  const handleSize = (size) => {
    setSelectedSize(selectedSize === size ? "" : size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000); // Hide the message after 2 seconds
    }
    setSelectedSize("");
  };

  return (
    <div className="w-auto h-auto m-1 ">
      <div className="mx-auto mt-4 w-44 h-32 flex justify-center xl:w-96 xl:h-64 relative">
        <img className="w-full h-full object-cover" src={image} alt="Product" />
        {showSuccessMessage && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 flex justify-center items-center">
            <p className="text-white font-bold">Item added!</p>
          </div>
        )}
        {wishListMessage && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 flex justify-center items-center">
            <p className="text-white font-bold">Added to WishList!❤️</p>
          </div>
        )}
      </div>
      <div className="mx-auto my-0 px-1 flex justify-start">
        <p className="py-2 text-sm font-thin">Latest collection </p>
      </div>
      <div className="mx-auto my-0 px-1 flex justify-start">
        <h1>{name}</h1>
      </div>
      <div className="flex">
        {[6, 7, 8, 9, 10].map((size) => (
          <button
            key={size}
            className={`border border-black rounded-sm h-auto w-6 text-xs m-1 ${
              selectedSize === size ? "bg-gray-300" : ""
            }`}
            onClick={() => handleSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
      <div className="mx-auto mt-2 px-1 flex justify-start">
        <div className="flex items-center">
          <span className="text-gray-600 line-through mr-2">₹1200</span>
          <span className="text-black font-bold mr-2">₹999</span>
          <span className="text-red-500 font-bold">(-18%)</span>
        </div>
      </div>
      <div className="mx-auto mt-2 flex justify-between items-center">
        <button
          className={`mr-2 border border-gray-400 px-2 py-1 ${
            selectedSize ? "" : "opacity-50"
          }`}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

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
