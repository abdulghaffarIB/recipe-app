import React, { useState } from "react";
import Card from "../../components/Card";
import useFetch from "../../hooks/useFetch";
import ErrorComponent from "../../components/Error";
import Pending from "../../components/Pending";

function PopularRecipes() {
  const [url, setUrl] = useState(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&number=12&cuisine=american&addRecipeInformation=true`
  );
  const { data, pending, error } = useFetch(url);
  if (error) {
    return <ErrorComponent />;
  } else if (pending) {
    return <Pending />;
  }
  return (
    <main className="mb-5">
      {data && (
        <div className="max-w-5xl px-4 cont-space mx-auto ">
          <h1 className="cool text-2xl cont-heading xl:text-3xl">Trending</h1>

          {/* Grid Section */}

          <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 items-stretch md:grid-cols-3  xl:grid-cols-3 ">
            {data.results.map((d) => {
              return <Card key={d.id} item={d} />;
            })}
          </div>
        </div>
      )}
    </main>
  );
}

export default PopularRecipes;
