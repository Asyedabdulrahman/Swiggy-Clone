import { Imageurl } from "../utils/utilities";
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    // deliveryTime,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all ">
      <div>
        <img
          className="w-[250px] h-[150px] rounded-lg"
          src={Imageurl + cloudinaryImageId}
          alt="Biryani"
        />
      </div>
      <div>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <em>{cuisines.join(", ")}</em>
        <h4>{avgRating} stars</h4>
        <h4 className="item-price">
          <span></span> <span>{costForTwo} </span>
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
