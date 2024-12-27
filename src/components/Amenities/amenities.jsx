import React from "react";
import "./amenities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AmenitiesCard = ({ amenities, projectType }) => {
  const cardHeight =
    projectType === "eco-nest"
      ? "520px"
      : projectType === "sylvan-retreat"
      ? "465px"
      : "500px";
  return (
    <section
      data-aos="fade-left"
      className="amenities-card mt-5"
      style={{ height: cardHeight }}
    >
      <div className="card-header" style={{ borderRadius: "30px" }}>
        Amenities
      </div>
      <ul className="amenities-list">
        {amenities.map((amenity, index) => (
          <React.Fragment key={index}>
            <li>
              <FontAwesomeIcon
                className="arrowright-icon"
                icon={faArrowRight}
              />{" "}
              {amenity}
            </li>
            {index < amenities.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export default AmenitiesCard;
