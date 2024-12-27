import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaArrowLeft,
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
              onClick={() => handleClick("phone", "+91 8549 955 955")}
            >
              <FaPhoneAlt />
            </div>
            <div
              className="icon whatsapp"
              onClick={() => handleClick("whatsapp", "+91 8549 955 955")}
            >
              <FaWhatsapp />
            </div>
          </>
        )}
      </div>
      <div className="toggle-arrow" onClick={toggleIcons}>
        {isExpanded ? <FaArrowLeft /> : <FaArrowRight />}
      </div>
    </div>
  );
};

export default FloatingIcons;
