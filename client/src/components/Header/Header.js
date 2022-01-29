import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/icons/paws-logo.jpg";
import { AiFillHome } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [reportDropdown, setReportDropdown] = useState(false);
  const [searchDropdown, setSearchDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="logo" className="navbar-logo__image"></img>
        </Link>
        <ul className="nav-items">
          <li
            className="nav-item"
            onMouseEnter={() => {
              setHomeDropdown(true);
            }}
            onMouseLeave={() => setHomeDropdown(false)}
          >
            <Link to="/" className="nav-link">
              <AiFillHome size={25} className="nav-icon" />
              Home
            </Link>
            {homeDropdown && (
              <ul
                className={homeDropdown ? "submenu" : "submenu--hide"}
                onClick={() => setHomeDropdown(!homeDropdown)}
              >
                <li className="submenu__item">
                  <a href="#how-it-works" className="submenu__link">
                    How it works
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => {
              setReportDropdown(true);
            }}
            onMouseLeave={() => setReportDropdown(false)}
          >
            <Link className="nav-link">
              <GiMagnifyingGlass size={25} className="nav-icon" />
              Lost & Found
            </Link>
            {reportDropdown && (
              <ul
                className={reportDropdown ? "submenu" : "submenu--hide"}
                onClick={() => setReportDropdown(!reportDropdown)}
              >
                <li className="submenu__item">
                  <Link to="/report-pet/lost" className="submenu__link">
                    Report Lost
                  </Link>
                </li>
                <li className="submenu__item">
                  <Link
                    to="/report-pet/found"
                    className="submenu__link"
                    onClick={() => setReportDropdown(false)}
                  >
                    Report Found
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => {
              setSearchDropdown(true);
            }}
            onMouseLeave={() => setSearchDropdown(false)}
          >
            <Link to="/search-pet" className="nav-link">
              <FaMapMarkerAlt size={20} className="nav-icon" />
              Search
            </Link>
            {searchDropdown && (
              <ul
                className={searchDropdown ? "submenu" : "submenu--hide"}
                onClick={() => setSearchDropdown(!searchDropdown)}
              >
                <li className="submenu__item">
                  <a href="#map-search" className="submenu__link">
                    Search by Map
                  </a>
                </li>
                <li className="submenu__item">
                  <Link
                    to="/search-pet"
                    className="submenu__link"
                    onClick={() => setSearchDropdown(false)}
                  >
                    Pet Report Lists
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );

  //   <header className="header">
  //     <Link to="/">
  //       <img src={logo} alt="logo" className="header__logo"></img>
  //     </Link>
  //     <ul className="navbar">
  //       <li className="navbar__list">
  //         <Link to="/" className="navbar__text">
  //           <AiFillHome size={25} className="navbar__icon" />
  //           Home
  //         </Link>
  //       </li>
  //       <li className="navbar__list">
  //         <Link className="navbar__text">
  //           <GiMagnifyingGlass size={30} className="navbar__icon" />
  //           Lost & Found
  //         </Link>
  //         <div className="nav-content">
  //           <div className="nav-sub">
  //             <Link to="/report-pet" className="nav-content-link">
  //               Report Lost
  //             </Link>
  //             <Link to="/report-pet" className="nav-content-link">
  //               Report Found
  //             </Link>
  //           </div>
  //         </div>
  //       </li>
  //       <li className="navbar__list">
  //         <Link className="navbar__text">
  //           <FaMapMarkerAlt size={20} className="navbar__icon" />
  //           Search
  //         </Link>
  //         <div className="nav-content">
  //           <div className="nav-sub">
  //             <Link to="#map-search" className="nav-content-link">
  //               Search by Map
  //             </Link>
  //             <Link className="nav-content-link">Search by Filter</Link>
  //           </div>
  //         </div>
  //       </li>
  //     </ul>
  //     <div className="header__user">
  //       <p className="header__user-signin">Sign In</p>
  //       <BiUserCircle size={50} className="header__user-logo" />
  //     </div>
  //   </header>
  // );
}

export default Header;
