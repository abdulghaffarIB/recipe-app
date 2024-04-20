import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import RecipeInstructions from "./RecipeInstructions";
import RecipeInfo from "./RecipeInfo";
import RecipeNutrition from "./RecipeNutrition";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import ErrorComponent from "../../components/Error";
import Pending from "../../components/Pending";

function Recipe() {
  const { id } = useParams();
  const [url, setUrl] = useState(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_APIKEY}&includeNutrition=true`
  );

  const { data, pending, error } = useFetch(url);
  if (error) {
    return <ErrorComponent />;
  } else if (pending) {
    return <Pending />;
  }
  return (
    <>
      <Navbar />
      <main>
        {/* Recipe Section */}
        {data && (
          <>
            <div className="max-w-5xl m-auto px-4 cont-space ">
              <h1 className="cool text-2xl cont-heading xl:text-3xl">
                {data.title}
              </h1>

              {/* Recipe Grid */}
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 items-start md:grid-cols-5">
                <RecipeInstructions
                  image={data.image}
                  summary={data.summary}
                  data={data.analyzedInstructions[0]}
                />
                <div className="grid grid-cols-1 gap-y-8 md:col-span-2">
                  <RecipeInfo data={data.extendedIngredients} item={data} />
                  <RecipeNutrition data={data.nutrition.nutrients} />
                </div>
              </div>
              {/* Suggested recipes */}
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Recipe;
