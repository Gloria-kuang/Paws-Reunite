import React from "react";
import "./AlternateButton.scss";

function AlternateButton({ text, onClick }) {
  return (
    <button className="alternate-button" onClick={() => onClick()}>
      {text}
    </button>
  );
}

export default AlternateButton;
