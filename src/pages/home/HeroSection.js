import React from "react";
import bckg from "../../assets/bkck.jpg";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <section
      className="h-dvh flex items-center justify-center"
      style={{
        background: `url(${bckg}) no-repeat`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto -mt-32 md:-mt-20  ">
        {/* Hero Grid */}
        <div className="w-full mx-auto flex flex-col items-center ">
          <h1 className="mb-2 text-3xl leading-normal text-center cool font-normal text-white sm:text-4xl sm:leading-relaxed xl:text-5xl lg:leading-normal xl:leading-loose 2xl:text-6xl ">
            Welcome to SocialChef
          </h1>
          {/* Text Section */}
          <p className=" text-xs text-center w-100 font-normal leading-normal text-gray-300 mx-auto sm:text-sm sm:leading-relaxed lg:text-xl  2xl:text-base ">
            SocialChef is the ultimate cooking social community.
          </p>
          <Link to="/search">
            <button
              className="text-center text-white rounded bg-red-400 border-red-400 text-xs px-4 mt-4 py-2 sm:text-sm hover:bg-white border
             hover:text-red-400 transition delay-75 ease-in"
            >
              SEARCH
            </button>
          </Link>
        </div>
        {/* Search Section */}
      </div>
    </section>
  );
}

export default HeroSection;
