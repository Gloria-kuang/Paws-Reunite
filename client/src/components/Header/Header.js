import React from "react";
import "./Header.scss";
import logo from "../../assets/icons/paws-logo.jpg";
import { AiFillHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo"></img>
      <ul className="navbar">
        <li className="navbar__list">
          <AiFillHome />
          Home
        </li>
        <li className="navbar__list">Lost & Found</li>
        <li className="navbar__list">Search</li>
      </ul>
      <div className="header__user">
        <p className="header__user-signin">Sign In</p>
        <BiUserCircle size={60} className="header__user-logo" />
      </div>
    </header>
  );
}

export default Header;
