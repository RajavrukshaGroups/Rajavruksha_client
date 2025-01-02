import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header";
import bg from "../../components/assets/career_page.webp";
import career_desktop from "../../components/assets/career_desktop.jpg";
import { Helmet } from "react-helmet";
import { updateMetaTags } from "../../utils/updateMetaTags"; // Import the updateMetaTags function
import "../AboutPage/loading.css";
import Loader from "../../components/Loader/loader";

const CareerFooter = React.lazy(() =>
  import("../../components/CareerFooter/careerFooter")
);
const PageTitle = React.lazy(() => import("../../components/pagetitle"));
const Footer = React.lazy(() => import("../../components/footer"));

const CareerMainFooterComp = () => {
  const description =
    "Explore career opportunities at Rajavruksha Group. Apply now to join our team and work in the real estate sector.";
  const ogTitle = "Current Openings - Rajavruksha Group Careers";
  const ogDescription =
    "Find your next career opportunity with Rajavruksha Group. Discover open positions and join a growing real estate company.";
  const ogUrl = "https://rajavrukshagroup.in/careers";
  const title = "Current Openings - Join Rajavruksha Group";

  useEffect(() => {
    // Use updateMetaTags to update meta tags dynamically
    updateMetaTags({
      title,
      description,
      ogTitle,
      ogDescription,
      ogUrl,
    });
  }, [title, description, ogTitle, ogDescription, ogUrl]);

  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta
          property="og:image"
          content="https://rajavrukshagroup.in/wp-content/uploads/2024/05/RRPL-Horizontal_Final.png"
        />
        <meta property="og:url" content={ogUrl} />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rajavruksha Group Careers" />
        <meta name="twitter:description" content="Explore career opportunities with Rajavruksha Group." />
        <meta
          name="twitter:image"
          content="https://rajavrukshagroup.in/wp-content/uploads/2024/05/RRPL-Horizontal_Final.png"
        /> */}
      </Helmet>
      <Header />
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
        <PageTitle PageTitle={"Current Openings"} pageImg={career_desktop} />
        <CareerFooter />
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default CareerMainFooterComp;
