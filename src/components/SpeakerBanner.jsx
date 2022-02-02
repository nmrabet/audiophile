import React from "react";
import speaker from "../assets/home/mobile/image-speaker-zx9.png"

function SpeakerBanner() {
  return (
    <div className="flex flex-col items-center my-4 text-white">
      <div className="text-center space-y-8 bg-orange-400 w-5/6 rounded-xl py-14">
        <img src={speaker} alt="" className='w-1/3 mx-auto'/>
        <h2 className="text-4xl font-bold">ZX9 <br/> SPEAKER</h2>
        <p className='mx-12'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className="bg-black py-2 px-6">SEE PRODUCT</button>
      </div>
    </div>
  );
}

export default SpeakerBanner;
