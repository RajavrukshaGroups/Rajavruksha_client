import React, { Fragment, useState, useEffect } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import bg from "../../components/assets/bde.webp";
import Footer from "../../components/footer/index.js";
import CareerForm from "../../components/careers/jobCareer.jsx";
import career_desktop from "../../components/assets/career_desktop.jpg";
import { useParams } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();  // Get the career ID from the URL
  const [careerDetails, setCareerDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareerDetails = async () => {
      try {
        const response = await fetch(`https://servermain.rajavrukshagroup.in/getCareerIndDetails/${id}`);
        // const response = await fetch(`http://localhost:4000/getCareerIndDetails/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch career details");
        }
        const data = await response.json();
        setCareerDetails(data.data);  // Store the career details in state
      } catch (err) {
        setError("Failed to fetch career details.");
        console.error(err);
      }
    };

    fetchCareerDetails();
  }, [id]);  // Re-run the effect when the id changes

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Fragment>
      <Header />
      <PageTitle
        PageTitle={"Career"}
        pagesub={"career"}
        subtitle={careerDetails?.title || "Loading..."}  // Display career title
        pageImg={career_desktop}
      />
      {careerDetails && <CareerForm careerDetails={careerDetails} />}
      <Footer />
    </Fragment>
  );
};

export default CareerDetails;
