import React from 'react';

function Banner() {
  return <div className="flex flex-col items-center py-2">
      <div className="bg-speaker-home bg-no-repeat bg-center bg-cover rounded-xl w-5/6 py-48 space-y-4 px-10">
          <h2 className='text-4xl font-bold'>ZX7 SPEAKER</h2>
          <button className='border-black border-2 py-2 px-6'>SEE PRODUCT</button>
      </div>
  </div>;
}

export default Banner;
