import React, { useState } from "react";
import img1 from "../components/assets/2.jpg";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden "
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

      <div className="bottom-0 left-0 right-0 m-1 p-1 ">
        <button
          className={`p-1 transition-opacity ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
