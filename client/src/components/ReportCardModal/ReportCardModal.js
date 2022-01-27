import React from "react";
import "./ReportCardModal.scss";
import Modal from "react-bootstrap/Modal";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Tag from "../Tag/Tag";
import testImg from "../../assets/image/circle-pet1-min.jpg";
import AlternateButton from "../AlternateButton/AlternateButton";

function ReportCardModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="modal__header"
        >
          Lost Pet Report
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal__container">
        <div className="modal__report">
          <div className="modal__first-line">
            <h4 className="modal__name">
              <strong>"Duncun" </strong> <small>Male Dog</small>
            </h4>
            <Tag text={"Lost"}></Tag>
          </div>
          <p>
            <strong>Lost Date :</strong> 2022-01-22
          </p>
          <p>
            <strong>Last Seen Address :</strong> 144 Memon Place, Markham, ON
          </p>
          <p>
            <strong>Description :</strong> 5 years old male Corgi named Duncun
            was lost. Was wearing a black collar and no chip. He's super
            friendly to people.
          </p>
        </div>
        <img src={testImg} alt="dog" className="modal__image"></img>
      </Modal.Body>
      <Modal.Footer className="modal__footer">
        <div className="modal__button">
          {/* <SecondaryButton text={"Contact"} /> */}
          <AlternateButton text={"Contact"} />
        </div>
        <div className="modal__button">
          <PrimaryButton text={"Share"} />
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ReportCardModal;
