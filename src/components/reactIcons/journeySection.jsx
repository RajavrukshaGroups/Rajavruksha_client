import { useRef } from "react";
import "./journeysection.css";
import AboutIcon from "../../components/assets/planting (1).png";
import ResidentIcon from "../../components/assets/residentialfhfg.png";
import VillaIcon from "../../components/assets/villa.png";
import FadeContent from "../../utils/FadeContent";
import VariableProximity from "../../utils/VariableProximity";

const JourneySection = () => {
  const containerRef = useRef(null);
  return (
    <section className="journey-section">
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <h2 data-aos="fade-right" data-aos-delay="200">
          Your Journey Begins Here
        </h2>
      </FadeContent>
      <p className="intro-text" data-aos="fade-right" data-aos-delay="200">
        We guide you in selecting the best property that aligns with your vision
        and goals. With our extensive knowledge and unwavering commitment, we’ll
        ensure you make an informed decision that paves the way for a thriving
        and prosperous future.
      </p>

      <div className="journey-container">
        <div className="journey-card" data-aos="fade-left" data-aos-delay="200">
          <div className="icon-wrapper">
            <img src={AboutIcon} alt="Managed Farmland Icon" />
          </div>
          <div className="text-wrapper">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <h3>
                <div ref={containerRef} style={{ position: "relative" }}>
                  <VariableProximity
                    label={"Managed Farmland"}
                    className={
                      "variable-proximity-demo variable-proximity-underline underline-text"
                    }
                    fromFontVariationSettings="'wght' 550, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff="linear"
                  />
                </div>
              </h3>
            </FadeContent>
            <p>
              <VariableProximity
                label={
                  "Our expert team orchestrates sustainable, traditional & organic practices, nurturing each unit for maximum yield. Dedication and expertise converge in managing farmland for enduring prosperity."
                }
                className={"variable-proximity-demo"}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </p>
          </div>
        </div>

        <div className="journey-card" data-aos="fade-left" data-aos-delay="350">
          <div className="res-icon">
            <img src={ResidentIcon} alt="Residential Icon" />
          </div>
          <div className="text-wrapper mb-4">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <h3>
                <div ref={containerRef} style={{ position: "relative" }}>
                  <VariableProximity
                    label={"Residential Projects"}
                    className={
                      "variable-proximity-demo variable-proximity-underline underline-text"
                    }
                    fromFontVariationSettings="'wght' 550, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff="linear"
                  />
                </div>
              </h3>
            </FadeContent>
            <p>
              <VariableProximity
                label={
                  "An experienced team dedicated to crafting dream homes, blending expertise and vision for impeccable residential projects that resonate with comfort and luxury."
                }
                className={"variable-proximity-demo"}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </p>
          </div>
        </div>

        <div className="journey-card" data-aos="fade-left" data-aos-delay="500">
          <div className="icon-wrapper">
            <img src={VillaIcon} alt="Row Villa Projects Icon" />
          </div>
          <div className="text-wrapper">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <h3>
                <div ref={containerRef} style={{ position: "relative" }}>
                  <VariableProximity
                    label={"Row Villa Projects"}
                    className={
                      "variable-proximity-demo variable-proximity-underline underline-text"
                    }
                    fromFontVariationSettings="'wght' 550, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff="linear"
                  />
                </div>
              </h3>
            </FadeContent>
            <p>
              <VariableProximity
                label={
                  "Experience the allure of spacious elegance in our Row Villa project, where every residence is a testament to bespoke design,offering a harmonious blend of lavishness, style, and personalized living."
                }
                className={"variable-proximity-demo"}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
