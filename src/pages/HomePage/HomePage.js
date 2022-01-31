import React from "react";
import "./HomePage.scss";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import SearchMap from "../../components/SearchMap/SearchMap";
import HowItWorks from "../../components/HowItWorks/HowItWorks";

function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="hero__text">We make happy reunion</p>
        <div className="hero__button">
          <Link to="/report-pet/lost" className="hero__button-link">
            <PrimaryButton text={"I Lost A Pet"} />
          </Link>
          <Link to="/report-pet/found" className="hero__button-link">
            <PrimaryButton text={"I Found A Pet"} />
          </Link>
        </div>
        <div className="hero__background"></div>
      </section>
      <HowItWorks />
      <section id="map-search">
        <SearchMap />
      </section>
    </main>
  );
}

export default HomePage;
