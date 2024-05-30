import Restaurants, { withOpenLabel } from "./Restaurants";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { REST_URL } from "../utils/constants";
import UserContext from "../utils/UseContext";
import React from "react";

const Body = () => {
  const [restroList, setRestroList] = useState([]);
  const [filterList, setFilterlist] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestuarantOpen = withOpenLabel(Restaurants);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_URL);
    const json = await data.json();
    const newRestaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestroList(newRestaurants);
    setFilterlist(newRestaurants);
  };

  const onlinestatus = useOnlineStatus();

  if (onlinestatus === false)
    return <h1>You Are Offline Check Your Internet Connection</h1>;

  if (restroList.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="flex justify-center">
        <div className="search m-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border-solid border-2 border-black rounded-md p-[2px]"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="mx-4 bg-green-300 px-4 py-2 rounded-lg"
            onClick={() => {
              const filterList = restroList.filter((searchName) =>
                searchName.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterlist(filterList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="m-4 px-4 bg-emerald-300 rounded-lg"
          onClick={() => {
            const filterRestro = restroList.filter(
              (Res) => Res.info.avgRating > 4
            );
            setFilterlist(filterRestro);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="m-4">
          <label>Change Username :</label>
          <input
            className="border border-black m-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filterList?.map((Restuarant) => (
          <Link
            key={Restuarant.info.id}
            data-testid="resCard"
            to={"/restaurant/" + Restuarant.info.id}
            className="noUnderline"
          >
            {Restuarant.info.isOpen ? (
              <RestuarantOpen resData={Restuarant} />
            ) : (
              <Restaurants resData={Restuarant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
