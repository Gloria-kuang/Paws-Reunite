import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/icons/paws-logo.jpg";
import { AiFillHome } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [reportDropdown, setReportDropdown] = useState(false);
  const [searchDropdown, setSearchDropdown] = useState(false);
  const [allDropdown, setAllDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="logo" className="navbar-logo__image"></img>
        </Link>
        <div
          className="navbar-hamburger__container"
          onMouseEnter={() => {
            setAllDropdown(true);
          }}
        >
          <GiHamburgerMenu size={35} className="navbar-hamburger" />
        </div>
        {allDropdown && (
          <ul
            className={allDropdown ? "mobile-submenu" : "mobile-submenu--hide"}
            onClick={() => setAllDropdown(!allDropdown)}
            onMouseLeave={() => setAllDropdown(false)}
          >
            <li className="mobile-submenu__item">
              <Link to="/how-it-works" className="mobile-submenu__link">
                How it works
              </Link>
            </li>
            <li className="mobile-submenu__item">
              <Link to="/report-pet/lost" className="mobile-submenu__link">
                Report Lost
              </Link>
            </li>
            <li className="mobile-submenu__item">
              <Link to="/report-pet/found" className="mobile-submenu__link">
                Report Found
              </Link>
            </li>
            <li className="mobile-submenu__item">
              <Link to="/" className="mobile-submenu__link">
                Search by Map
              </Link>
            </li>
            <li className="mobile-submenu__item">
              <Link to="/map-search" className="mobile-submenu__link">
                Pet Reports List
              </Link>
            </li>
          </ul>
        )}

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
                  <Link to="/how-it-works" className="submenu__link">
                    How it works
                  </Link>
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
                  <Link to="/map-search" className="submenu__link">
                    Search by Map
                  </Link>
                </li>
                <li className="submenu__item">
                  <Link
                    to="/search-pet"
                    className="submenu__link"
                    onClick={() => setSearchDropdown(false)}
                  >
                    Pet Reports List
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
