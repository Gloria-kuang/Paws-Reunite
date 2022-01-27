import React, { useState } from "react";
import "./ReportCardModal.scss";
import Modal from "react-bootstrap/Modal";
import AlternateButton from "../AlternateButton/AlternateButton";
import Tag from "../Tag/Tag";
import ShareButton from "../ShareButton/ShareButton";

function ReportCardModal({ show, modalData, onHide }) {
  const [emailShow, setEmailShow] = useState(false);

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="modal__header"
        >
          {modalData.status} Pet Report
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal__report">
          <div>
            <div className="modal__first-line">
              <h4 className="modal__name">
                <strong>"{modalData.name}" </strong>
                <small>
                  {modalData.sex} {modalData.type}
                </small>
              </h4>
              <Tag text={modalData.status}></Tag>
            </div>
            <p>
              <strong>{modalData.status} Date :</strong> {modalData.date}
            </p>
            <p>
              <strong>Last Seen Address :</strong> {modalData.address}
            </p>
            <p>
              <strong>Description :</strong> {modalData.description}
            </p>
          </div>
          <img src={modalData.image} alt="pet" className="modal__image"></img>
        </div>
        {emailShow && (
          <form className="form">
            <p className="contact-form__header">
              Please leave your message here
            </p>
            <textarea className="contact-form__textarea"></textarea>
            <div className="contact-form__button">
              <AlternateButton text={"submit"} />
            </div>
          </form>
        )}
      </Modal.Body>
      <Modal.Footer className="modal__footer">
        <div className="modal__button">
          <AlternateButton
            text={"Contact"}
            onClick={() => {
              setEmailShow((prev) => !prev);
            }}
          />
        </div>
        <ShareButton />
      </Modal.Footer>
    </Modal>
  );
}

export default ReportCardModal;
