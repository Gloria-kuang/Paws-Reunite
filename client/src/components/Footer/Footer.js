import React from "react";
import "./Footer.scss";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h3 className="footer__header">Paws Reunite</h3>
        <p className="footer__text">About Us</p>
        <p className="footer__text">How It Works</p>
      </div>
      <div className="footer__content">
        <h3 className="footer__header">Our Partners</h3>
        <p className="footer__text">Pets Community</p>
        <p className="footer__text">Pets Adoption</p>
      </div>
      <div className="footer__content">
        <h3 className="footer__header">Follow Us</h3>
        <BsFacebook size={40} className="footer__icons" />
        <AiFillTwitterCircle size={40} className="footer__icons" />
        <BsInstagram size={40} className="footer__icons" />
      </div>
    </footer>
  );
}

export default Footer;
