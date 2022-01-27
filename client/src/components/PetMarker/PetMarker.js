import React from "react";
import "./PetMarker.scss";

function PetMarker({ image, status }) {
  return (
    <div>
      <img
        src={image}
        alt="pet"
        className={status === "Lost" ? "marker--lost" : "marker--found"}
      />
    </div>
  );
}

export default PetMarker;
