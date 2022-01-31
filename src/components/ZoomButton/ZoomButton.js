import React from "react";
import "./ZoomButton.scss";

function ZoomButton({ zoomIndex, handleZoom }) {
  return <button onClick={() => handleZoom(zoomIndex)}>1km</button>;
}

export default ZoomButton;
