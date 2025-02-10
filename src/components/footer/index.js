import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Footer = () => {
  const handleLinkClick = (type, value) => {
    if (type === "email") {
      window.location.href = `mailto:${value}`;
    } else if (type === "phone") {
      window.location.href = `tel:${value}`;
    } else if (type === "map") {
      const googleMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
        value
      )}`;
      window.open(googleMapUrl, "_blank");
    }
  };
  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 order-lg-1 order-1">
              <div className="single-footer">
                <p id="footer-head">About</p>
                <p>
                  We guide you in selecting the best property
                  <br />
                  that aligns with your vision and goals
                </p>
                <div className="single-footer connect">
                  <p id="footer-connect">Connect With Us</p>
                  <div className="wrapper-footer">
                    <a
                      href="https://www.facebook.com/RajavruskhaRealtors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-ico" id="facebook">
                        <i className="fab fa-facebook social facebook fa-3x"></i>
                      </div>
                    </a>

                    <a
                      href="https://www.instagram.com/rajavruksha_realtors/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-ico" id="instagram">
                        <i className="fab fa-instagram social instagram fa-3x"></i>
                      </div>
                    </a>

                    <a
                      href="https://x.com/Rajavrukshagrps"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-ico" id="twitter">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                          alt="X Logo"
                          className="social x-logo"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.youtube.com/@Rajavruksha_Realtors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-ico" id="youtube">
                        <i className="fab fa-youtube social youtube fa-3x"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 order-lg-2 order-3">
              <div className="single-footer quick-link">
                <p id="footer-head">Quick Links</p>
                <ul className="footer_carousel unordered-list">
                  <li className="unorderedlistlink">
                    <Link className="unorderedlistlink" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects">Our Projects</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link to="/privacyPolicy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 order-lg-3 order-4">
              <div className="single-footer">
                <p id="footer-head">Office Timings</p>
                <ul>
                  <li>
                    <p>Wednesday to Monday</p>
                  </li>
                  <li>
                    <p>09:30 am : 06:30 pm</p>
                  </li>
                  <li>
                    <p style={{ color: "white" }}>Weekly Off : Tuesday</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-lg-4 order-2">
              <ul className="footer-contact">
                <p id="footer-head">Contact Details</p>
                <li
                  onClick={() => handleLinkClick("phone", "+91 8549 955 955")}
                  className="contact-link"
                >
                  <i className="fas fa-phone-square-alt" /> +91 8549 955 955
                </li>
                <li
                  onClick={() =>
                    handleLinkClick("email", "enquiry@rajavrukshagroup.in")
                  }
                  className="contact-link"
                  style={{ marginTop: "10px" }}
                >
                  <i className="fas fa-envelope" /> enquiry@rajavrukshagroup.in
                </li>
                <li
                  onClick={() => {
                    handleLinkClick("map", "Rajavruksha Groups");
                  }}
                  className="contact-link"
                  style={{ marginTop: "14px" }}
                >
                  <i className="fas fa-map" /> #35 A, Kowdi, 2nd Floor, 1st Main
                  Road, Chiranjeevi Layout, Hebbal Kempapura, Bengaluru-560024
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fade_rule" />
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="foote-copyright">
                &copy; Copyright © 2024 Rajavruksha. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
