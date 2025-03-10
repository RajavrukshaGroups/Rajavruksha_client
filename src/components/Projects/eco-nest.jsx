import React from "react";
import Tour from "../../components/tour/index";
import Amenities from "../../components/Amenities/amenities";
import "../../components/Projects/eco-nest.css";
import BlurText from "../../utils/BlurText";
import { ThreeDCardDemo } from "../3d-Cards/ThreeDCardDemo";
import FadeContent from "../../utils/FadeContent";

function EcoNexts() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  const ecoNestAmenities = [
    "30 feet road",
    "Underground Electric connection",
    "Children's park & Garden",
    "Drainage",
    "Tree plantation on both sides of the road",
    "Individual water connection",
    "Entrance Arch",
  ];
  const words =
    " In Coorg embrace, Eco Nest stands tall, Spanning across 2 verdant" +
    " acres, it enthralls. Thirty plots, each 1200 sqft in size they boast, " +
    " KUDA’s nod, ensuring dreams aren’t lost.";
  return (
    <div className="project-details-area pt-4">
      <h1 className="eco-new-title">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          Premium Plot with Glorious Panoramic Views in Coorg
        </FadeContent>
      </h1>
      <div className="container">
        <div className="row">
          <div
            style={{ color: "black" }}
            data-aos="fade-right"
            data-aos-delay="200"
            className="col-12"
          >
            In Coorg embrace, Eco Nest stands tall, Spanning across 2 verdant
            acres, it enthralls. Thirty plots,
            <br />
            each 1200 sqft in size they boast, KUDA’s nod, ensuring dreams
            aren’t lost.
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            style={{ height: "500px" }}
          >
            {/* <Tour /> */}
            <ThreeDCardDemo />
          </div>
          <div
            className="col-lg-4 col-md-12 col-sm-12 syl-amenities eco-amenities"
            style={{ height: "500px" }}
          >
            <Amenities amenities={ecoNestAmenities} projectType="eco-nest" />
          </div>
          <div className="col-12 eco-pro">
            <div className="project-details-top-text" data-aos="fade-up">
              <h3 className="discover-title">
                <BlurText
                  text="Discover Your Agricultural Dream:"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-2xl mb-8"
                />
              </h3>
              <p>
                Approved by the Kodagu Urban Development Authority(KUDA), Eco
                Nest beckons
                <br /> with its serene authority. For Rs.7,49,000/- , a plot’s
                yours to claim, where nature’s symphony forever remains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcoNexts;
