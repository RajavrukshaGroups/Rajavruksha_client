import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SylRetreatImg from "../../components/assets/Sylvan_retreat_single_banner_img.webp";
import EcoNestImg from "../../components/assets/eco-nest_pro_det_img.webp";
import PlumeriaImg from "../../components/assets/plumeria1.webp";
import Sylvan_logo from "../../components/assets/Sylvan-official-logo.png";
import EcoNest_logo from "../../components/assets/Econest-official-logo.png";
import Plumeria_logo from "../../components/assets/Plumeria_new_logo.png";
import Brochure from "../../components/assets/RRPL_Brochure_new.pdf";
import PHSBgImg from "../../components/assets/protwo.jpg"
import ContactModal from "../Modal/contactModal";
// import DHS_Logo from "../../components/assets/"
import "./style.css";

const ProjectListNew = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleDownloadBrochure = () => {
    window.open(Brochure, "_blank");
  };
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    navigate(`/${project.toLowerCase().replace(" ", "-")}`);
  };

  const projects = [
    {
      title: "Sylvan Retreat",
      img: SylRetreatImg,
      logo: Sylvan_logo,
      description: "Farm Land",
    },
    // {
    //   title: "Eco Nest",
    //   img: EcoNestImg,
    //   logo: EcoNest_logo,
    //   description: "Eco Acres",
    // },
    {
      title: "Plumeria",
      img: PlumeriaImg,
      logo: Plumeria_logo,
      description: "Residential Plots",
    },
    {
      title: "DHS Websites",
      img: PHSBgImg,
      logo: 'https://digitaleliteservices.in/assets/DHS.png',
      description: "Real Estate",
    },
  ];

  return (
    <section className="projects-area">
      <div className="container">
        <div className="site-heading">
          <p className="main-subtitle">OUR PROJECTS</p>
          <h2 className="main-title">Featured Work</h2>
        </div>
        <div className="download-projects-brochure">
          <a
            onClick={handleOpenModal}
            className="btn btn-primary download-btn-new"
          >
            Download Brochure
          </a>
        </div>
        <div className="project-box-container">
          {projects.map((project, index) => (
            <div
              className="project-box"
              key={index}
              onClick={() => handleProjectClick(project.title)}
            >
              <div className="project-logo">
                <img src={project.logo} alt={`${project.title} Logo`} />
              </div>
              <img
                src={project.img}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <ContactModal
          show={showModal}
          handleClose={handleCloseModal}
          onSubmitSuccess={handleDownloadBrochure}
          project="Download Brochure"
        />
      )}
    </section>
  );
};

export default ProjectListNew;
