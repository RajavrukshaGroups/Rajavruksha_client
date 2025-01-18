import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import bdeImg from "../../components/assets/BdeImg.webp";

const CareerFooter = () => {
  const [careers, setCareers] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        // const response = await fetch("http://localhost:4000/getCareerDetails");
        const response = await fetch(
          "https://servermain.rajavrukshagroup.in/getCareerDetails"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data", data.data);
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
      {errors && <p className="error-message">{errors}</p>}{" "}
      <div className="careers-list">
        {careers.map((career) => (
          <div
            key={career._id}
            className="career-ind"
            onContextMenu={disableContextMenu}
          >
            <Link to={`/careerDetails/${career._id}`}>
              <img src={career.image?.url || bdeImg} alt={career.title} />
              <div className="bde-title">
                <p className="para-title text-capitalize">{career.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerFooter;
