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
      <h3 className="ml-2 font-bold my-2 text-xl">{name}</h3>
      <h4 className="ml-2 text-base font-medium">
        {avgRating} • {sla.slaString}
      </h4>
      <p className="ml-2 text-base">{cuisines.join(", ")}</p>
      <p className="ml-2 text-base font-medium">
        Distance {sla.lastMileTravelString}
      </p>
      <p className="ml-2 text-base font-medium">{areaName}</p>
    </div>
  );
};

export default Restaurants;

export const withOpenLabel = (Restaurants) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded ">
          Open Now{" "}
        </label>
        <Restaurants {...props} />
      </div>
    );
  };
};
