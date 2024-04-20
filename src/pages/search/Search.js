import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import SearchBar from "./SearchBar";
import SearchGrid from "./SearchGrid";
import useFetch from "../../hooks/useFetch";
import { n, s } from "../../utils/utils";

function Search() {
  const [searchUrl, setSearchUrl] = useState(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&number=6&type=main%20course&addRecipeInformation=true`
  );
  const [searchData, setSearchData] = useState({
    dishName: "",
    ingredients: "",
    cuisine: "",
    mealType: "",
    diet: "",
    intolerances: "",
    prepTime: "",
  });
  const { data, error, pending } = useFetch(searchUrl);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    setSearchUrl("");
    setSearchUrl(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}${s("&query=", searchData.dishName) + s("&includeIngredients=", searchData.ingredients) + s("&cuisine=", searchData.cuisine) + s("&diet=", searchData.diet) + s("&intolerances=", searchData.intolerances) + s("&type=", searchData.mealType) + n("&maxReadyTime=", searchData.prepTime)}&number=50&addRecipeInformation=true`
    );
  };
  return (
    <>
      <Navbar />
      <SearchBar
        handleChange={handleChangeInput}
        data={searchData}
        handleSubmit={handleSubmit}
      />
      <SearchGrid data={data} error={error} pending={pending} />
    </>
  );
}

export default Search;
