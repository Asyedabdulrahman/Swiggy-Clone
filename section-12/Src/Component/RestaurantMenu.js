import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurantmenu(resId);

  if (resinfo === null) return <Shimmer />;

  const {
    name = "",
    cuisines = "",
    costForTwoMessage = "",
  } = resinfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(itemCards);
  // console.log(resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} -{costForTwoMessage}
      </p>
      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
