import React from "react";
import "./Header.scss";
import logo from "../../assets/icons/paws-logo.jpg";
import { AiFillHome } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo"></img>
      <ul className="navbar">
        <li className="navbar__list">
          <AiFillHome size={28} className="header__icon" />
          Home
        </li>
        <li className="navbar__list">
          <GiMagnifyingGlass size={30} className="header__icon" />
          Lost & Found
        </li>
        <li className="navbar__list">
          <FaMapMarkerAlt className="header__icon" />
          Search
        </li>
      </ul>
      <div className="header__user">
        <p className="header__user-signin">Sign In</p>
        <BiUserCircle size={60} className="header__user-logo" />
      </div>
    </header>
  );
}

export default Header;
