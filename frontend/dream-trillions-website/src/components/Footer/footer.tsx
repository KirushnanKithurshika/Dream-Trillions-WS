import React from "react";
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-col">

          <h2 className="footer-logo">Dream Trillions</h2>

          <p className="footer-text">
            Dream Trillions develops modern technology solutions including
            AI systems, cloud platforms, web & mobile applications, and
            renewable energy technologies that help businesses grow
            efficiently in the digital era.
          </p>

          <div className="footer-social">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>Software & Web Applications</li>
            <li>Mobile App Development</li>
            <li>Artificial Intelligence</li>
            <li>Cloud Infrastructure</li>
            <li>Renewable Energy Systems</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>

          <div className="footer-contact">
            <p><FontAwesomeIcon icon={faLocationDot} /> Sri Lanka</p>
            <p><FontAwesomeIcon icon={faPhone} /> +94 713339201</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> info@dreamtrillions.com</p>
          </div>
        </div>

      </div>


      {/* SCROLL TOP BUTTON */}
      <div className="footer-scroll-top" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>


      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dream Trillions (Pvt) Ltd. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;