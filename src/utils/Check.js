const fetchData = async () => {
  try {
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8947446&lng=75.8301169&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
    const main_url = "https://thingproxy-760k.onrender.com/fetch/" + url;
    const response = await fetch(main_url);
    const json = await response.json();
    const data = json?.data?.cards;

    const headerFinder = data.find(
      (card) =>
        card.card &&
        card.card.card &&
        card.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
    const header = headerFinder?.card?.card?.info;

    const menuFinder = data.find((card) => "groupedCard" in card);
    const menu = menuFinder.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const { imageId, text } = menu[menu.length - 2]?.card?.card || {};
    const { name, area, completeAddress } =
      menu[menu.length - 1]?.card?.card || {};
    const footer = { imageId, text, name, area, completeAddress };

    setHeaderData(header || {});
    setMenuData(menu || []);
    setFooterData(footer || {});
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setLoading(false);
  }
};
