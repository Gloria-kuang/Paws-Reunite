import React from "react";
import "./Header.scss";
import logo from "../../assets/icons/paws-logo.jpg";
import { AiFillHome } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo"></img>
      </Link>
      <ul className="navbar">
        <li className="navbar__list">
          <Link to="/" className="navbar__text">
            <AiFillHome size={25} className="navbar__icon" />
            Home
          </Link>
        </li>
        <li className="navbar__list">
          <Link className="navbar__text">
            <GiMagnifyingGlass size={30} className="navbar__icon" />
            Lost & Found
          </Link>
          <div className="nav-content">
            <div className="nav-sub">
              <Link to="/report-pet" className="nav-content-link">
                Report Lost
              </Link>
              <Link to="/report-pet" className="nav-content-link">
                Report Found
              </Link>
            </div>
          </div>
        </li>
        <li className="navbar__list">
          <Link className="navbar__text">
            <FaMapMarkerAlt size={20} className="navbar__icon" />
            Search
          </Link>
          <div className="nav-content">
            <div className="nav-sub">
              <Link to="#map-search" className="nav-content-link">
                Search by Map
              </Link>
              <Link className="nav-content-link">Search by Filter</Link>
            </div>
          </div>
        </li>
      </ul>
      <div className="header__user">
        <p className="header__user-signin">Sign In</p>
        <BiUserCircle size={50} className="header__user-logo" />
      </div>
    </header>
  );
}

export default Header;
