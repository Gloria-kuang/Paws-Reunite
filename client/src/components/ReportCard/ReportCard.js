import React from "react";
import "./ReportCard.scss";
import Tag from "../Tag/Tag";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import moment from "moment";

function ReportCard({ reportId, reportData, onViewClick }) {
  return (
    <article className="pet-report">
      <img src={reportData.image} alt="pet" className="pet-report__image"></img>
      <div className="pet-report__content">
        <div className="pet-report__headline">
          <p>
            "{reportData.name}" <span>{reportData.sex} </span> {reportData.type}
          </p>
          <p className="pet-report__date">
            {moment(reportData.date).fromNow()}
          </p>
        </div>
        <Tag text={reportData.status} />
        <div className="pet-report__address-line">
          <p className="pet-report__address">{reportData.address}</p>
          <div className="pet-report__button-container">
            <PrimaryButton text={"View"} onViewClick={onViewClick} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default ReportCard;
