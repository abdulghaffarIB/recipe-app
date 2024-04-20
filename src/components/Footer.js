import React from "react";
function Footer() {
  return (
    <footer className="bg-white text-gray-500 py-4 mt-28 xl:py-8">
      <div className="container mx-auto   ">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center text-xs xl:text-sm ">
            Copyright 2016 SocialChef. All rights reserved
          </div>
          <ul className="flex items-center text-xs mt-2 xl:text-sm">
            <li className="list-none  px-2 py-1 hover:bg-red-400  hover:text-white">
              Home
            </li>
            <li className="list-none  px-2 py-1 hover:bg-red-400 hover:text-white">
              About
            </li>
            <li className="list-none  px-2 py-1 hover:bg-red-400 hover:text-white">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
