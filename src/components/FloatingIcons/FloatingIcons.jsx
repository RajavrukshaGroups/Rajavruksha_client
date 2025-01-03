import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaArrowLeft,
  FaComment,
  FaTimes,
} from "react-icons/fa";
import "./style.css";

const FloatingIcons = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleClick = (type, value) => {
    if (type === "phone") {
      window.location.href = `tel:${value}`;
    } else if (type === "whatsapp") {
      window.open("https://wa.me/916366930174", "_blank");
    }
  };

  const toggleIcons = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="floating-icons-container">
      <div className={`floating-icons ${isExpanded ? "expanded" : ""}`}>
        {isExpanded && (
          <>
            <div
              className="icon phone"
              data-tooltip="Call Us"
              onClick={() => handleClick("phone", "+91 8549 955 955")}
            >
              <FaPhoneAlt />
            </div>
            <div
              className="icon whatsapp"
              data-tooltip="WhatsApp"
              onClick={() => handleClick("whatsapp", "+91 8549 955 955")}
            >
              <FaWhatsapp />
            </div>
          </>
        )}
      </div>
      <div
        className={`toggle-arrow ${isExpanded ? "rotated" : ""}`}
        onClick={toggleIcons}
      >
        {isExpanded ? <FaTimes /> : <FaComment />}
      </div>
    </div>
  );
};

export default FloatingIcons;
