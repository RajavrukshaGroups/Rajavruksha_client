import React, { useState } from "react";
import "../../components/layoutGuide/layoutguide.css";
import ContactModal from "../Modal/contactModal"; // Adjust the path as necessary
import EcoNestLayout from "../../components/assets/eco-nest-layout.webp";
import BlurText from "../../utils/BlurText";

function Layoutguide() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleDownloadBrochure = () => {
    window.open(
      "https://rajavrukshagroup.in/wp-content/uploads/2024/02/RRPL_Brochure-2.pdf",
      "_blank"
    );
  };

  const disableContextMenu = (e) => {
    e.preventDefault();
  };

  const handleAnimationComplete = () => {
    console.log("Animation completed");
  };

  return (
    <div className="layout-container">
      <div className="">
        <h1 className="layout-title">
          {/* Crafting Exquisite Design : Your Layout Guide */}
          <BlurText
            text="Crafting Exquisite Design : Your Layout Guide"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />
        </h1>
      </div>
      <div>
        <button className="econest-download" onClick={handleOpenModal}>
          Download Brochure
        </button>
      </div>
      <div className="layout-image" onContextMenu={disableContextMenu}>
        <img
          width="80%"
          height="50%"
          // src="https://rajavrukshagroup.in/wp-content/uploads/2024/02/l-plan-NEW-1-2000x2048.jpg"
          src={EcoNestLayout}
          alt="layout-image"
        />
      </div>

      {/* Modal Component */}
      {showModal && (
        <ContactModal
          show={showModal}
          handleClose={handleCloseModal}
          onSubmitSuccess={handleDownloadBrochure}
        />
      )}
    </div>
  );
}

export default Layoutguide;
