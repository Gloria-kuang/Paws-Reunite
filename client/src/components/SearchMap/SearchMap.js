import React from "react";
import "./SearchMap.scss";
import { useState, useEffect } from "react";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import GoogleMapReact from "google-map-react";
import Flag from "../Flag/Flag";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";

function SearchMap() {
  const [location, setLocation] = useState({
    description: "",
    lat: 43.65,
    lng: -79.38
  });
  const [zoom, setZoom] = useState(13);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300
  });

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();
      setLocation({
        ...location,
        description
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={handleSelect(suggestion)}
          className="map-search__form-suggestions-item"
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    const zoomIndex = e.target.zoom.value;
    setZoom(Number(zoomIndex));

    getGeocode({ address: location.description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("Coordinates: ", { lat, lng });
        setLocation({
          ...location,
          lat: lat,
          lng: lng
        });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <section className="map-search" id="map-search">
      <h2 className="map-search__header">Enter Your Location</h2>
      <form className="map-search__form" onSubmit={handleAddressSubmit}>
        <input
          className="map-search__form-input"
          placeholder="Enter your address here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {status === "OK" && (
          <ul className="map-search__form-suggestions">
            {renderSuggestions()}
          </ul>
        )}
        <div className="map-search__zoom">
          <div className="map-search__zoom-options">
            <input
              type="radio"
              name="zoom"
              id="zoom"
              value="15"
              className="map-search__zoom-radio"
            />
            <label>1 km</label>
          </div>
          <div className="map-search__zoom-options">
            <input
              type="radio"
              name="zoom"
              id="zoom"
              value="13.5"
              className="map-search__zoom-radio"
            />
            <label>3 km</label>
          </div>
          <div className="map-search__zoom-options">
            <input
              type="radio"
              name="zoom"
              id="zoom"
              value="12.5"
              className="map-search__zoom-radio"
            />
            <label>5 km</label>
          </div>
          <div className="map-search__zoom-options">
            <input
              type="radio"
              name="zoom"
              id="zoom"
              value="11.5"
              className="map-search__zoom-radio"
            />
            <label>10 km</label>
          </div>
        </div>
        <SecondaryButton text={"Submit"} type="submit" />
        <div className="map-search__map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_API_KEY
            }}
            defaultCenter={{
              lat: 43.65,
              lng: -79.38
            }}
            defaultZoom={13}
            center={location}
            zoom={zoom}
          >
            <Flag lat={location.lat} lng={location.lng} text="Here" />
          </GoogleMapReact>
        </div>
      </form>
    </section>
  );
}

export default SearchMap;
