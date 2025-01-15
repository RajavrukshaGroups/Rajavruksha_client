import { useRef } from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AboutImg from "../../components/assets/about-1.e32a7109.webp";
import AboutBgImg from "../../components/assets/about-bg-home-page.png";
import "./style.css";
import FadeContent from "../../utils/FadeContent";
import ShinyText from "../../utils/shinyButtons";
import BlurText from "../../utils/BlurText";
import VariableProximity from "../../utils/VariableProximity";



const About = ({ text, readMore }) => {
  const disableContextMenu = (e) => {
    e.preventDefault();
  };
    const containerRef = useRef(null);
  
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
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

              <div className="site-heading">
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <h2 className="explore-title text-capitalize ">
                  We explore to discover your optimal selection
                </h2>
                </FadeContent>
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
                          <button className="read-more-button">
                            <ShinyText
                              text="Read More"
                              disabled={false}
                              speed={3}
                              className="project-button-wrapper"
                            />
                          </button>
                        )}
                      </Link>

                    {/* <Link to="/about">
                      {!!readMore && (

                        
                        <button className="read-more-button">
                          <ShinyText
                            text="Read More"
                            disabled={false}
                            speed={3}
                            className="project-button-wrapper"
                          />
                        </button>
                      )}
                    </Link> */}
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
                     {/* <VariableProximity
                                              label={"Head Office"}
                                              className={"variable-proximity-demo"}
                                              fromFontVariationSettings="'wght' 400, 'opsz' 9"
                                              toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                              containerRef={containerRef}
                                              radius={100}
                                              falloff="linear"
                                            /> */}
             {/* <BlurText
                  text="Discover Your Agricultural Dream:"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-2xl"
                /> */}
                
                    <h2 ref={containerRef} style={{ position: "relative" }}>
                        <div ref={containerRef} style={{ position: "relative" }}>
                           <VariableProximity
                             label={"Vision"}
                             className={"variable-proximity-demo"}
                             fromFontVariationSettings="'wght' 800, 'opsz' 9"
                             toFontVariationSettings="'wght' 1000, 'opsz' 40"
                             containerRef={containerRef}
                             radius={100}
                             falloff="linear"
                           />
                         </div>
                    </h2>
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
                    <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <h2>
                <div ref={containerRef} style={{ position: "relative" }}>
                           <VariableProximity
                             label={"Mission"}
                             className={"variable-proximity-demo"}
                             fromFontVariationSettings="'wght' 800, 'opsz' 9"
                             toFontVariationSettings="'wght' 1000, 'opsz' 40"
                             containerRef={containerRef}
                             radius={100}
                             falloff="linear"
                           />
                         </div>
                </h2>
              </FadeContent>
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
