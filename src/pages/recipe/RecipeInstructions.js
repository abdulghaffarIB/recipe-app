import React from "react";
import styled from "styled-components";
import RecipeGuide from "./RecipeGuide";

const InnerDisplay = styled.div`
  a {
    color: rgb(248 113 113);
  }
  a:hover {
    color: red;
  }
`;

function RecipeInstructions({ image, summary, data }) {
  return (
    <div className=" md:col-span-3 ">
      {/* Image and description */}
      <div className="">
        {/* Image container  */}
        <div>
          <img src={image} alt="titleImg" className="w-full h-auto" />
        </div>
        {/* Description */}
        <div className="px-4 py-4 bg-white text-xs text-gray-500 leading-5">
          <InnerDisplay
            dangerouslySetInnerHTML={{ __html: summary }}
          ></InnerDisplay>
        </div>
      </div>
      {/* Recipe Instructions */}
      {data && <RecipeGuide item={data} />}
    </div>
  );
}

export default RecipeInstructions;
