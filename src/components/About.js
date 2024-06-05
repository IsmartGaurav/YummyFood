import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const About = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/IsmartGaurav"
        );
        const json = await response.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const { avatar_url, name, location, bio, login } = data;

  return loading ? (
    <Shimmer />
  ) : (
    <div className="items-center justify-center text-center my-8 w-5/12 m-auto">
      <h3 className="text-center font-medium my-5 text-2xl">About Me</h3>
      <div className="about-me-profile-photo">
        <img
          className="rounded-full w-60 h-60 mx-auto"
          src={avatar_url}
          alt=""
        />
      </div>
      <div>
        <span className="text-lg font-medium">Name : {name}</span>
        <div className="text-lg font-medium">
          <span>Live : {location}</span>
        </div>
      </div>

      <div className="about-project ">
        <h1 className="text-2xl font-normal my-2">About Project</h1>
        <p className="text-left">
          YummyFood is a food-ordering website that is built on top of the
          Swiggy API, a well-renowned food ordering platform. By seamlessly
          integrating technology with culinary expertise, YummyFood aims to
          provide users with a convenient and enjoyable platform for
          discovering, ordering, and savoring delicious meals from a variety of
          restaurants and eateries.
        </p>
      </div>
    </div>
  );
};

export default About;
