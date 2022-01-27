import React from "react";
import "./ReportCardModal.scss";
import Modal from "react-bootstrap/Modal";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Tag from "../Tag/Tag";
import AlternateButton from "../AlternateButton/AlternateButton";
import ShareButton from "../ShareButton/ShareButton";

function ReportCardModal({ show, modalData, onHide }) {
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
      <Modal.Body className="modal__container">
        <div className="modal__report">
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
      </Modal.Body>
      <Modal.Footer className="modal__footer">
        <div className="modal__button">
          {/* <SecondaryButton text={"Contact"} /> */}
          <AlternateButton text={"Contact"} />
        </div>
        <div className="modal__button">
          <PrimaryButton text={"Share"} />
        </div>
        <ShareButton />
      </Modal.Footer>
    </Modal>
  );
}

export default ReportCardModal;
