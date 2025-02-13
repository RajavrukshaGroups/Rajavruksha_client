import React, { useRef } from "react";
import cctv from "../../components/assets/cctv-camera.png";
import park from "../../components/assets/park.png";
import pipeline from "../../components/assets/pipeline.png";
import playground from "../../components/assets/playground.png";
import road from "../../components/assets/road.png";
import streetlight from "../../components/assets/street-light.png";
import sewage from "../../components/assets/sewage.png";
import arch from "../../components/assets/arch.png";
import electricity from "../../components/assets/und-electricity.png";
import "./plumeriaAmenities.css"; // Import the CSS file
import VariableProximity from "../../utils/VariableProximity";

const PlumeriaAmenities = () => {
  const containerRef = useRef(null);

  const amenities = [
    { icon: pipeline, text: "Individual Water Connection" },
    { icon: cctv, text: "CCTV Surveillance" },
    { icon: road, text: "A Wide Black Top Road" },
    { icon: playground, text: "Play Area" },
    { icon: park, text: "Park" },
    { icon: streetlight, text: "Street Light" },
    { icon: sewage, text: "Sewage Line" },
    { icon: arch, text: "Arch" },
    { icon: electricity, text: "Underground Electricity" },
  ];

  return (
    <div className="amenities-container">
      <h1 className="amenities-headline">
        <div ref={containerRef} style={{ position: "relative" }}>
          <VariableProximity
            label={"Amenities"}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 800, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
      </h1>
      <div className="amenities-grid">
        {amenities.map((amenity, index) => (
          <div key={index} className="amenity-card">
            <img
              src={amenity.icon}
              alt={amenity.text}
              className="amenity-icon"
            />
            <p className="amenity-text">{amenity.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlumeriaAmenities;
