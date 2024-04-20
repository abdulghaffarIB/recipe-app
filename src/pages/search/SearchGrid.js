import React from "react";
import Card from "../../components/Card";

function SearchGrid({ data, error, pending }) {
  return (
    <div className="max-w-5xl mt-12 mx-auto px-4">
      {/* Grid Section */}
      {pending && <p>Loading...</p>}
      {error && <p>Error loading page</p>}
      {data && (
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 items-start lg:grid-cols-2 xl:grid-cols-3">
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
