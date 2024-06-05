import { useEffect, useState } from "react";

const useFetchData = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8947446&lng=75.8301169&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
      const main_url = "https://thingproxy-760k.onrender.com/fetch/" + url;

      const response = await fetch(main_url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseText = await response.text();

      // Sanitize JSON: Add double quotes to unquoted property names
      const sanitizedResponseText = responseText.replace(
        /([{,]\s*)([A-Za-z_][A-Za-z0-9_]*)(\s*:)/g,
        '$1"$2"$3'
      );

      const json = JSON.parse(sanitizedResponseText);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
      setError(`Error fetching or parsing data: ${error.message}`);
    }
  };

  return { resInfo, error }; // Return error state
};

export default useFetchData;
