import React from "react";
import { Link } from "react-router-dom";

import serviceImg1 from "../../img/service-bg-1.png";
import serviceImg2 from "../../img/service-bg-2.jpg";
import serviceImg3 from "../../components/assets/demo.jpg";
import serviceIcon1 from "../../img/service-icon-1.png";
import serviceIcon2 from "../../img/service-icon-2.png";
import serviceIcon3 from "../../img/service-icon-3.png";
import targetIcon from "../../components/assets/focus (1).png";
import identification from "../../components/assets/document.png";
import residential from "../../components/assets/residential.png";
import villaIcon from "../../components/assets/villa.png";
import Check from "../../components/assets/check (1).png";
import Management from "../../components/assets/management (1).png";
import Plant from "../../components/assets/plant-1-new.png";
import FadeContent from "../../utils/FadeContent";

import "./style.css";

const ServiceSection = () => {
  const disableContextMenu = (e) => {
    e.preventDefault();
  };
  return (
    <section className="service-area -mt-10">
      <div
        className="service-area-container"
        // style={{
        //   justifyContent: "center",
        //   alignItems: "center",
        //   margin: "auto",
        //   display: "flex",
        // }}
        onContextMenu={disableContextMenu}
      >
        <span style={{ marginRight: "15px", color: "#c6993e" }}>
          ....................
        </span>{" "}
        <img
          style={{ width: "40px", height: "40px" }}
          // src="https://rajavrukshagroup.in/wp-content/uploads/2023/11/plant-1.png"
          src={Plant}
          alt=""
        />{" "}
        <span style={{ marginLeft: "15px", color: "#c6993e" }}>
          ....................
        </span>
      </div>
      <FadeContent
                blur={true}
                duration={900}
                easing="ease-out"
                initialOpacity={0}
              >
      <h1
        className="work-title"
        style={{ textAlign: "center", marginTop: "29px" }}
      >
        Our Working Process
      </h1>
      </FadeContent>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="200"
              style={{ height: "91%" }}
            >
              <div
                className="step-header-container"
                style={{ backgroundColor: "#c6993e", borderRadius: "50px" }}
              >
                <div
                  className="step-header"
                  style={{ backgroundColor: "#c6993e", width: "100px" }}
                >
                  STEP 01{" "}
                </div>
              </div>
              <div className="service-icon" >
                <img src={targetIcon} alt="img" onContextMenu={disableContextMenu}/>
              </div>
              <div className="service-text">
                <p className="service-steps">Aim on Independent Assessments</p>
                <p>
                  We aim to provide an independent assessment that examines all
                  aspects of a proposed project, including technical, economic,
                  financial, legal and environmental considerations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="350"
              style={{ height: "91%" }}
            >
              <div
                className="step-header-container"
                style={{ backgroundColor: "#c6993e", borderRadius: "50px" }}
              >
                <div
                  className="step-header"
                  style={{ backgroundColor: "#c6993e", width: "100px" }}
                >
                  STEP 02{" "}
                </div>
              </div>
              <div className="service-icon">
                <img src={identification} alt="img" />
              </div>
              <div className="service-text">
                <p className="service-steps">
                  Land Identification and Acquisition
                </p>
                <p>
                  Specializing in pinpointing ideal land prospects, we
                  meticulously evaluate for suitability, fertility, and
                  strategic value. Our process ensures precise acquisition,
                  securing prime plots for diverse agricultural pursuits.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="500"
              style={{ height: "91%" }}
            >
              <div
                className="step-header-container"
                style={{ backgroundColor: "#c6993e", borderRadius: "50px" }}
              >
                <div
                  className="step-header"
                  style={{ backgroundColor: "#c6993e", width: "100px" }}
                >
                  STEP 03{" "}
                </div>
              </div>
              <div className="service-icon">
                {/* <img src={serviceIcon2} alt="img" /> */}
                <img src={Check} alt="img" />
              </div>
              <div className="service-text">
                <p className="service-steps">Project Delivery</p>
                <p>
                  We assure to deliver more than just a project, we deliver a
                  vision realized, a dream fulfilled and projects where every
                  detail has been crafted to perfection.
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
              </div>
              {/* <img src={serviceImg3} alt="img" /> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="650"
              style={{ height: "91%" }}
            >
              <div
                className="step-header-container"
                style={{ backgroundColor: "#c6993e", borderRadius: "50px" }}
              >
                <div
                  className="step-header"
                  style={{ backgroundColor: "#c6993e", width: "100px" }}
                >
                  STEP 04{" "}
                </div>
              </div>
              <div className="service-icon">
                {/* <img src={serviceIcon3} alt="img" /> */}
                <img src={Management} alt="img" />
              </div>
              <div className="service-text">
                <p className="service-steps">
                  Property Management & Maintenance
                </p>
                <p>
                  Our team focuses on maintenance of the Projects to retain its
                  aesthetic appearance in order to ensure that your investment
                  retains and appreciates its value.
                </p>
              </div>
              {/* <img src={serviceImg3} alt="img" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
