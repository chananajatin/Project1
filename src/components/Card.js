import React, { useState } from "react";
import img1 from "../components/assets/2.jpg";
import { GrAddCircle } from "react-icons/gr";

const Card = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="w-full h-full overflow-hidden relative group">
        <img
          src={img1}
          className="w-full transition-transform transform rounded-md  group-hover:scale-110"
          alt="Item"
        />
        <div className="absolute inset-x-0 bottom-0 bg-opacity-50 text-black text-center py-2">
          {isAddedToCart && <p className="font-serif font-sm mx-auto xl:font-xl"> Item added successfully</p>}
        </div>
      </div>

      {!isAddedToCart && (
        <div className="absolute bottom-0 right-0 m-1">
          <button
            className="flex items-center justify-center text-black p-2 opacity-100 group-hover:text-gray-700"
            onClick={handleAddToCart}
          >
            <GrAddCircle size={25} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
