import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UseContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-md align-middle bg-slate-50">
      <div className="w-24 mx-4 my-2">
        <Link to="/">
          <img className="mix-blend-multiply" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <nav>
          <ul className="flex mx-4 p-4 font-bold szie text-xl">
            <li className="mx-3 hover:text-cyan-500">
              {onlineStatus === true ? "Online 🟢" : "Offline 🔴"}
            </li>
            <li className="mx-3 hover:text-cyan-500">
              <Link to="/" className="noUnderline">
                Home
              </Link>
            </li>
            <li className="mx-3 hover:text-cyan-500">
              <Link to="/about" className="noUnderline">
                {" "}
                About{" "}
              </Link>
            </li>
            <li className="mx-3 hover:text-cyan-500">
              <Link to="/contact" className="noUnderline">
                Contact
              </Link>
            </li>
            <li className="mx-3 hover:text-cyan-500">
              <Link to="/grocery" className="noUnderline">
                Grocery
              </Link>
            </li>
            <li>
              <Link to="/cart" className="noUnderline">
                Cart - ({cartItems.length})
              </Link>
            </li>
            <button
              className="mx-3 hover:text-cyan-500"
              onClick={() => {
                return login === "Login"
                  ? setLogin("Logout")
                  : setLogin("Login");
              }}
            >
              {login}
            </button>
            <li>Hi👋,{loggedInUser}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
