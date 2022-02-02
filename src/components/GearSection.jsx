import React from "react";
import guy from "../assets/shared/mobile/image-best-gear.jpg";

function GearSection() {
  return (
    <div className="flex flex-col items-center my-36 text-center space-y-12">
      <img src={guy} alt="" className="w-5/6 rounded-xl"/>
      <h2 className='uppercase font-bold text-4xl'>Bringing you the <br /><span className="text-orange-500">best</span> audio gear</h2>
      <p className='mx-12 text-md'>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  );
}

export default GearSection;
