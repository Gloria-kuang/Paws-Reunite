import React, { useState } from "react";
import "./ReportPetPage.scss";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import moment from "moment";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";
import { AiOutlineFileAdd } from "react-icons/ai";

function ReportPetPage(props) {
  const [reportImage, setReportImage] = useState(null);
  const pathname = props.history.location.pathname;
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300
  });

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={handleSelect(suggestion)}
          className="report-form__address-item"
        >
          <p className="report-form__address-text">
            {main_text},
            <span className="report-form__address-text report-form__address-text--small">
              {secondary_text}
            </span>
          </p>
        </li>
      );
    });

  const handleSubmitReport = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const isValid =
      e.target.status.value &&
      e.target.type.value &&
      e.target.sex.value &&
      e.target.name.value &&
      e.target.address.value &&
      e.target.email.value &&
      e.target.date.value &&
      e.target.description.value;

    if (isValid) {
      const db = getFirestore();
      const storage = getStorage();
      const reportImagesRef = ref(
        storage,
        `report/${moment().toISOString()}.jpg`
      );

      await uploadBytes(reportImagesRef, reportImage);
      const imgPath = await getDownloadURL(reportImagesRef);

      const currentDate = moment().unix();

      getGeocode({ address: e.target.address.value })
        .then((results) => getLatLng(results[0]))
        .then(async ({ lat, lng }) => {
          const docRef = await addDoc(collection(db, "pet-reports"), {
            status: e.target.status.value,
            type: e.target.type.value,
            sex: e.target.sex.value,
            name: e.target.name.value,
            address: e.target.address.value,
            email: e.target.email.value,
            date: e.target.date.value,
            description: e.target.description.value,
            timestamp: currentDate,
            image: imgPath,
            lat: lat,
            lng: lng
          });
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    } else {
      alert("All fields are requried to be filled.");
    }
  };

  return (
    <main className="report-pet">
      <div className="report-form__container">
        <h2 className="report-form__header">
          <AiOutlineFileAdd size={40} className="report-form__header-icon" />
          Report A Pet
        </h2>
        <form className="report-form" onSubmit={handleSubmitReport}>
          <div className="report-form__status">
            <p className="report-form__label">Pet Status</p>
            <input
              type="radio"
              name="status"
              id="Lost"
              value="Lost"
              className="report-form__radio-input"
              defaultChecked={pathname.includes("lost")}
            />
            <label className="report-form__radio-label report-form__radio-label-tag">
              Lost
            </label>
            <input
              type="radio"
              name="status"
              id="Lost"
              value="Found"
              className="report-form__radio-input"
              defaultChecked={pathname.includes("found")}
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
              <input
                type="text"
                name="name"
                className="report-form__input"
                placeholder="Enter Unkown If You Don't Know the Name"
              />
            </label>
            <label className="report-form__label report-form__label-set">
              Last Seen Address
              <input
                name="address"
                className="report-form__input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter the Nearest Address Last Seen"
              />
              {status === "OK" && (
                <ul className="report-form__address-list">
                  {renderSuggestions()}
                </ul>
              )}
            </label>
          </div>
          <div className="report-form__sub-container">
            <label className="report-form__label report-form__label-set">
              Contact Email
              <input
                type="email"
                name="email"
                className="report-form__input"
                placeholder="Enter Your Email"
              />
            </label>
            <label className="report-form__label report-form__label-set">
              Last Seen Date
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
                placeholder="Enter detailed descriptions will boost the reunite chances, e.g breed, age, color, collar/chip/tatoo..."
              />
            </label>
          </div>
          <div className="report-form__sub-container">
            <label className="report-form__label report-form__label-set">
              Image
              <p className="report-form__note">
                Please upload the pet image here
              </p>
              <input
                type="file"
                name="image"
                id="reportImage"
                onChange={(e) => {
                  setReportImage(e.target.files[0]);
                }}
                // className="report-form__radio-input"
              />
            </label>
          </div>
          {/* <img src={{ uri: require(reportImage) }} width={100} height={100} /> */}

          <div className="report-form__button">
            <SecondaryButton text={"Submit"} />
          </div>
        </form>
      </div>
    </main>
  );
}

export default ReportPetPage;
