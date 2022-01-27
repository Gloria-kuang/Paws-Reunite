import React from "react";
import "./Tag.scss";

function Tag({ text }) {
  return (
    <div className={"tag" + (text === "Lost" ? "--blue" : "--orange")}>
      {text}
    </div>
  );
}

export default Tag;
