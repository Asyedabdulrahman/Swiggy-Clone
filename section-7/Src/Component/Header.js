import { useState } from "react";
import { HeaderUrl } from "../utils/utilities";
import { Link } from "react-router-dom";
const Header = () => {
  const [onclickstate, setonclickstate] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={HeaderUrl} alt="App Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="search-btn"
            onClick={() => {
              onclickstate === "Login"
                ? setonclickstate("Logout")
                : setonclickstate("Login");
            }}
          >
            {onclickstate}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
