import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex justify-between items-center px-1 py-2 bg-white sm:py-3 sm:px-2">
      <Link
        to="/"
        className="font-medium text-xl cool pl-2 text-red-400 sm:text-2xl"
      >
        SOCIALCHEF
      </Link>

      {/* Search and trivia buttons */}
      <div className="flex">
        {/* Search button */}
        <Link
          to="/search"
          className="bg-red-400 rounded flex text-white flex-col items-center justify-center p-1  transition delay-75 ease-in hover:bg-white hover:text-red-400"
        >
          <CiSearch className="text-4xl  " />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
