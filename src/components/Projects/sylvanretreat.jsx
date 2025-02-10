import React, { useRef } from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import "../../components/Projects/sylvanStlyle.css";
import Tour from "../../components/tour/index";
import Amenities from "../../components/Amenities/amenities";
import planting_syl from "../../components/assets/planting_syl.png";
import investment_potential from "../../components/assets/earning_syl.png";
import planet_earth from "../../components/assets/planet-earth_syl.png";
import compliance from "../../components/assets/compliance_syl.png";
import VariableProximity from "../../utils/VariableProximity";
import BlurText from "../../utils/BlurText";

function Sylvanretreat() {
  const containerRef = useRef(null);
  const sylvanAmenities = [
    "Water Supply",
    "Electricity",
    "Fencing and Security",
    "Paver road",
    "Individual water connection",
    "Children's park & Garden",
  ];

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="project-details-area pt-4">
      <div className="container">
        <div className="row">
          <div
            style={{ color: "black"}}
            data-aos="fade-right"
            data-aos-delay="200"
            className="col-12"
          >
            The theme of Sylvan Retreat is to create a harmonious and immersive
            living experience that seamlessly <br />
            integrates with the natural surroundings. Envisioned as a sanctuary
            away from the hustle and bustle of <br />
            urban life, the project aims to celebrate the beauty of nature.
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 yt-video">
          <iframe
                className="yt-iframe"
                width="600"
                height="460"
                src="https://www.youtube.com/embed/xz14d8sd7Nc?autoplay=1&loop=1&playlist=xz14d8sd7Nc&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                >
              </iframe>
            {/* <Tour /> */}
          </div>
          <div
            className="col-lg-4 col-md-12 col-sm-12 syl-amenities"
            style={{ height: "500px" }}
          >
            <Amenities
              amenities={sylvanAmenities}
              projectType={"sylvan-retreat"}
            />
          </div>
          <div className="col-12 mt-1 syl-desc-new">
            <div className="project-details-top-text" data-aos="fade-up">
              <p className="syl-title">
                <BlurText
                  text="Discover Your Agricultural Dream:"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-2xl"
                />
              </p>
              <p>
                Escape the hustle and bustle of city life and embark on a
                journey to a tranquil and fertile oasis. Introducing our
                exclusive collection of 25 farmland plots, each a canvas of
                opportunity for you to cultivate your agricultural aspirations.
              </p>
              <p className="syl-title">
                <BlurText
                  text="Agricultural Canvas Ready for Your Vision:"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-2xl"
                />
              </p>
              <p>
                These 25 farmland plots offer an invitation to realize your
                agricultural dreams. Whether you dream of orchards, Apiculture,
                Organic farms, or a combination of them all, these plots are the
                ideal blank canvas to bring your vision to life. Let your
                imagination run wild and watch your agricultural dreams
                flourish.
              </p>
              <p style={{ fontWeight: "bold" }} className="syl-title">
                <BlurText
                  text="Key Features:"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-2xl"
                />
              </p>

              <p style={{ display: "flex" }}>
                <span>
                  <VscDebugBreakpointLog
                    style={{ width: "20px", height: "29px" }}
                  />
                </span>{" "}
                <span>
                  <b className="syl-title">Rich Soil and Fertile Land:</b>
                  Our farmland is renowned for its rich and fertile soil,
                  providing the ideal foundation for a thriving agricultural
                  venture.
                </span>
              </p>
              <p style={{ display: "flex" }}>
                <span>
                  <VscDebugBreakpointLog
                    style={{ width: "20px", height: "29px" }}
                  />
                </span>{" "}
                <span>
                  <b className="syl-title">Scenic Views:</b>
                  Enjoy breathtaking vistas of rolling hills and serene
                  landscapes that will inspire and soothe your soul.
                </span>
              </p>
              <p style={{ display: "flex" }}>
                <span>
                  <VscDebugBreakpointLog
                    style={{ width: "20px", height: "29px" }}
                  />
                </span>{" "}
                <span>
                  <b className="syl-title">Water Resources:</b>
                  Abundant access to natural water sources, ensuring your crops
                  will flourish year-round.
                </span>
              </p>
              <p style={{ display: "flex" }}>
                <span>
                  <VscDebugBreakpointLog
                    style={{ width: "20px", height: "29px" }}
                  />
                </span>{" "}
                <span>
                  <b className="syl-title">Security:</b>
                  We prioritize your investment's safety, providing 24/7
                  security to protect your agricultural pursuits.
                </span>
              </p>
            </div>
            <h2 style={{ textAlign: "center" }} className="syl-title">
              <BlurText
                text="Why Choose Us"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-1xl mb-1"
                project="syl-retreat"
              />
            </h2>

            <div className="project-overview">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="project-overview-box">
                    <img
                      src={planting_syl}
                      alt="Expertise in Agriculture"
                      className="syl-img"
                    />
                    <h5 className="syl-subtitle">
                      <div ref={containerRef} style={{ position: "relative" }}>
                        <VariableProximity
                          label={"Expertise in Agriculture"}
                          className={"variable-proximity-demo"}
                          fromFontVariationSettings="'wght' 600, 'opsz' 9"
                          toFontVariationSettings="'wght' 1000, 'opsz' 40"
                          containerRef={containerRef}
                          radius={100}
                          falloff="linear"
                        />
                      </div>
                    </h5>

                    <p>
                      Our team of agricultural experts is ready to assist and
                      advise you in every step of your farming journey.
                    </p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="project-overview-box">
                    <img
                      src={investment_potential}
                      alt="Project time"
                      className="syl-img"
                    />
                    <h5 className="syl-subtitle">
                      <div ref={containerRef} style={{ position: "relative" }}>
                        <VariableProximity
                          label={"Investment Potential"}
                          className={"variable-proximity-demo"}
                          fromFontVariationSettings="'wght' 600, 'opsz' 9"
                          toFontVariationSettings="'wght' 1000, 'opsz' 40"
                          containerRef={containerRef}
                          radius={100}
                          falloff="linear"
                        />
                      </div>
                    </h5>
                    <p>
                      Farmland is not just a dream; it's a sound financial
                      investment with growing demand in the market.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="project-overview-box">
                    <img
                      src={planet_earth}
                      alt="People worked"
                      className="syl-img"
                    />
                    <h5 className="syl-subtitle">
                      <div ref={containerRef} style={{ position: "relative" }}>
                        <VariableProximity
                          label={"Sustainability"}
                          className={"variable-proximity-demo"}
                          fromFontVariationSettings="'wght' 600, 'opsz' 9"
                          toFontVariationSettings="'wght' 1000, 'opsz' 40"
                          containerRef={containerRef}
                          radius={100}
                          falloff="linear"
                        />
                      </div>
                    </h5>
                    <p>
                      We're committed to sustainable farming practices and
                      environmental conservation.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="project-overview-box">
                    <img
                      src={compliance}
                      alt="Project cost"
                      className="syl-img"
                    />
                    <h5 className="syl-subtitle">
                      <div ref={containerRef} style={{ position: "relative" }}>
                        <VariableProximity
                          label={"Legal Compliance"}
                          className={"variable-proximity-demo"}
                          fromFontVariationSettings="'wght' 600, 'opsz' 9"
                          toFontVariationSettings="'wght' 1000, 'opsz' 40"
                          containerRef={containerRef}
                          radius={100}
                          falloff="linear"
                        />
                      </div>
                    </h5>
                    <p>
                      Hassel free process in terms of your documentations that
                      carries from our experts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sylvanretreat;
