import React from "react";
import earphone from "../assets/home/mobile/image-earphones-yx1.jpg";

function EarphoneBanner() {
  return (
    <div className="flex flex-col items-center py-6 space-y-6">
      <div className="w-5/6 rounded-xl">
        <img src={earphone} alt="" className="rounded-xl" />
      </div>
      <div className="bg-gray-100 px-6 w-5/6 rounded-xl p-16 space-y-8">
        <h2 className="text-4xl font-bold">YXI EARPHONES</h2>
        <button className="border-black border-2 py-2 px-6 font-bold">SEE PRODUCT</button>
      </div>
    </div>
  );
}

export default EarphoneBanner;
