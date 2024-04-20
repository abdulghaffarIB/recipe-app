import React from "react";
import { MenuCard } from "../../components/Card";
function SearchMenuItem() {
  return (
    <div className="cont-space max-w-5xl px-4 mx-auto">
      <h1 className="cont-heading cool text-4xl">Search Menu Items</h1>
      {/* Menu grid */}
      <div className="grid grid-cols-4  gap-x-6 gap-y-4 items-start">
        {/* Menu Items Grid */}

        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </div>
  );
}

export default SearchMenuItem;
