import React from "react";
import "./SearchPetPage.scss";

function SearchPetPage() {
  return (
    <main className="search-page">
      <div className="search-filter">
        <form>
          <div>
            <h3>Type</h3>
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
          <div>
            <h3>Sex</h3>
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
        </form>
      </div>
      <div className="search-list">
        <h2 className="search-list__header">Lost and Found Pets</h2>
      </div>
    </main>
  );
}

export default SearchPetPage;
