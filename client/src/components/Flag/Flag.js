import React from "react";
import "./Flag.scss";
import { ImLocation } from "react-icons/im";

function Flag({ text }) {
  return (
    <div className="flag">
      <ImLocation size={50} className="flag__icon" />
      <p className="flag__text">{text}</p>
    </div>
  );
}

export default Flag;
