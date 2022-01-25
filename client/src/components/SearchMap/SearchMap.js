import React from "react";
import "./SearchMap.scss";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

function SearchMap() {
  return (
    <section className="map-search" id="map-search">
      <h2 className="map-search__header">Enter Your Location</h2>
      <form className="map-search__form">
        <input
          className="map-search__form-input"
          placeholder="Enter your postal code here"
        ></input>
        <SecondaryButton text={"Submit"} />
        <div className="map-search__map"></div>
      </form>
    </section>
  );
}

export default SearchMap;
