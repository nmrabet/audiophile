import React from "react";

function Hero() {
  return (
    <div className="bg-hero-home bg-no-repeat bg-center bg-cover">
      <div className="text-white space-y-8 text-center py-48">
        <h3>NEW PRODUCT</h3>
        <h1 className="text-5xl">
          XX99 MARK II <br /> HEADPHONES
        </h1>
        <p className="px-24">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="bg-orange-500 text-white py-4 px-10">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}

export default Hero;
