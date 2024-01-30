import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resinfo, setResinfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=46844&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();
    setResinfo(jsonData.data);
    console.log(jsonData.data);
  };

  if (resinfo === null) return <Shimmer />;

  const {
    name = "",
    cuisines = "",
    costForTwoMessage = "",
  } = resinfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <h2>{costForTwoMessage}</h2>
      {/* <p>{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</p> */}
      <h1>menu</h1>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}>
            {item.card.info.name} - {item.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
