import React from "react";
import "./ReportPetPage.scss";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";

function ReportPetPage() {
  return (
    <main className="report-pet">
      <div className="report-form__container">
        <h2 className="report-form__header">Report A Pet</h2>
        {/* <p className="report-form__text">Enter the pet's information to </p> */}
        <form className="report-form">
          <div className="report-form__status">
            <p className="report-form__label">Pet Status</p>

            <input
              type="radio"
              name="petStatus"
              id="Lost"
              value="Lost"
              className="report-form__radio-input"
            />
            <label className="report-form__radio-label">Lost</label>

            <input
              type="radio"
              name="petStatus"
              id="Lost"
              value="Found"
              className="report-form__radio-input"
            />
            <label className="report-form__radio-label">Found</label>
          </div>
          <div className="report-form__sub-container">
            <div className="report-form__label-set">
              <p className="report-form__label">I Lost A </p>
              <input
                type="radio"
                name="species"
                id="Dog"
                value="Dog"
                className="report-form__radio-input"
              />
              <label className="report-form__radio-label">Dog</label>

              <input
                type="radio"
                name="species"
                id="Cat"
                value="Cat"
                className="report-form__radio-input"
              />
              <label className="report-form__radio-label">Cat</label>
            </div>
            <div>
              <label className="report-form__label report-form__label-set">
                Breed
                <input
                  type="text"
                  name="breed"
                  className="report-form__input"
                />
              </label>
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
              <input type="text" name="email" className="report-form__input" />
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
          <div className="report-form__button">
            <SecondaryButton text={"Submit"} />
          </div>
        </form>
      </div>
    </main>
  );
}

export default ReportPetPage;
