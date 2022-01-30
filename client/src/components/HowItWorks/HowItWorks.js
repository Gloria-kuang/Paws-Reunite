import React from "react";
import "./HowItWorks.scss";

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
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
  );
}

export default HowItWorks;
