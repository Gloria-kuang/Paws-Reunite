import React from "react";
import "./ReportCardModal.scss";
import Modal from "react-bootstrap/Modal";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function ReportCardModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <PrimaryButton onClick={props.onHide}>Close</PrimaryButton>
      </Modal.Footer>
    </Modal>
  );
}

export default ReportCardModal;
