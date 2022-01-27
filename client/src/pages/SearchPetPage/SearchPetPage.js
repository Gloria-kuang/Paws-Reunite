import React from "react";
import ReportCard from "../../components/ReportCard/ReportCard";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import "./SearchPetPage.scss";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function SearchPetPage() {
  const db = getFirestore();
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "pet-reports"));

    const reposrList = querySnapshot.docs.map((doc) => {
      const reportId = doc.id;
      const reportData = doc.data();
      return { reportId, reportData };
    });

    console.log("reposrList", reposrList);
  };
  getData();

  return (
    <main className="search-page">
      <div className="search-filter">
        <form className="search-filter__form">
          <div>
            <h3 className="search-filter__label">Status</h3>
            <input
              type="radio"
              name="status"
              id="Lost"
              value="Lost"
              className="search-filter__radio-input"
            />
            <label className="search-filter__radio-label">Lost</label>

            <input
              type="radio"
              name="type"
              id="Found"
              value="Found"
              className="search-filter__radio-input"
            />
            <label className="search-filter__radio-label">Found</label>
          </div>
          <div>
            <h3 className="search-filter__label">Type</h3>
            <input
              type="radio"
              name="type"
              id="Dog"
              value="Dog"
              className="search-filter__radio-input"
            />
            <label className="search-filter__radio-label">Dog</label>

            <input
              type="radio"
              name="type"
              id="Cat"
              value="Cat"
              className="search-filter__radio-input"
            />
            <label className="search-filter__radio-label">Cat</label>
          </div>
          <div>
            <h3 className="search-filter__label">Sex</h3>
            <input
              type="radio"
              name="sex"
              id="All"
              value="All"
              className="search-filter__radio-input"
            />
            <label className="search-filter__radio-label">All</label>
            <input
              type="radio"
              name="sex"
              id="Male"
              value="Male"
              className="search-filter__radio-input"
            />
            <label className="search-filter__radio-label">Male</label>

            <input
              type="radio"
              name="sex"
              id="Female"
              value="Female"
              className="search-filter__radio-input"
            />
            <label className="search-filter__radio-label">Female</label>
            <input
              type="radio"
              name="sex"
              id="Unknown"
              value="Unknown"
              className="search-filter__radio-input"
            />
            <label className="search-filter__radio-label">Unknown</label>
          </div>
          <div>
            <h3 className="search-filter__label">Location</h3>
            <p className="search-filter__text">City, Postal Code, or Address</p>
            <input type="text" className="search-filter__input"></input>
          </div>
          <div className="serch-filter__sub-container">
            <h3 className="search-filter__label">Within Past</h3>
            <div>
              <input
                type="radio"
                name="date"
                id="1-month"
                value="1-month"
                className="search-filter__radio-input"
              />
              <label className="search-filter__radio-label">1 Month</label>
              <input
                type="radio"
                name="date"
                id="3-months"
                value="3-months"
                className="search-filter__radio-input"
              />
              <label className="search-filter__radio-label">3 Months</label>
            </div>
            <div>
              <input
                type="radio"
                name="date"
                id="6-months"
                value="6-months"
                className="search-filter__radio-input"
              />

              <label className="search-filter__radio-label">6 Months</label>
              <input
                type="radio"
                name="date"
                id="1-year"
                value="1-year"
                className="search-filter__radio-input"
              />
              <label className="search-filter__radio-label">1 Year</label>
            </div>
          </div>
          <div className="search-filter__button-container">
            <SecondaryButton text={"Find"} />
          </div>
        </form>
      </div>
      <div className="search-list">
        <h2 className="search-list__header">Lost and Found Pets</h2>
        <div className="search-list__container">
          <ReportCard />
          <ReportCard />
          <ReportCard />
        </div>
      </div>
    </main>
  );
}

export default SearchPetPage;
