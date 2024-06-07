import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UseContext";
import React from "react";

const Restaurants = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = props;
  let { name, avgRating, cloudinaryImageId, sla, cuisines, areaName } =
    resData?.info;
  return (
    <div
      data-testid="resCard"
      className="m-3 p-4 w-[280px] hover:scale-95 ease-in-out transition-transform duration-300"
    >
      <img
        className="object-cover h-[150px] w-full rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="ml-2 font-bold my-2 text-lg">{name}</h3>

      <p className="ml-2 text-base">
        {cuisines.slice(0, 3).join(", ")}
        {cuisines.length > 3 ? "..." : ""}
      </p>
      <h4 className="ml-2 text-base font-medium">
        <div className="flex items-center">
          <img
            className="inline-block w-4 h-4 mr-1"
            src="https://res.cloudinary.com/dvovtfe0s/image/upload/v1717529992/star-7207_mvk2fo.svg"
          />
          <span className="mr-1">{avgRating}</span>
          • {sla.slaString}
        </div>
      </h4>
      <div className="ml-2 text-base font-medium flex items-center">
        <img
          className="w-4 h-4"
          src="https://res.cloudinary.com/dvovtfe0s/image/upload/v1717530548/fast-food-delivery-12982_jthlwk.svg"
        />
        <p className="mx-1">Distance {sla.lastMileTravelString} </p>
      </div>
      <p className="ml-2 text-base font-medium">Area : {areaName}</p>
    </div>
  );
};

export default Restaurants;
