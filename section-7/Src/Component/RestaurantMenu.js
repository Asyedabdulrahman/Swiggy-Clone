import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { json } from "react-router-dom";
import { useParams } from "react-router-dom";
import { menuurl } from "../utils/utilities";
import { menurulcontinue } from "../utils/utilities";

const RestaurantMenu = () => {
  const [resinfo, setResinfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(menuurl + resId + menurulcontinue);
    const Json = await data.json();
    setResinfo(Json.data);
    console.log(Json.data);
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
            {item.card.info.name} -{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
