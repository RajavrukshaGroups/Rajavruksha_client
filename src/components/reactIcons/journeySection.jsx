import React from "react";
import "./journeysection.css";
import AboutIcon from "../../components/assets/planting (1).png";
import ResidentIcon from "../../components/assets/residentialfhfg.png";
import VillaIcon from "../../components/assets/villa.png";

const JourneySection = () => {
  return (
    <section className="journey-section">
      <h2 data-aos="fade-right" data-aos-delay="200">
        Your Journey Begins Here
      </h2>
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
            <h3>Managed Farmland</h3>
            <p>
              Our expert team orchestrates sustainable, traditional & organic
              practices, nurturing each unit for maximum yield. Dedication and
              expertise converge in managing farmland for enduring prosperity.
            </p>
          </div>
        </div>

        <div className="journey-card" data-aos="fade-left" data-aos-delay="350">
          <div className="res-icon">
            <img src={ResidentIcon} alt="Residential Icon" />
          </div>
          <div className="text-wrapper mb-4">
            <h3>Residential Projects</h3>
            <p>
              An experienced team dedicated to crafting dream homes, blending
              expertise and vision for impeccable residential projects that
              resonate with comfort and luxury.
            </p>
          </div>
        </div>

        <div className="journey-card" data-aos="fade-left" data-aos-delay="500">
          <div className="icon-wrapper">
            <img src={VillaIcon} alt="Row Villa Projects Icon" />
          </div>
          <div className="text-wrapper">
            <h3>Row Villa Projects</h3>
            <p>
              Experience the allure of spacious elegance in our Row Villa
              project, where every residence is a testament to bespoke design,
              offering a harmonious blend of lavishness, style, and personalized
              living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
