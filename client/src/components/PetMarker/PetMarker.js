import React from "react";
import "./PetMarker.scss";

function PetMarker({ image, status, onViewClick }) {
  return (
    <div>
      <img
        src={image}
        alt="pet"
        className={status === "Lost" ? "marker--lost" : "marker--found"}
        onClick={() => onViewClick()}
      />
    </div>
  );
}

export default PetMarker;
