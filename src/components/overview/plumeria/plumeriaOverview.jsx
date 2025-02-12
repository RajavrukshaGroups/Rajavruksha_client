import React, { useRef } from "react";
import verifiedDoc from "../../../components/assets/verified_doc.png";
import map from "../../../components/assets/location.png";
import nature from "../../../components/assets/nature.png";
import amenity from "../../../components/assets/amenity.png";
import "./plumOverview.css";
import VariableProximity from "../../../utils/VariableProximity";

const PlumeriaOverview = () => {
  const containerRef = useRef(null);

  return (
    <section className="plumeria-overview">
      <h1 className="plumeria-title">
        <div ref={containerRef} style={{ position: "relative" }}>
          <VariableProximity
            label={"Project Overview"}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 800, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
      </h1>
      <div className="overview-container">
        <div className="overview-box">
          <h3>PICTURESQUE LOCATION</h3>
          <p>
            Doddaballapur is a serene escape surrounded by lush greenery,
            rolling hills, and fertile farmlands.Its cool climate and scenic
            countryside make it an ideal destination for nature lovers and
            weekend getaways.
          </p>
          <div className="overview-bottom">
            <img src={nature} alt="Nature Icon" className="overview-icon" />
            <p className="icon-text location-plum">LOCATED AT DODDABALLAPURA</p>
          </div>
        </div>

        <div className="overview-box">
          <h3>CLEAR DOCUMENTATION</h3>
          <p>
            Our plots come with legally verified and transparent documentation,
            ensuring a hassle-free buying experience.With complete legal
            clarity, you can invest confidently, knowing your land ownership is
            secure and dispute-free.
          </p>
          <div className="overview-bottom">
            <img
              src={verifiedDoc}
              alt="Verified Documents"
              className="overview-icon"
            />
            <p className="icon-text">VERIFIED DOCUMENTS</p>
          </div>
        </div>

        <div className="overview-box">
          <h3>AMENITIES</h3>
          <p>
            {" "}
            Plumeria offers more than just plots; we provide amenities such as
            CCTV surveillance, parks, a play area, and more.Additionally, the
            well-connected road network ensures seamless travel to major city
            hubs and tourists destinations.
          </p>
          <div className="overview-bottom">
            <img src={amenity} alt="Map Icon" className="overview-icon" />
            <p className="icon-text">AMENITIES</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumeriaOverview;
