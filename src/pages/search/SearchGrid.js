import React from "react";
import Card from "../../components/Card";
import Pending from "../../components/Pending";
import ErrorComponent from "../../components/Error";

function SearchGrid({ data, error, pending }) {
  if (pending) {
    return <Pending />;
  } else if (error) {
    return <ErrorComponent />;
  }
  return (
    <div className="max-w-5xl mt-12 mx-auto px-4">
      {data && (
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 items-stretch md:grid-cols-3  xl:grid-cols-3">
          {/* Card grid section */}
          {data.results.length > 0 &&
            data.results.map((d) => {
              return <Card key={d.id} item={d} />;
            })}
        </div>
      )}
    </div>
  );
}

export default SearchGrid;
