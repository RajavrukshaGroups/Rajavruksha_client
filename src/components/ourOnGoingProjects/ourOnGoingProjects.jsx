// import React from 'react';
import { Link } from "react-router-dom";
import "./ourOnGoingProjects.css";
import bgImg from "../../components/assets/on_going_project_syl.jpg";
// import SylRetreatHomePage from "../../components/assets/Sylan retreat_Banner1.webp";
import SylRetreatHomePage from "../../components/assets/Sylan retreat_Banner1.webp";
import StarBorder from "../../utils/shinyButtons";
import React from "react";
import ShinyText from "../../utils/shinyButtons";
import FadeContent from "../../utils/FadeContent";
import { MovingBorderDemo } from "../MovingBorder/MovingBorderDemo";
const OngoingProjects = () => {
  const disableContextMenu = (e) => {
    e.preventDefault();
  };
  return (
    <div className="projects-container-new">
      <FadeContent
        blur={true}
        duration={600}
        easing="ease-out"
        initialOpacity={0}
      >
        <h1 className="projects-title">Our Ongoing Projects</h1>
      </FadeContent>
      <div className="project-card">
        <div
          className="project-image-container"
          onContextMenu={disableContextMenu}
        >
          <img
            // src="https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // src={bgImg}
            src={SylRetreatHomePage}
            alt="Green farmland under blue sky with white clouds"
            className="project-image"
          />
        </div>
        <div className="project-content">
          <FadeContent
            blur={true}
            duration={900}
            easing="ease-out"
            initialOpacity={0}
          >
            <h2 className="project-subtitle syl-retreat-title">
              Sylvan Retreat
            </h2>
          </FadeContent>
          <p className="project-description">
            Farmland is not just a dream; it's a sound financial investment with
            growing demand in the market.
          </p>
          {/* <Link to="/sylvan-retreat">
                <button className="project-button">Read More</button>
              </Link> */}

          <StarBorder
            as="button"
            className="custom-class"
            color="cyan"
            speed="5s"
          >
            {/* <Link to="/sylvan-retreat">
                <button className="project-button">Read More</button>
              </Link> */}
          </StarBorder>
          <Link to="/sylvan-retreat">
            <button className="project-button">
              <MovingBorderDemo>
                <ShinyText
                  text="Read More"
                  disabled={false}
                  speed={3}
                  className="project-button-wrapper"
                  gradient="linear-gradient(120deg, orange 40%, #ff8c00 50%, #ff8c00 60%)"
                />
              </MovingBorderDemo>
            </button>
          </Link>
          {/* <Link to="/sylvan-retreat">
            <button className="project-button">
                <ShinyText
                  text="Read More"
                  disabled={false}
                  speed={3}
                  className="project-button-wrapper"
                  gradient="linear-gradient(120deg, orange 40%, #ff8c00 50%, #ff8c00 60%)"
                />
              </button>
           
            </Link> */}
        </div>
      </div>
    </div>
  );
};

export default OngoingProjects;
