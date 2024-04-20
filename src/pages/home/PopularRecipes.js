import React, { useState } from "react";
import Card from "../../components/Card";
import Categories from "./Categories";
import useFetch from "../../hooks/useFetch";

function PopularRecipes() {
  const [url, setUrl] = useState(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&number=12&cuisine=american&addRecipeInformation=true`
  );
  const { data, pending, error } = useFetch(url);
  return (
    <div>
      {data && (
        <div className="max-w-5xl px-4 cont-space mx-auto ">
          <h1 className="cool text-2xl cont-heading xl:text-3xl">Trending</h1>

          {/* Grid Section */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 auto-rows-max items-start lg:grid-cols-3 xl:grid-cols-4">
            {/* Card grid section */}
            <div className="grid col-span-1 grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2 lg:col-span-2 xl:col-span-3 xl:grid-cols-3 ">
              {data.results.map((d) => {
                return <Card key={d.id} item={d} />;
              })}
            </div>
            {/* Categories Grid */}
            <Categories />
          </div>
        </div>
      )}
    </div>
  );
}

export default PopularRecipes;
