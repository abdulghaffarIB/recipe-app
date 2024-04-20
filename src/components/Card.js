import React from "react";
import bg from "../assets/bkck.jpg";
import { capitaliseWordArray } from "../utils/utils";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
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
    <Link to={`/recipe/${item.id}`} className="items-stretch">
      <div className="flex flex-col bg-white  transition ease-in duration-75 hover:scale-105   ">
        {/* Image Section */}
        <div className="w-full">
          <img src={image} alt="cardimage" className="w-full h-auto" />
        </div>
        {/* Text Section */}
        <div className="px-4 py-4">
          <p
            className="text-sm font-semibold whitespace-nowrap
          text-ellipsis overflow-hidden "
          >
            {title}
          </p>
          <hr className="my-2" />
          {/* Additional Info */}
          <div className="flex flex-col justify-start items-start text-xs text-gray-500">
            <div className="flex items-center ">
              <IoTimeOutline />
              <p className="ml-1">
                {" "}
                <span className="text-black font-medium">
                  {readyInMinutes} mins
                </span>
              </p>{" "}
            </div>{" "}
            {/* Servings and time*/}
            <div className="flex flex-row justify-between items-center w-full ">
              {" "}
              <p>
                Servings:{" "}
                <span className="font-bold text-black">{servings}</span>{" "}
              </p>{" "}
            </div>
            {/* Diet */}
            <div className="w-full">
              <p
                className="whitespace-nowrap
          text-ellipsis overflow-x-hidden "
              >
                {capitaliseWordArray(diets)}
              </p>
            </div>
            {/* Time */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
