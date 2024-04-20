import React from "react";
import { RecipeGuideCard } from "../../components/Card";

function RecipeGuide({ item }) {
  console.log(item);
  return (
    <div className="mt-8">
      {item.steps.map((d) => {
        return (
          <RecipeGuideCard instruction={d.step} id={d.number} key={d.number} />
        );
      })}
    </div>
  );
}

export default RecipeGuide;
