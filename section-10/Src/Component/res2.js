import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState();
  const [typedtext, settypedtext] = useState(" ");
  const [filteresRestaurant, setfilteredRestaurant] = useState();

  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const Data = await fetch("someapi");
    const datajson = Data.json();
    setlistofRestaurant(datajson);
  };

  return (
    <div>
      <input
        type="text"
        value={typedtext}
        onChange={(e) => {
          settypedtext(e.target.value);
        }}
        placeholder="Search here"
      ></input>
      <button
        onClick={() => {
          console.log(typedtext);
          const resultofSearchRestaurant = listofRestaurant.map(
            (restaurant) => {
              return restaurant.info.name
                .toLowerCase()
                .includes(typedtext.toLowerCase());
            }
          );
          console.log(searchedRestaurant);
          filteresRestaurant(resultofSearchRestaurant);
        }}
      >
        search
      </button>
      <div className="res-container">
        {filteresRestaurant.map((filRes) => (
          <Link>

            <RestaurantCard resData={filRes} />
          </Link>
        ))}
      </div>
    </div>
  );
};
