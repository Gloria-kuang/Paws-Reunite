import React from "react";
import "./HomePage.scss";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="hero__text">We make happy reunion</p>
        <div className="hero__button">
          <Link to="/report-pet" className="hero__button-link">
            <PrimaryButton text={"I Lost A Pet"} />
          </Link>
          <Link to="/report-pet" className="hero__button-link">
            <PrimaryButton text={"I Found A Pet"} />
          </Link>
        </div>
      </section>
      <section className="how-it-works">
        <h2 className="how-it-works__header">How it Works</h2>
        <div className="circle-card__container">
          <div className="circle-card circle-card--left">
            <div className="hidden__content">
              <h3 className="hidden__title">Step 1</h3>
              <p className="hidden__text">Submit a lost/found pet report</p>
            </div>
          </div>
          <div className="circle-card circle-card--middle">
            <div className="hidden__content">
              <h3 className="hidden__title hidden__title--middle">Step 2</h3>
              <p className="hidden__text">
                Search for lost/found pets in your area
              </p>
            </div>
          </div>
          <div className="circle-card circle-card--right">
            <div className="hidden__content">
              <h3 className="hidden__title">Step 3</h3>
              <p className="hidden__text">
                Share to social media and get more exposures
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="map-search" id="map-search">
        <h2 className="map-search__header">Enter Your Location</h2>
        <form className="map-search__form">
          <input
            className="map-search__form-input"
            placeholder="Enter your postal code here"
          ></input>
          <button className="map-search__form-button">Submit</button>
          <div className="map-search__map"></div>
        </form>
      </section>
    </main>
  );
}

export default HomePage;
