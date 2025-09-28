import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import bdeImg from "../../components/assets/BdeImg.webp";

const CareerFooter = () => {
  const [careers, setCareers] = useState([]);
  const [errors, setErrors] = useState(null);

  const videoUrl =
    "https://res.cloudinary.com/den0iz8zn/video/upload/v1750312023/rrpl_career_video_w38q4b.mp4";

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        // const response = await fetch("http://localhost:4000/getCareerDetails");
        const response = await fetch(
          // "https://servermain.rajavrukshagroup.in/getCareerDetails"
          "https://rajavruksha-server.rajavrukshagroup.in/getCareerDetails"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCareers(data.data);
      } catch (err) {
        setErrors("An error occurred while fetching career details.");
        console.error(err);
      }
    };
    fetchCareers();
  }, []);

  const disableContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {errors && <p className="error-message">{errors}</p>}
      <div className="careers-list">
        {careers.map((career, index) => (
          <React.Fragment key={career._id}>
            <div className="career-ind" onContextMenu={disableContextMenu}>
              <Link to={`/careerDetails/${career._id}`}>
                <img src={career.image?.url || bdeImg} alt={career.title} />
                <div className="bde-title">
                  <p className="para-title text-capitalize">{career.title}</p>
                </div>
              </Link>
            </div>

            {/* Show video after the first two careers */}
            {index === 1 && (
              <div className="career-video-container">
                <video
                  className="career-video"
                  src={videoUrl}
                  autoPlay
                  controls
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CareerFooter;
