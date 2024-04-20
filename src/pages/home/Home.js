import React, { useState } from "react";
import HeroSection from "./HeroSection";
import PopularRecipes from "./PopularRecipes";
import Footer from "../../components/Footer";
function Home() {
  return (
    <div className=" ">
      <HeroSection />
      <PopularRecipes />
      <Footer />
    </div>
  );
}

export default Home;
