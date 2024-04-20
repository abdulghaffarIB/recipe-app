import React from "react";
import { CiCircleQuestion, CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
function Navbar({ light }) {
  return (
    <>
      <div className=" ">
        <div className="    bg-white flex items-center justify-between  ">
          <Link
            to="/"
            className="font-medium text-xl cool pl-2 text-red-400 lg:pl-4"
          >
            SOCIALCHEF
          </Link>
          <ul className="lg:flex item-center hidden text-xs font-semibold">
            <li className="mr-2 list-none p-2 rounded hover:bg-red-400 hover:text-white">
              <Link to="/">HOME</Link>
            </li>
            <li className="mr-2 list-none p-2 rounded hover:bg-red-400 hover:text-white">
              ABOUT
            </li>
            <li className="mr-2 list-none p-2 rounded hover:bg-red-400 hover:text-white">
              CONTACT
            </li>
          </ul>
          {/* Search and trivia buttons */}
          <div className="flex">
            <Link
              to="/search"
              className="bg-red-400 flex text-white flex-col items-center justify-around w-16 transition delay-75 ease-in hover:bg-white hover:text-red-400"
            >
              <CiSearch className="text-4xl " />
              <p
                className="  w-4/5 text-center my-1"
                style={{ fontSize: "10px" }}
              >
                SEARCH FOR RECIPES
              </p>
            </Link>
            <div className="bg-red-500 hidden flex-col items-center justify-around text-white w-16 transition delay-75 ease-in hover:bg-white hover:text-red-400 lg:flex">
              <CiCircleQuestion className="text-4xl  font-medium" />
              <p
                className="  w-4/5 text-center my-1"
                style={{ fontSize: "10px" }}
              >
                RANDOM TRIVIA
              </p>
            </div>
            {/* Menu icon */}
            <div className="text-red-400 flex lg:hidden flex-col items-center justify-around  w-16 ">
              <MdMenu className="text-4xl  font-medium" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
