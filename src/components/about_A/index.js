import React from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./style.css";
import AboutImg from "../../components/assets/about-1.e32a7109.webp";

const About = ({ text, readMore }) => {
  return (
    <div
      className="about-area"
      style={{
        backgroundImage: `url(${"https://byasi-react.themescare.com/static/media/about-bg.bedc79f5.png"})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div
              className="about-left"
              data-aos="fade-right"
              data-aos-offset="100"
            >
              <div className="site-heading">
                <h2 className="explore-title text-capitalize ">
                  We explore to discover your optimal selection
                </h2>
                <div>
                  <p>{text}</p>
                </div>
              </div>

              <div
                className="content"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="features-list-wrapper">
                  <ul className="features-list">
                    <li>
                      <FontAwesomeIcon
                        className="check-icon"
                        icon={faCircleCheck}
                      />{" "}
                      Innovative Concepts
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="check-icon"
                        icon={faCircleCheck}
                      />
                      Value For Money Projects
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="check-icon"
                        icon={faCircleCheck}
                      />{" "}
                      Expert Team Members
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="check-icon"
                        icon={faCircleCheck}
                      />{" "}
                      Affordable Quality Services
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="check-icon"
                        icon={faCircleCheck}
                      />{" "}
                      Hassle Free Process
                    </li>
                  </ul>
                  <div className="mobile-read-more-wrapper">
                    <Link to="/about">
                      {!!readMore && (
                        <button className="read-more-button">READ MORE</button>
                      )}
                    </Link>
                  </div>
                </div>
                <div className="experience-box">
                  <h2 className="experience-years">
                    <span className="counter">
                      <CountUp start={0} end={6} duration={2} />+
                    </span>
                  </h2>
                  <p className="experience-text">
                    Years of <br /> experience
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-6">
            <div className="about-counter"></div>
            <div
              className="about-right"
              data-aos="fade-left"
              data-aos-offset="100"
            >
              <img className="about_img_2" src={AboutImg} alt="img" />
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div
              className="about-left"
              data-aos="fade-right"
              data-aos-offset="100"
            >
              {!readMore && (
                <div className="vision">
                  <h2>Vision</h2>
                  <p>
                    To be the premier agency for sustainable and profitable farm
                    land investments, shaping the future of agriculture
                  </p>
                </div>
              )}
              {!readMore && (
                <div className="mission">
                  <h2>Mission</h2>
                  <p>
                    We provide expert real estate services, guiding clients in
                    acquiring, selling, and investing in farm land with a focus
                    on sustainability and long-term growth.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
