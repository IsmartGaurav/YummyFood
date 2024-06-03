import { useEffect, useState } from "react";

const useFetchData = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8947446&lng=75.8301169&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

    const main_url = "https://thingproxy-760k.onrender.com/fetch/" + url;

    const data = await fetch(main_url);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useFetchData;
