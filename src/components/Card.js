import React, { useState } from "react";
import img1 from "../components/assets/2.jpg";
import { CiShoppingCart } from "react-icons/ci"; // Import the cart icon from react-icons library
import Modal from "./Modal"; // Import the Modal component
import { FaTimes } from "react-icons/fa"; // Import the cross icon from react-icons library

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000); // Reset added to cart message after 2 seconds
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full overflow-hidden">
        <img
          src={img1}
          className={`w-full transition-transform transform ${
            isHovered ? "scale-105 h-3/4" : "scale-100 h-full"
          }`}
          alt="Item"
        />
      </div>

      <div className="absolute bottom-0 right-0 m-4">
        <button
          className="flex items-center justify-center  text-black  p-2 opacity-100 "
          onClick={handleAddToCart}
        >
          <CiShoppingCart />
        </button>
      </div>

      {isAddedToCart && (
        <Modal onClose={() => setIsAddedToCart(false)}>
          <div className="text-center">
            <p className="text-xl font-bold mb-2">Added to cart</p>
            <button
              className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsAddedToCart(false)}
            >
              <FaTimes />
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Card;
