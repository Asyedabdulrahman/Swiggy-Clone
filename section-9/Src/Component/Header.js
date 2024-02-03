// import { useState } from "react";
// import { HeaderUrl } from "../utils/utilities";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// const Header = () => {
//   const [onclickstate, setonclickstate] = useState("Login");
//   const onlineStatus = useOnlineStatus();
//   return (
//     <div className="flex justify-between bg-pink-100 mb-2  ">
//       <div className="logo-container">
//         <img className="w-56" src={HeaderUrl} alt="App Logo" />
//       </div>
//       <div className="flex items-center">
//         <ul className="flex p-4 m-4">
//           <li className="px-4 ">online status:{onlineStatus ? "✅" : "🔴"}</li>
//           <li className="px-4 ">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="px-4 ">
//             <Link to="/About">About</Link>
//           </li>
//           <li className="px-4 ">
//             <Link to="/Contact">contact us</Link>
//           </li>
//           <li className="px-4 ">
//             <Link to="/Grocery">Grocery</Link>
//           </li>
//           <li className="px-4 ">Cart</li>
//           <button
//             className="search-btn"
//             onClick={() => {
//               onclickstate === "Login"
//                 ? setonclickstate("Logout")
//                 : setonclickstate("Login");
//             }}
//           >
//             {onclickstate}
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

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
            <Link className="links">Cart</Link>
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
        </ul>
      </div>
    </header>
  );
};

export default Header;
