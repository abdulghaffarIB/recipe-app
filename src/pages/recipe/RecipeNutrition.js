import React from "react";

function NutritionCard({ name, amount }) {
  return (
    <div
      className="flex justify-between items-center sml  px-3 py-2 border-t-gray-300"
      style={{ borderTopWidth: "1px" }}
    >
      <p>{name}</p>
      <p>{amount}</p>
    </div>
  );
}
function RecipeNutrition({ data }) {
  return (
    <div className="bg-white ">
      {/* Nutrition title */}
      <div className="px-4 py-4 text-xs flex items-center">
        <p className="font-medium">Nutrition facts</p>
        <span
          className="text-gray-500 font-extralight ml-1"
          style={{ fontSize: "12px" }}
        >
          {" "}
          <i>(per serving)</i>{" "}
        </span>
      </div>
      {/* Nutrition list */}
      <div>
        {data &&
          data.map((d, i) => {
            return (
              <NutritionCard name={d.name} amount={d.amount + d.unit} key={i} />
            );
          })}
      </div>
    </div>
  );
}

export default RecipeNutrition;
