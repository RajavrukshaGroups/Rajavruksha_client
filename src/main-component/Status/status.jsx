import React from "react";
import "./status.css";
import AboutIcon from "../../components/assets/planting (1).png";
import ResidentIcon from "../../components/assets/residentialfhfg.png";
import VillaIcon from "../../components/assets/villafcht.png";

function Status() {
  return (
    <div className="projects-container">
      <div className="projects-box">
        <div className="project-item">
          <img src={AboutIcon} alt="Managed Farmland" />
          <div className="project-info">
            <h3 className="info-title">Managed Farmland</h3>
            <div className="item-divider"></div>
            <p>On-Going</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="project-item">
          <img src={ResidentIcon} alt="Residential Projects" />
          <div className="project-info">
            <h3 className="info-title">Residential Projects</h3>
            <div className="item-divider"></div>
            <p>On-Going</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="project-item">
          <img src={VillaIcon} alt="Row Villa Projects" />
          <div className="project-info">
            <h3 className="info-title">Row Villa Projects</h3>
            <div className="item-divider"></div>
            <p>Upcoming</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
