import React, { useState } from "react";
import HeroSection from "./HeroSection";
import PopularRecipes from "./PopularRecipes";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
function Home() {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
      </header>

      <PopularRecipes />
    </>
  );
}

export default Home;
