import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearitem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearitem());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          clear cart
        </button>
        {cartItems.length === 0 && (
          <h1>cart is empty. pls purchase products</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
