import React from "react";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-logo-item">
        <img src={logo} />
        <ul className="nav-items">
          <li className="item">Collection</li>
          <li className="item">Man</li>
          <li className="item">Women</li>
          <li className="item">About</li>
          <li className="item">Contact</li>
        </ul>
      </div>
      <div className="nav-bar-price-pictures">
        <img className="cart" src={cart} />
        <img className="pictures" src={avatar} />
      </div>
    </div>
  );
};

export default NavBar;
