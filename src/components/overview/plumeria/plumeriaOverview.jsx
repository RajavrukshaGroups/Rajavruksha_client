import React, { useEffect, useRef } from "react";
import verifiedDoc from "../../../components/assets/verified_doc.png";
import map from "../../../components/assets/location.png";
import nature from "../../../components/assets/nature.png";
import amenity from "../../../components/assets/amenity.png";
import plot_overview from "../../../components/assets/plot_overview.png";
import amenity_overview from "../../../components/assets/amenity_overview.png";
import land_overview from "../../../components/assets/land_overview.png";
import "./plumOverview.css";
import VariableProximity from "../../../utils/VariableProximity";

const PlumeriaOverview = () => {
  const containerRef = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    boxRefs.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => {
      boxRefs.current.forEach((box) => {
        if (box) observer.unobserve(box);
      });
    };
  }, []);

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
      {/* <div className="plumeria-icons-overview">
        {[
          { img: land_overview, label: "2+ Acres" },
          { img: plot_overview, label: "60+ Plots" },
          { img: amenity_overview, label: "10+ Amenities" },
        ].map((item, index) => (
          <div key={index} className="icon-box">
            <img
              src={item.img}
              alt={item.label}
              className="overview-main-icon"
            />
            <p className="icon-label">{item.label}</p>
          </div>
        ))}
      </div> */}

      <div className="overview-container">
        {[
          {
            title: "PICTURESQUE LOCATION",
            text: `Doddaballapura is a serene escape surrounded by lush greenery,
            rolling hills, and fertile farmlands.Its cool climate and scenic
            countryside make it an ideal destination for nature lovers and
            weekend getaways.`,
            icon: nature,
            iconText: "LOCATED AT DODDABALLAPURA",
          },
          {
            title: "CLEAR DOCUMENTATION",
            text: `Our plots come with legally verified and transparent documentation,
            ensuring a hassle-free buying experience.With complete legal
            clarity, you can invest confidently, knowing your land ownership is
            secure and dispute-free.`,
            icon: verifiedDoc,
            iconText: "VERIFIED DOCUMENTS",
          },
          {
            title: "AMENITIES",
            text: `Plumeria offers more than just plots; we provide amenities such as
            CCTV surveillance, parks, a play area, and more.Additionally, the
            well-connected road network ensures seamless travel to major city
            hubs and tourists destinations.`,
            icon: amenity,
            iconText: "AMENITIES",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="overview-box"
            ref={(el) => (boxRefs.current[index] = el)}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="overview-bottom">
              <img src={item.icon} alt="Icon" className="overview-icon" />
              <p className="icon-text">{item.iconText}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlumeriaOverview;
