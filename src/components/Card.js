import React from "react";
import bg from "../assets/bkck.jpg";
import { capitaliseWordArray, titleCase } from "../utils/utils";
import { diet } from "../data/rawdata";
import { Link, useParams } from "react-router-dom";
export function MenuCard() {
  return (
    <div className="flex flex-col bg-white">
      {/* Image Section */}
      <div className="w-full">
        <img src={bg} alt="cardimage" />
      </div>
      {/* Text Section */}
      <div className="px-2 py-4">
        <p className="text-sm font-semibold">
          Tony's Bodacious Burger w/ Fries, Max
        </p>
        <hr className="my-2" />
        {/* Additional Info */}
        <div className="text-xs text-gray-500" style={{ fontSize: "12px" }}>
          <p className="">Five Guys</p>
          <p className="">Servings: 1</p>
        </div>
      </div>
    </div>
  );
}
export function RecipeGuideCard({ instruction, id }) {
  return (
    <div className="flex items-start mb-8 w-full">
      {/* Number */}
      <div className="flex items-center text-white justify-center px-3 py-2 text-xs bg-red-400">
        {id}
      </div>
      {/* Instruction */}
      <div className="px-4 w-full py-4 text-xs text-gray-500 bg-white leading-5">
        <p>{instruction}</p>
      </div>
    </div>
  );
}
function Card({ item }) {
  const { title, servings, readyInMinutes, diets, image } = item;
  return (
    <Link to={`/recipe/${item.id}`}>
      <div className="flex flex-col bg-white  transition ease-in duration-75 hover:scale-105   ">
        {/* Image Section */}
        <div className="w-full">
          <img src={image} alt="cardimage" className="w-full h-auto" />
        </div>
        {/* Text Section */}
        <div className="px-4 py-4">
          <p className="text-sm font-semibold ">{title}</p>
          <hr className="my-2" />
          {/* Additional Info */}
          <div className="flex flex-col justify-start items-start text-xs text-gray-500">
            {/* Servings and time*/}
            <div
              className="flex flex-row justify-between items-center w-full mb-1"
              style={{ fontSize: "13px" }}
            >
              {" "}
              <span>Servings:{servings}</span>{" "}
              <span>Time:{readyInMinutes}mins</span>{" "}
            </div>
            {/* Diet */}
            <div style={{ fontSize: "13px" }}>
              {capitaliseWordArray(diets)}
              {/* {diets.map((d) => (
              <span className="mr-2">{titleCase(d)}</span>
            ))} */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
