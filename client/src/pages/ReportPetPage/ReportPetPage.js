import React from "react";
import "./ReportPetPage.scss";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";

function ReportPetPage() {
  return (
    <main className="report-pet">
      <div className="report-form__container">
        <h2 className="report-form__header">Report A Pet</h2>
        <form className="report-form">
          <div className="report-form__status">
            <p className="report-form__label">Pet Status</p>
            <input
              type="radio"
              name="petStatus"
              id="Lost"
              value="Lost"
              className="report-form__radio-input  "
            />
            <label className="report-form__radio-label report-form__radio-label-tag">
              Lost
            </label>
            <input
              type="radio"
              name="petStatus"
              id="Lost"
              value="Found"
              className="report-form__radio-input"
            />
            <label className="report-form__radio-label report-form__radio-label-tag">
              Found
            </label>
          </div>
          <div className="report-form__sub-container">
            <div className="report-form__label-set">
              <p className="report-form__label">I Lost A </p>
              <input
                type="radio"
                name="type"
                id="Dog"
                value="Dog"
                className="report-form__radio-input"
              />
              <label className="report-form__radio-label">Dog</label>

              <input
                type="radio"
                name="type"
                id="Cat"
                value="Cat"
                className="report-form__radio-input"
              />
              <label className="report-form__radio-label">Cat</label>
            </div>
            <div className="report-form__label-set">
              <p className="report-form__label">Sex </p>
              <input
                type="radio"
                name="sex"
                id="Male"
                value="Male"
                className="report-form__radio-input"
              />
              <label className="report-form__radio-label">Male</label>

              <input
                type="radio"
                name="sex"
                id="Female"
                value="Female"
                className="report-form__radio-input"
              />
              <label className="report-form__radio-label">Female</label>
              <input
                type="radio"
                name="sex"
                id="Unknown"
                value="Unknown"
                className="report-form__radio-input"
              />
              <label className="report-form__radio-label">Unknown</label>
            </div>
          </div>
          <div className="report-form__sub-container">
            <label className="report-form__label report-form__label-set">
              Pet Name
              <input type="text" name="name" className="report-form__input" />
            </label>
            <label className="report-form__label report-form__label-set">
              Last Seen Address
              <input
                type="text"
                name="address"
                className="report-form__input"
              />
            </label>
          </div>
          <div className="report-form__sub-container">
            <label className="report-form__label report-form__label-set">
              Contact Email
              <input type="email" name="email" className="report-form__input" />
            </label>
            <label className="report-form__label report-form__label-set">
              Lost Date
              <input
                type="date"
                name="date"
                min="2021-01-01"
                className="report-form__input"
              />
            </label>
          </div>
          <div className="report-form__sub-container">
            <label className="report-form__label report-form__label-set">
              Description
              <textarea
                type="text"
                name="description"
                className="report-form__textarea"
              />
            </label>
          </div>
          <div className="report-form__button">
            <SecondaryButton text={"Submit"} />
          </div>
        </form>
      </div>
    </main>
  );
}

export default ReportPetPage;
