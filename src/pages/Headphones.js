import React from "react";
import Shop from "../components/Shop";
import data from "../data.json";

function Headphones() {
  const headphoneItems = data.filter((item) =>
    item.name.includes("Headphones")
  );
  return (
    <div>
      <h2 className="bg-black text-white text-center text-4xl py-8">
        HEADPHONES
      </h2>
      <div className="my-12">
        {headphoneItems.map((item) => {
          return (
            <div key={item.id} className="text-center my-4 space-y-4">
              <img src={`../assets/${item.image.mobile}`} alt="" />
              <h4>NEW PRODUCT</h4>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <button className="bg-orange-500 text-white py-2 px-6">
                SEE PRODUCT
              </button>
            </div>
          );
        })}
      </div>
      <Shop />
    </div>
  );
}

export default Headphones;
