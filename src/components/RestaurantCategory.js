import ItemList from "./ItemList";
import React from "react";

const RestuarantCategory = ({ data, showItems, showIndex }) => {
  const handleItem = () => {
    showIndex();
  };

  return (
    <div className=" bg-zinc-100 w-7/12 mx-auto my-4 p-4 shadow-md ">
      <div className="flex justify-between cursor-pointer">
        <span className="font-bold text-2xl" onClick={handleItem}>
          {data.title} ({data?.itemCards.length})
        </span>
        <span onClick={handleItem}>
          {
            <img
              className="w-5 h-5"
              src="https://res.cloudinary.com/dvovtfe0s/image/upload/v1717528206/chevron-down-solid_h2yqr2.svg"
            />
          }
        </span>
      </div>
      {showItems && <ItemList itemsData={data?.itemCards} />}
    </div>
  );
};

export default RestuarantCategory;
