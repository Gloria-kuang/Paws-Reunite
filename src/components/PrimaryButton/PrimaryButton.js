import React from "react";
import "./PrimaryButton.scss";

function PrimaryButton({ text, onViewClick }) {
  return (
    <button className="primary-button" onClick={() => onViewClick()}>
      {text}
    </button>
  );
}

export default PrimaryButton;
