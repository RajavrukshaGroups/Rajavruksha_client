import React from "react";
import { Link } from "react-router-dom";
import { VscDebugBreakpointLog } from "react-icons/vsc";

import Img1 from "../../img/project-details.jpg";
import Img2 from "../../img/plan.png";
import Img3 from "../../img/24-hours.png";
import Img4 from "../../img/group.png";
import Img5 from "../../img/best-price.png";
import Img6 from "../../img/bedroom.jpg";
import Img7 from "../../img/hallroom.jpg";
import Img8 from "../../img/kitchen.jpg";
import bg from "../../components/assets/editone.jpg";
import Tour from "../../components/tour/index";
import Amenities from "../../components/Amenities/amenities";
import "../../components/Projects/eco-nest.css";

function EcoNexts() {
  const ecoNestAmenities = [
    "30 feet road",
    "Underground Electric connection",
    "Children's park & Garden",
    "Drainage",
    "Tree plantation on both sides of the road",
    "Individual water connection",
    "Entrance Arch",
  ];
  return (
    <div className="project-details-area pt-4">
      <div className="container">
        <div className="row">
          <div
            style={{ color: "black" }}
            data-aos="fade-right"
            data-aos-delay="200"
            className="col-12"
          >
            {/* <h3>Theme</h3> */}
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
            <Tour />
          </div>
          <div
            className="col-lg-4 col-md-12 col-sm-12 syl-amenities"
            style={{ height: "500px" }}
          >
            <Amenities amenities={ecoNestAmenities} projectType="eco-nest" />
          </div>
          <div className="col-12 eco-pro">
            <div className="project-details-top-text" data-aos="fade-up">
              <h3 className="discover-title">
                Discover Your Agricultural Dream:
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
