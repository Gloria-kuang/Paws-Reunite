import React from "react";
import "./SearchMap.scss";
import { useState, useEffect } from "react";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import GoogleMapReact from "google-map-react";
import Flag from "../Flag/Flag";
import Geocode from "react-geocode";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function SearchMap() {
  const [location, setLocation] = useState({
    center: {
      lat: 43.65,
      lng: -79.38
    },
    zoom: 13
  });

  const defaultProps = {
    center: {
      lat: 43.65,
      lng: -79.38
    },
    zoom: 13
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    const inputAddress = e.target.address.value;
    const zoomIndex = e.target.zoom.value;
    console.log(zoomIndex);

    // Turn address into lat and lng
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
    Geocode.setRegion("ca");
    Geocode.setLocationType("ROOFTOP");
    Geocode.fromAddress(inputAddress).then(
      (response) => {
        console.log("list", response.results);
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        setLocation({
          center: {
            lat: lat,
            lng: lng
          },
          zoom: Number(zoomIndex)
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <section className="map-search" id="map-search">
      <h2 className="map-search__header">Enter Your Location</h2>
      <form className="map-search__form" onSubmit={handleAddressSubmit}>
        <input
          className="map-search__form-input"
          name="address"
          placeholder="Enter your postal code here"
        ></input>
        {/* <div className="auto-complete">
          <GooglePlacesAutocomplete apiKey={process.env.REACT_APP_GOOGLE_API_KEY} />
        </div> */}
        <div>
          <input type="radio" name="zoom" id="zoom" value="15" />
          <label>1 km</label>
          <input type="radio" name="zoom" id="zoom" value="13.5" />
          <label>3 km</label>
          <input type="radio" name="zoom" id="zoom" value="12.5" />
          <label>5 km</label>
          <input type="radio" name="zoom" id="zoom" value="11.5" />
          <label>10 km</label>
        </div>
        <SecondaryButton text={"Submit"} type="submit" />
        <div className="map-search__map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCLR2oBO084nBoCOR7XIE8QXpYvcftEdI8"
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            center={location.center}
            zoom={location.zoom}
          >
            <Flag
              lat={location.center.lat}
              lng={location.center.lng}
              text="Here"
            />
          </GoogleMapReact>
        </div>
      </form>
    </section>
  );
}

export default SearchMap;
