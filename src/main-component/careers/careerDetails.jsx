import React, { Fragment, useState, useEffect, Suspense } from "react";
import Header from "../../components/header";
import bg from "../../components/assets/bde.webp";
import career_desktop from "../../components/assets/career_desktop.jpg";
import { useParams } from "react-router-dom";
import "../AboutPage/loading.css";
import Loader from "../../components/Loader/loader.jsx";

const PageTitle = React.lazy(() => import("../../components/pagetitle"));
const Footer = React.lazy(() => import("../../components/footer/index.js"));
const CareerForm = React.lazy(() =>
  import("../../components/careers/jobCareer.jsx")
);

const CareerDetails = () => {
  const { id } = useParams(); // Get the career ID from the URL
  const [careerDetails, setCareerDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareerDetails = async () => {
      try {
        const response = await fetch(
          `https://servermain.rajavrukshagroup.in/getCareerIndDetails/${id}`
        );
        // const response = await fetch(
        //   `http://localhost:4000/getCareerIndDetails/${id}`
        // );

        if (!response.ok) {
          throw new Error("Failed to fetch career details");
        }
        const data = await response.json();
        setCareerDetails(data.data); // Store the career details in state
      } catch (err) {
        setError("Failed to fetch career details.");
        console.error(err);
      }
    };

    fetchCareerDetails();
  }, [id]); // Re-run the effect when the id changes

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Fragment>
      <Header />
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
        <PageTitle
          PageTitle={"Career"}
          pagesub={"career"}
          subtitle={careerDetails?.title || "Loading..."} // Display career title
          pageImg={career_desktop}
        />
        {careerDetails && <CareerForm careerDetails={careerDetails} />}
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default CareerDetails;
