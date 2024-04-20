import React from "react";
import { diet } from "../../data/rawdata";
import { Link } from "react-router-dom";
function DietCard({ diet }) {
  return (
    <Link
      to="/search"
      className=" flex items-center text-black  px-3 py-2 w-full transition ease-in duration-75  hover:bg-gray-200 "
      style={{ borderTop: "1px grey solid" }}
    >
      <p
        className="text-xs font-medium text-gray-500"
        style={{ fontSize: "14px" }}
      >
        {diet}
      </p>
    </Link>
  );
}

function Categories() {
  return (
    <div className=" bg-white  ">
      <h1 className=" bg-white px-3 py-2 text-base font-medium ">Categories</h1>
      {/* Diets list */}
      <div className="flex flex-col items-start">
        {diet.map((d, i) => {
          return <DietCard key={i} diet={d.toUpperCase()} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
