import React from "react";
import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Link } from 'react-router-dom';

function Shop() {
  return (
    <div className=" bg-white flex flex-col items-center space-y-4 py-4">
      <div className="h-1/5 w-5/6 bg-gray-100 rounded-xl text-center pb-4">
        <img src={headphones} alt="" className="w-1/3 mx-auto" />
        <h2 className='font-bold'>HEADPHONES</h2>
        <Link to="/headphones">SHOP</Link>
      </div>
      <div className="h-1/5 w-5/6 bg-gray-100 rounded-xl text-center pb-4">
        <img src={speakers} alt="" className="w-1/3 mx-auto" />
        <h2 className='font-bold'>SPEAKERS</h2>
        <Link to="/speakers">SHOP</Link>
      </div>
      <div className="h-1/5 w-5/6 bg-gray-100 rounded-xl text-center pb-4">
        <img src={earphones} alt="" className="w-1/3 mx-auto" />
        <h2 className='font-bold'>EARPHONES</h2>
        <Link to="/earphones">SHOP</Link>
      </div>
    </div>
  );
}

export default Shop;
