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
import {
  collection,
  getDocs,
  getFirestore,
  query,
  orderBy
} from "firebase/firestore";
import PetMarker from "../PetMarker/PetMarker";
import ReportCardModal from "../ReportCardModal/ReportCardModal";

function SearchMap() {
  const [location, setLocation] = useState({
    description: "",
    lat: 43.65,
    lng: -79.38
  });
  const [zoom, setZoom] = useState(13.5);
  const [reportList, setReportList] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    getData();
  });

  //get report data from firebase
  const db = getFirestore();
  const getData = async () => {
    const q = query(collection(db, "pet-reports"), orderBy("date"));
    const querySnapshot = await getDocs(q);
    const reportListOld = querySnapshot.docs.map((doc) => {
      const reportId = doc.id;
      const reportData = doc.data();
      return { reportId, reportData };
    });
    const reportList = reportListOld.reverse();
    setReportList(reportList);
  };

  const {
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

  if (reportList === null) {
    return <p>loading...</p>;
  }
  return (
    <section className="map-search" id="map-search">
      {modalData && (
        <ReportCardModal
          modalData={modalData}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
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
          <div className="map-search__zoom-bar">
            <div className="map-search__zoom-options">
              <label className="map-search__zoom-label">1 km</label>
              <input
                type="radio"
                name="zoom"
                id="zoom"
                value="15"
                className="map-search__zoom-radio"
              />
            </div>
            <div className="map-search__zoom-options">
              <label className="map-search__zoom-label">3 km</label>
              <input
                type="radio"
                name="zoom"
                id="zoom"
                value="13.5"
                className="map-search__zoom-radio"
                defaultChecked
              />
            </div>
            <div className="map-search__zoom-options">
              <label className="map-search__zoom-label">5 km</label>
              <input
                type="radio"
                name="zoom"
                id="zoom"
                value="12.5"
                className="map-search__zoom-radio"
              />
            </div>
            <div className="map-search__zoom-options">
              <label className="map-search__zoom-label">10 km</label>
              <input
                type="radio"
                name="zoom"
                id="zoom"
                value="11.5"
                className="map-search__zoom-radio"
              />
            </div>
          </div>
        </div>
        <SecondaryButton text={"Submit"} type="submit" />
        <div className="map-search__indicator">
          <div className="map-search__indicator-lost">Lost</div>
          <div className="map-search__indicator-found">Found</div>
        </div>
        <div className="map-search__map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_FALLBACK_GOOGLE_API_KEY
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
            {reportList.map((report) => {
              return (
                <PetMarker
                  lat={report.reportData.lat}
                  lng={report.reportData.lng}
                  image={report.reportData.image}
                  status={report.reportData.status}
                  key={report.reportId}
                  onViewClick={() => {
                    setModalData(report.reportData);
                    setModalShow(true);
                  }}
                />
              );
            })}
          </GoogleMapReact>
        </div>
      </form>
    </section>
  );
}

export default SearchMap;
