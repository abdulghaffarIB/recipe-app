import React, { useState } from "react";
import cd from "../../assets/bkck.jpg";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

function WineCard() {
  return (
    <div className="flex items-start justify-start mt-4">
      {/* Wine image */}
      <div className="w-1/3">
        <img src={cd} alt="card" />
      </div>
      {/* Wine info */}
      <div className="ml-2 py-1  sm:text-xs " style={{ fontSize: "12px" }}>
        <p>NV The Big Kahuna Merlot</p>
        <p className="text-red-200">$44.00</p>
      </div>
    </div>
  );
}

function WinePairingDropdown() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      onClick={() => {
        setDropdown(!dropdown);
      }}
    >
      {/* Base info */}
      <div
        className="flex justify-between items-center text-xs text-gray-500 px-4 py-3 border-t-gray-300"
        style={{ borderTopWidth: "1px" }}
      >
        <p className="text-black">Merlot</p>
        <div>
          {dropdown ? (
            <FaAngleDown
              className="
            text-base"
            />
          ) : (
            <FaAngleRight
              className="
          text-base"
            />
          )}
        </div>
      </div>
      {/* Dropdown info */}
      <div
        className="px-4 py-2 bg-gray-100 "
        style={{ display: dropdown ? "block" : "none" }}
      >
        <p className="text-gray-500 leading-4" style={{ fontSize: "12px" }}>
          Enticing and lively red color; beautifully aromatic with black cherry
          and ripe plum. On the palate a purity of blackcurrant, cedar and mint
          flavors blend together seamlessly. Soft and supple, this wine has a
          medium-bodied mouth-feel with plush tannins that integrate with the
          generous finish.Our favorite pairings for this wine include chicken
          parmesan, cedar-planked salmon over wild rice, and mushroom pizza.
        </p>
        {/* wine card list */}
        <div className="mt-4">
          <h1 className="text-xs  ">Products</h1>
          <WineCard />
          <WineCard />
        </div>
      </div>
    </div>
  );
}
function WinePairings() {
  return (
    <div className="bg-white">
      {/* Nutrition title */}
      <div className="px-4 py-4 text-xs flex items-center">
        <p className="font-semibold ">Wine pairings</p>
      </div>
      {/* Nutrition list */}
      <div>
        <WinePairingDropdown />
        <WinePairingDropdown />
        <WinePairingDropdown />
      </div>
    </div>
  );
}

export default WinePairings;
