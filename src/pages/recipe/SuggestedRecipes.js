import React from "react";
import Card from "../../components/Card";

function SuggestedRecipes() {
  return (
    <div className="container cont-space max-w-5xl px-4 mx-auto">
      <div className="cont-heading cool font-thin text-2xl ">
        <h1 className="cool text-2xl cont-heading xl:text-3xl">
          Suggested Recipes
        </h1>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2 xl:grid-cols-3 "></div>
    </div>
  );
}

export default SuggestedRecipes;
