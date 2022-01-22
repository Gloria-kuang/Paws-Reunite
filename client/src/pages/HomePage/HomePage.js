import React from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import CircleCard from "../../components/CircleCard/CircleCard";

function HomePage() {
  return (
    <div>
      <Header />
      <section className="hero">
        <p className="hero__text">WE MADE HAPPY REUNION</p>
        <Link to="/report-pet" className="hero__button-link">
          <PrimaryButton text={"Report Lost"} />
        </Link>
      </section>
      <section className="how-it-works">
        <div className="how-it-work__container">
          <CircleCard />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
