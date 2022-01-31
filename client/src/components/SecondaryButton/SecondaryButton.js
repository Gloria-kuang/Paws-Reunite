import React from "react";
import "./SecondaryButton.scss";

function SecondaryButton({ text }) {
  return (
    <button type="submit" className="secondary-button">
      {text}
    </button>
  );
}

export default SecondaryButton;
