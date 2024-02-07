import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/Usercontext";
import { useSelector } from "react-redux";
//selector is used to subscribe the data

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedinuser } = useContext(userContext);

  //selector is used below here to retireve data from Redux store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex justify-between bg-pink-200 sm:bg-yellow-200 lg:bg-green-200 font-[500]">
      <div className="logo-container">
        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3655/3655682.png"
            alt="Logo"
            className="w-16 mx-6 mt-2"
          />
        </Link>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "⛔"}</li>
          <li className="px-4">
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="links">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="links">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" className="links">
              Grocery
            </Link>
          </li>
          <li className="px-4">
            <Link to="/Cart" className="links">
              Cart({cartItems.length})
            </Link>
          </li>
          <button
            className="loginBtn"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedinuser}</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
