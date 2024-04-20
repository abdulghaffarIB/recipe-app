import React from "react";

function RecipeInfoCard({ name, info }) {
  return (
    <div className="h-max  text-xs flex items-stretch mb-2 ">
      {" "}
      <div
        className="w-1/3 bg-red-400  px-2 py-2 text-white"
        style={{ fontSize: "12px" }}
      >
        {info}
      </div>
      <div className="w-2/3 bg-white  px-2 py-2">{name}</div>
    </div>
  );
}
function RRecipeInfoCard({ name, info }) {
  return (
    <div className="h-max  text-xs flex items-stretch mb-2 ">
      {" "}
      <div className="w-1/3 bg-white  px-2 py-2">{name}</div>
      <div
        className="w-2/3 bg-red-400  px-2 py-2 text-white"
        style={{ fontSize: "12px" }}
      >
        <p>{info}</p>
      </div>
    </div>
  );
}

function RecipeInfo({ data, item }) {
  return (
    <div className=" md:col-span-2 ">
      <div>
        <div className="mb-8">
          <RRecipeInfoCard name=" Servings " info={item.servings} />
          <RRecipeInfoCard name=" Minutes " info={item.readyInMinutes} />
          <RRecipeInfoCard name=" Source " info={item.sourceName} />
        </div>
        <div>
          {data &&
            data.map((d) => {
              return (
                <RecipeInfoCard
                  key={d.id}
                  name={d.originalName}
                  info={d.amount + " " + d.unit}
                />
              );
            })}
        </div>
      </div>

      {/* Wine pairings section */}
      <div className="mt-8 lg:mt-0"></div>
    </div>
  );
}

export default RecipeInfo;
