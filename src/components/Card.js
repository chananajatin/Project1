import React from 'react'
import img1 from "../components/assets/2.jpg";
const Card = () => {
  return (
    <>
      <div className="relative w-full h-80 m-2 overflow-hidden">
        <img
          src={img1}
          className="w-full h-full object-cover transition-transform transform hover:scale-105 cursor-pointer"
          alt="Item"
        />
      </div>
    </>
  );
}

export default Card