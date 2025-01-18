import { Link } from "react-router-dom";
import "./ourOnGoingProjects.css";
import React from "react";
import ShinyText from "../../utils/shinyButtons";
import FadeContent from "../../utils/FadeContent";
import Images from "../../components/assets/Sylan retreat_Banner1.webp";
import { ContainerScroll } from "../ui/container-scroll-animation.jsx";
import { MovingBorderDemo } from "../MovingBorder/MovingBorderDemo";

const OngoingProjects = () => {
  return (
    <div className="projects-container-new -mt-40 responsive">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <FadeContent
                blur={true}
                duration={600}
                easing="ease-out"
                initialOpacity={0}
              >
                <h1 className="projects-title">Our Ongoing Projects</h1>
              </FadeContent>
            </>
          }
        >
          <img
            src={Images}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
        <FadeContent
          blur={true}
          duration={900}
          easing="ease-out"
          initialOpacity={0}
        >
          <h2 className="project-subtitle syl-retreat-title justify-center m-auto flex">
            Sylvan Retreat
          </h2>
        </FadeContent>
        <p className="project-description justify-center m-auto flex mt-3">
          Farmland is not just a dream; it's a sound financial investment with
          growing demand in the market.
        </p>
      </div>
      <div className="project-content mt-3">
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
      </div>
    </div>
  );
};

export default OngoingProjects;
