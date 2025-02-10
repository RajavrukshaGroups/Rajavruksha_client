import React from "react";
import AboutIcon from "../../components/assets/planting (1).png";
import ResidentIcon from "../../components/assets/residentialfhfg.png";
import VillaIcon from "../../components/assets/villa.png";
import "./style.css";

const Feature = () => {
  return (
    <div className="about-page-area">
      <div className="container">
        <div className="row"></div>
        <div className="row align-items-center ">
          <div className="col-md-6">
            <div className="about-left">
              <div
                className="single-about-listing"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="about-icon">
                  <img src={AboutIcon} alt="icon" />
                </div>
                <div className="about-text">
                  <h3>Managed Farmlandsss</h3>
                  <p>
                    Our expert team employs sustainable, traditional, and
                    organic practices to nurture each unit for optimal yield,
                  </p>
                </div>
              </div>
              <div
                className="single-about-listing wow fadeInUp"
                data-aos="fade-right"
                data-aos-delay="350"
              >
                <div className="about-icon">
                  <img src={ResidentIcon} alt="icon" />
                </div>
                <div className="about-text">
                  <h3>Residential Projects</h3>
                  <p>
                    An experienced team dedicated to crafting dream
                    homesblending expertise and vision for impeccable projects
                  </p>
                </div>
              </div>
              <div
                className="single-about-listing wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
                data-aos="fade-right"
                data-aos-delay="550"
              >
                <div className="about-icon">
                  <img src={VillaIcon} alt="icon" />
                </div>
                <div className="about-text">
                  <h3>Row Villa Projects</h3>
                  <p>
                    Experience the allure of spacious elegance in our Row Villa
                    project, where every residence is a testament
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-right" data-aos-delay="200">
            <div className="about-right">
              <div className="single-about-image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
