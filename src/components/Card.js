import React, { useState } from "react";
import img1 from "../components/assets/2.jpg";
import { MdAddShoppingCart } from "react-icons/md";

const Card = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(()=>{
        setIsAddedToCart(false)
    },2000)
  };

  return (
    <div className="relative overflow-hidden">
      <div className="w-full h-full overflow-hidden relative">
        <img
          src={img1}
          className="w-full transition-transform transform rounded-md hover:scale-105"
          alt="Item"
        />
        {isAddedToCart && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <p>Item Added to cart</p>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 right-0 m-1">
        <button
          className="flex items-center justify-center text-black p-2 opacity-100 hover:text-gray-700"
          onClick={handleAddToCart}
        >
          <MdAddShoppingCart size={25} />
          
        </button>
      </div>
    </div>
  );
};

export default Card;
