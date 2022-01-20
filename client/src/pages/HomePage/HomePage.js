import React from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";

function HomePage() {
  return (
    <div>
      <Header />
      <section className="hero">
        <p className="hero__text">WE MADE HAPPY REUNION</p>
        <button className="hero__button">REPORT LOST</button>
      </section>
    </div>
  );
}

export default HomePage;
