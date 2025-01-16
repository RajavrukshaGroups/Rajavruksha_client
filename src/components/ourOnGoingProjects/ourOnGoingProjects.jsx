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
<<<<<<< HEAD
import  Images from "../../components/assets/Sylan retreat_Banner1.webp"
import { ContainerScroll } from "../ui/container-scroll-animation.jsx";

=======
import { MovingBorderDemo } from "../MovingBorder/MovingBorderDemo";
>>>>>>> f7d50c91dbd2a135a5e3b61460dcf0d3b2423ba3
const OngoingProjects = () => {
  const disableContextMenu = (e) => {
    e.preventDefault();
  };
  return (
<<<<<<< HEAD
    <div className="projects-container-new "> 
        {/* <FadeContent
                blur={true}
                duration={600}
                easing="ease-out"
                initialOpacity={0}
              >
      <h1 className="projects-title">Our Ongoing Projects</h1>
              </FadeContent> */}
      {/* <div className="project-card"> */}
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
            {/* <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1> */}
          </>
        }>
        <img
          src={Images}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} />
      </ContainerScroll>
      <FadeContent
                blur={true}
                duration={900}
                easing="ease-out"
                initialOpacity={0}
              >
          <h2 className="project-subtitle syl-retreat-title justify-center m-auto flex">Sylvan Retreat</h2>
=======
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
>>>>>>> f7d50c91dbd2a135a5e3b61460dcf0d3b2423ba3
          </FadeContent>
          <p className="project-description justify-center m-auto flex">
            Farmland is not just a dream; it's a sound financial investment with
            growing demand in the market.
          </p>
<<<<<<< HEAD
    </div> 
        <div className="project-content" >
           <Link to="/sylvan-retreat">
              <button className="project-button">
=======
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
>>>>>>> f7d50c91dbd2a135a5e3b61460dcf0d3b2423ba3
                <ShinyText
                  text="Read More"
                  disabled={false}
                  speed={3}
                  className="project-button-wrapper"
                  gradient="linear-gradient(120deg, orange 40%, #ff8c00 50%, #ff8c00 60%)"
                />
<<<<<<< HEAD
              </button>
            </Link>
=======
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
>>>>>>> f7d50c91dbd2a135a5e3b61460dcf0d3b2423ba3
        </div>
      {/* </div> */}
    </div>
  );
};

export default OngoingProjects;
