import React from "react";
import "./ReportCard.scss";
import testImg from "../../assets/image/circle-pet1-min.jpg";
import Tag from "../Tag/Tag";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function ReportCard() {
  return (
    <article className="pet-report">
      <img src={testImg} alt="pet" className="pet-report__image"></img>
      <div className="pet-report__content">
        <div className="pet-report__headline">
          <p>
            "Mango" <span>female </span> dog
          </p>
          <p className="pet-report__date">1 month ago</p>
        </div>
        <Tag text={"Lost"} />
        <div className="pet-report__address-line">
          <p className="pet-report__address">North York, ON, M2L 1V4</p>
          <div className="pet-report__button-container">
            <PrimaryButton text={"View"} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default ReportCard;
