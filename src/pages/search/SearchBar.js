import React from "react";
import { cuisine, mealType, intolerances, diet } from "../../data/rawdata";
function SearchBar({ handleChange, data, handleSubmit }) {
  return (
    <section className=" max-w-5xl mx-auto cont-space px-4  ">
      <div className="rounded bg-white flex flex-col items-start justify-start lg:flex-row  ">
        {/* Add Ingredients */}
        <div className=" w-full py-3 px-3 flex flex-col items-start lg:w-5/12 xl:px-4">
          <p className="  text-black mb-1 text-xs font-medium">
            Search by Ingredients
          </p>
          <p className="xxs mb-2 text-gray-500">
            Separate ingredients with a comma
          </p>
          <textarea
            cols="30"
            placeholder="Enter Ingredients"
            className="resize-none text-xs px-2 py-2 h-12 lg:h-24 rounded w-full"
            style={{ border: "solid 1px #a8a7a7" }}
            name="ingredients"
            value={data.ingredients}
            onChange={(e) => {
              handleChange(e);
            }}
          ></textarea>
        </div>
        {/* Other section */}
        <div className=" w-full pb-2 px-3 lg:w-7/12 lg:py-3 xl:px-4 ">
          <p className=" text-xs text-black mb-1 font-medium">Include</p>
          {/* Dropdowns */}
          <div className="flex justify-start items-start text-xs flex-wrap">
            {/* Cuisine */}
            <div className="mr-1 mb-2">
              <p className="xxs font-medium mb-1">Cuisine</p>
              <select
                className="rounded py-1 px-1 text-gray-500 xxs"
                style={{ border: "solid 1px #a8a7a7" }}
                name="cuisine"
                value={data.cuisine}
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                <option value="" key="">
                  None
                </option>
                {cuisine.map((x) => {
                  return <option value={x}>{x}</option>;
                })}
              </select>
            </div>
            {/* Meal Type */}
            <div className="mr-1 mb-2">
              <p className="xxs font-medium mb-1">Meal type</p>

              <select
                className="rounded xxs py-1 px-1 text-gray-500"
                style={{ border: "solid 1px #a8a7a7" }}
                name="mealType"
                value={data.mealType}
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                <option value="" key="">
                  None
                </option>
                {mealType.map((x) => {
                  return <option value={x}>{x}</option>;
                })}
              </select>
            </div>
            {/* Diet */}
            <div className="mr-1 mb-2">
              <p className="xxs font-medium mb-1">Diet</p>

              <select
                className="rounded py-1 px-1 xxs text-gray-500"
                style={{ border: "solid 1px #a8a7a7" }}
                name="diet"
                value={data.diet}
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                <option value="" key="">
                  None
                </option>
                {diet.map((x) => {
                  return <option value={x}>{x}</option>;
                })}
              </select>
            </div>
            {/* Intolerances */}
            <div className="mr-1 mb-2">
              <p className="xxs font-medium mb-1">Intolerances</p>

              <select
                className="rounded xxs py-1 px-1 text-gray-500"
                style={{ border: "solid 1px #a8a7a7" }}
                name="intolerances"
                value={data.intolerances}
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                <option value="" key="">
                  None
                </option>
                {intolerances.map((x) => {
                  return <option value={x}>{x}</option>;
                })}
              </select>
            </div>
          </div>

          {/* Search with name */}
          <div className="pb-2">
            <p className="mb-2 sm:my-2 font-medium text-xs">
              Or search directly
            </p>
            {/* name and mins */}
            <div className="flex text-xs justify-between items-center">
              <input
                type="text"
                className="w-4/6 rounded xxs mr-2 px-2 py-1 lg:w-3/4"
                placeholder="Find by name"
                style={{ border: "solid 1px #a8a7a7" }}
                name="dishName"
                value={data.dishName}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <input
                type="number"
                className="w-2/6 rounded xxs px-2 py-1 lg:w-1/4"
                placeholder="Prep time"
                style={{ border: "solid 1px #a8a7a7" }}
                name="prepTime"
                value={data.prepTime}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </div>
          <button
            className="text-center text-white rounded bg-red-400 border-red-400 text-xs px-2 mt-1 py-1  md:my-2 hover:bg-white border
             hover:text-red-400 transition delay-75 ease-in"
            onClick={handleSubmit}
          >
            SEARCH
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
