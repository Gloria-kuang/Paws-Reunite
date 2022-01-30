import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./SubmitedModal.scss";
import Modal from "react-bootstrap/Modal";

function SubmitedModal({ show, onHide }) {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4 className="modal__text">
          Your report has been successfully submitted!
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/search-pet" className="modal__link">
          <PrimaryButton text={"View"} />
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default SubmitedModal;
