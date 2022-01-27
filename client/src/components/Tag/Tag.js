import React from "react";
import "./Tag.scss";

function Tag({ text }) {
  console.log(text);
  return (
    <div className={"tag" + (text === "Lost" ? "--blue" : "--orange")}>
      {text}
    </div>
  );
}

export default Tag;
