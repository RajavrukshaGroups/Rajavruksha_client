import React, { useState, useEffect } from "react";
import FadeContent from "../../utils/FadeContent";
import Plumeria_logo from "../../components/assets/Plumeria_new_logo.png";
import plumeria_kannada_logo from "../../components/assets/Plumeria_Kannada_Logo.png";
import Sylvan_logo from "../../components/assets/Sylvan-official-logo.png";
import sylvan_kannada_logo from "../../components/assets/Sylvan_Retreat_Kannada_Logo.png";
import Econest_logo from "../../components/assets/Econest-official-logo.png";
import econest_kannada_logo from "../../components/assets/EcoNest_Kannada_Logo.png";
import "./style.css";

const PageTitle = (props) => {
  const [currentImage, setCurrentImage] = useState(
    props.bgImg1 || props.pageImg
  ); // Fallback to pageImg if bgImg1 is missing
  const [showKannadaLogo, setShowKannadaLogo] = useState(false);

  useEffect(() => {
    if (
      props.PageTitle === "Plumeria" ||
      props.PageTitle === "Sylvan-Retreat" ||
      props.PageTitle === "Eco-nest"
    ) {
      const interval = setInterval(() => {
        setShowKannadaLogo((prev) => !prev);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [props.PageTitle]);
  // Function to handle image switching
  const handleImageChange = (direction) => {
    if (direction === "next") {
      setCurrentImage(
        currentImage === props.bgImg1 ? props.bgImg2 : props.bgImg1
      );
    } else if (direction === "prev") {
      setCurrentImage(
        currentImage === props.bgImg1 ? props.bgImg2 : props.bgImg1
      );
    }
  };

  return (
    <section
      className={props?.title ? "breadcrumb-new" : "breadcrumb-area"}
      style={{
        backgroundImage: `url(${currentImage})`,
        position: "relative",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
      }}
    >
      {/* Render buttons only if both bgImg1 and bgImg2 exist */}
      {props.bgImg1 && props.bgImg2 && (
        <>
          <button
            className="arrow-button left-arrow"
            onClick={() => handleImageChange("prev")}
          >
            &larr;
          </button>

          <button
            className="arrow-button right-arrow"
            onClick={() => handleImageChange("next")}
          >
            &rarr;
          </button>
        </>
      )}

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inn">
              {props.PageTitle === "Plumeria" ? (
                <div className="plum-img-text logo-container">
                  <img
                    src={
                      showKannadaLogo ? plumeria_kannada_logo : Plumeria_logo
                    }
                    alt="Plumeria"
                    className="logo-img"
                  />
                </div>
              ) : props.PageTitle === "Sylvan-Retreat" ? (
                <div className="sylvan-img-text logo-container">
                  <img
                    src={showKannadaLogo ? sylvan_kannada_logo : Sylvan_logo}
                    alt="Sylvan Retreat"
                    className="logo-img"
                  />
                </div>
              ) : props.PageTitle === "Eco-nest" ? (
                <div className="econest-img-text logo-container">
                  <img
                    src={showKannadaLogo ? econest_kannada_logo : Econest_logo}
                    alt="Eco-Nest"
                    className="logo-img"
                  />
                </div>
              ) : (
                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                >
                  <h1>{props.PageTitle}</h1>
                </FadeContent>
              )}

              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <h2 className="subtitle text-capitalize">
                  {props?.subtitle && props?.subtitle}
                </h2>
                <h2 className="subtitle">
                  {props?.intSubtitle && props?.intSubtitle}
                </h2>
                {/* <h2 className="subtitle plumeria-sub">
                  {props?.plumeriaSub && props?.plumeriaSub}
                </h2> */}
              </FadeContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
