import { useDispatch } from "react-redux";
import { Imageurl } from "../utils/utilities";
import { additem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(additem(item));
    console.log(item);
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name} </span>
              <span>
                - ₹
                {item.card.info.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 bg-white mx-16 text-green-800 rounded-lg shadow-lg"
                onClick={() => {
                  handleAddItems(item);
                }}
              >
                ADD +
              </button>
            </div>
            <img
              src={Imageurl + item.card.info.imageId}
              className="w-full rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
