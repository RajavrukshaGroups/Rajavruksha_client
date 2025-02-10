import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ecoNext from "../../components/assets/ecoproject.jpg";
import SylRetreatImg from "../../components/assets/Sylvan_retreat_single_banner_img.webp";
import EcoNestImg from "../../components/assets/eco-nest_pro_det_img.webp";
import PlumeriaImg from "../../components/assets/plumeria1.webp";
import "./style.css";

const ProjectList = () => {
  const navigate = useNavigate();
  const handleProjectClick = (project) => {
    if (project === "Sylvan Retreat") {
      navigate("/sylvan-retreat");
    } else if (project === "Eco Nest") {
      navigate("/eco-nest");
    } else if (project === "Plumeria") {
      navigate("/plumeria");
    }
  };
  return (
    <section className="projects-area projects-page-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <p className="main-subtitle">PROJECTS</p>
                  <p className="main-title">Featured Work.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center project-box-container">
              <div className="col-md-5 col-sm-6 mt-5">
                <div
                  className="project-box"
                  onClick={() => handleProjectClick("Sylvan Retreat")}
                >
                  <img
                    src={SylRetreatImg}
                    alt="img"
                    style={{
                      userSelect: "none",
                      height: "600px",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <h3 className="syl-retreat-title text-capitalize">
                    Sylvan Retreat
                  </h3>
                  <p>Nature's Beauty Celebration</p>
                  <div className="project-zoom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye"
                    >
                      <path
                        stroke="#ffffff"
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      />
                      <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-6 mb-5 project-box-div">
                <div
                  className="project-box"
                  onClick={() => handleProjectClick("Eco Nest", ecoNext)}
                >
                  <Link to="/projects-single">
                    <img
                      src={EcoNestImg}
                      alt="img"
                      style={{
                        height: "600px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <h3>Eco Nest</h3>
                    <p>Eco Acres </p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-sm-6 mb-5 plumeria">
                <div
                  className="project-box"
                  onClick={() => handleProjectClick("Plumeria")}
                >
                  <Link to="/projects-single">
                    <img
                      src={PlumeriaImg}
                      alt="img"
                      style={{
                        height: "600px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <h3>Plumeria</h3>
                    <p>Residential Plots </p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectList;
