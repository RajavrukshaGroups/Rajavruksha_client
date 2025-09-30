import { Link } from "react-router-dom";
import "./ourOnGoingProjects.css";
import React from "react";
import ShinyText from "../../utils/shinyButtons";
import FadeContent from "../../utils/FadeContent";
import SylImg from "../../components/assets/Sylan retreat_Banner1.webp";
import PlumeriaImg from "../../components/assets/plumeria_2.webp";
import { MovingBorderDemo } from "../MovingBorder/MovingBorderDemo";
import { ContainerScroll } from "../ui/container-scroll-animation";
import DHSprojects from "../../components/assets/dhs_projectsimg.jpg";

const OngoingProjects = () => {
  return (
    <div className="projects-container-new -mt-40 responsive">
      <div className="flex flex-col overflow-hidden animate-threeD-container">
        <h1 className="projects-title">Our Ongoing Projects</h1>
      </div>
      <div className="projects-wrapper">
        <div className="project-card">
          {/* <div className="project-image-container">
            <img src={SylImg} alt="Sylvan Retreat" className="project-image" />
          </div> */}
          <div className="flex flex-col overflow-hidden">
            <ContainerScroll
              titleComponent={
                <>
                  {/* <h1 className="project-subtitle text-4xl font-semibold text-black dark:text-white">
                    Sylvan Retreat
                  </h1> */}
                </>
              }
            >
              <img
                src={SylImg}
                alt="hero"
                height={600}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ContainerScroll>
          </div>
          <div className="projects-content">
            <FadeContent
              blur={true}
              duration={900}
              easing="ease-out"
              initialOpacity={0}
            >
              <h2 className="project-subtitle syl-retreat-title">Sylvan Retreat</h2>
            </FadeContent>
            <p className="project-description">
              Farmland is not just a dream; it's a sound financial investment
              with growing demand in the market.
            </p>
            <Link to="/sylvan-retreat">
              <button className="project-button">
                <MovingBorderDemo>
                  <ShinyText text="Read More" disabled={false} speed={3} />
                </MovingBorderDemo>
              </button>
            </Link>
          </div>
        </div>

        <div className="project-card">
          {/* <div className="project-image-container">
            <img src={PlumeriaImg} alt="Plumeria" className="project-image" />
          </div> */}
          <div className="flex flex-col overflow-hidden">
            <ContainerScroll
              titleComponent={
                <>
                  {/* <h1 className="project-subtitle text-4xl font-semibold text-black dark:text-white">
                    Sylvan Retreat
                  </h1> */}
                </>
              }
            >
              <img
                src={PlumeriaImg}
                alt="hero"
                height={600}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ContainerScroll>
          </div>
          <div className="projects-content">
            <FadeContent
              blur={true}
              duration={900}
              easing="ease-out"
              initialOpacity={0}
            >
              <h2 className="project-subtitle">Aarike</h2>
            </FadeContent>
            <p className="project-description">
              An exclusive premium residential project designed for peaceful living with
              modern amenities.
            </p>
            <Link to="/plumeria">
              <button className="project-button">
                <MovingBorderDemo>
                  <ShinyText text="Read More" disabled={false} speed={3} />
                </MovingBorderDemo>
              </button>
            </Link>
          </div>
        </div>
         <div className="project-card">
          {/* <div className="project-image-container">
            <img src={PlumeriaImg} alt="Plumeria" className="project-image" />
          </div> */}
          <div className="flex flex-col overflow-hidden">
            <ContainerScroll
              titleComponent={
                <>
                  {/* <h1 className="project-subtitle text-4xl font-semibold text-black dark:text-white">
                    Sylvan Retreat
                  </h1> */}
                </>
              }
            >
              <img
                src={DHSprojects}
                alt="hero"
                height={600}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ContainerScroll>
          </div>
          <div className="projects-content">
            <FadeContent
              blur={true}
              duration={900}
              easing="ease-out"
              initialOpacity={0}
            >
              <h2 className="project-subtitle">DHS Projects</h2>
            </FadeContent>
            <p className="project-description">
             Defence Habitat makes your real estate dreams a reality with trusted experience and services tailored to your needs.
            </p>
            <Link to="/plumeria">
              <button className="project-button">
                <MovingBorderDemo>
                  <ShinyText text="Read More" disabled={false} speed={3} />
                </MovingBorderDemo>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingProjects;
