import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer.js";
import useFetchData from "../utils/useFetchData.js";
import RestuarantCategory from "./RestaurantCategory.js";
import React from "react";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useFetchData(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories = (
    resInfo?.cards[5] ||
    resInfo?.cards[4] ||
    resInfo?.cards[3]
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (e) =>
      e?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const handleShow = (index) => {
    index === showIndex ? setShowIndex(null) : setShowIndex(index);
  };

  // || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[0].card.info;
  // 853378 in This ResID Data Comes In Different Way

  return (
    <div className="m-5">
      <div className="flex justify-center">
        <div className="border-solid border-2 border-black rounded-md px-16 pb-3">
          <h1 className="text-2xl font-bold my-2"> {name} </h1>
          <p className="text-lg font-medium">
            Cuisines: {cuisines?.join(", ")}{" "}
          </p>
          <p className="text-lg font-medium">
            Cost for Two: {costForTwoMessage}{" "}
          </p>
          <p className="text-lg font-medium"> Average Rating: {avgRating} </p>
        </div>
      </div>
      <h1 className="text-2xl font-bold my-5 text-center">MENU</h1>
      {categories.map((category, index) => (
        <RestuarantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          showIndex={() => handleShow(index)}
        />
      ))}
    </div>
  );
};

export default ResMenu;
