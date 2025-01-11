import React from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AboutImg from "../../components/assets/about-1.e32a7109.webp";
import AboutBgImg from "../../components/assets/about-bg-home-page.png";
import "./style.css";
import SplitText from "../../utils/blurText";


const About = ({ text, readMore }) => {
  const disableContextMenu = (e) => {
    e.preventDefault();
  };
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <div
      className="about-area"
      style={{
        userSelect: "none",
        backgroundImage: `url(${AboutBgImg})`,
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
                  {/* <SplitText
                 text="We explore to discover your optimal selection"
                 className="text-1xl font-semibold text-center"
                 delay={130}
                 animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)' }}
                 animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                 easing="easeOutCubic"
                 threshold={0.2}
                 rootMargin="-50px"
                 onLetterAnimationComplete={handleAnimationComplete}
               /> */}
              <SplitText
                  text="We explore to discover your optimal selection"
                  className="text-1xl font-semibold text-center"
                  delay={130} // Adjust the delay between animations
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  easing="easeOutCubic" // Smooth transition effect
                  threshold={0.2} // Trigger the animation when 20% of the element is visible
                  rootMargin="-50px" // Offset for triggering animations
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              <div className="site-heading">
                {/* <h2 className="explore-title text-capitalize">
                  We explore to discover your optimal selection
                </h2> */}
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
                      <CountUp start={0} end={6} duration={2} /> +
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
              onContextMenu={disableContextMenu}
            >
              <img className="about_img_2" src={AboutImg} alt="img" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="about-left"
                data-aos="fade-right"
                data-aos-offset="100"
              >
                {!readMore && (
                  <div className="vision">
                    <h2>Vision</h2>
                    <p>
                      To be the premier agency for sustainable and profitable
                      farm land investments, shaping the future of agriculture.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-left"
                data-aos="fade-left"
                data-aos-offset="100"
              >
                {!readMore && (
                  <div className="mission">
                    <h2>Mission</h2>
                    <p>
                      We provide expert real estate services, guiding clients in
                      acquiring, selling, and investing in farm land with a
                      focus on sustainability and long-term growth.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
