import React, { Fragment, Suspense, useEffect, useState } from "react";
import Header from "../../components/header";
import bg from "../../components/assets/plumeria3.webp";
import bgImg1 from "../../components/assets/plumeria3.webp";
import bgImg2 from "../../components/assets/plumeria1.webp";
import land_overview from "../../components/assets/land_overview.png";
import plot_overview from "../../components/assets/plot_overview.png";
import amenity_overview from "../../components/assets/amenity_overview.png";
import { Helmet } from "react-helmet";
import "../AboutPage/loading.css";
import "./pro-plumeria.css";
import Loader from "../../components/Loader/loader";
import { updateMetaTags } from "../../utils/updateMetaTags";
import FadeContent from "../../utils/FadeContent";
import { ThreeDCardDemo } from "../../components/dowloadBrochure/plumeria";

const PageTitle = React.lazy(() => import("../../components/pagetitle"));
const Plumeria = React.lazy(() => import("../../components/Projects/plumeria"));
const ContactUs = React.lazy(() =>
  import("../../components/Projects/contactform")
);
const Footer = React.lazy(() => import("../../components/footer"));
const InfiniteMovingCardsDemo = React.lazy(() =>
  import("../../utils/plumeriaGallery/PlumeriaInfiniteGallary")
);

const PlumeriaAmenities = React.lazy(() =>
  import("../../components/Amenities/plumeria")
);
const PlumeriaOveriew = React.lazy(() =>
  import("../../components/overview/plumeria/plumeriaOverview")
);
const PlumeriaMain = () => {
  const title = "Plumeria - Residential Plots in North Bangalore";
  const description =
    "Discover Plumeria, an exclusive real estate project offering residential plots surrounded by nature. Ideal for peaceful living.";
  const ogTitle = "Plumeria - Real Estate Excellence";
  const ogDescription =
    "Explore Plumeria, an exquisite residential plots project that promises a tranquil lifestyle. Ideal for nature lovers and investment opportunities.";
  const ogUrl = "https://rajavrukshagroup.in/sylvan-retreat";

  const [counts, setCounts] = useState({
    acres: 1,
    plots: 1,
    amenities: 1,
  });

  useEffect(() => {
    updateMetaTags({
      title,
      description,
      ogTitle,
      ogDescription,
      ogUrl,
    });
  }, [title, description, ogTitle, ogDescription, ogUrl]);

  useEffect(() => {
    const incrementCounts = (key, targetValue, duration = 2000) => {
      let start = 1;
      const stepTime = Math.abs(Math.floor(duration / targetValue));
      const interval = setInterval(() => {
        start++;
        setCounts((prev) => ({ ...prev, [key]: start }));
        if (start >= targetValue) clearInterval(interval);
      }, stepTime);
    };

    incrementCounts("acres", 2);
    incrementCounts("plots", 35);
    incrementCounts("amenities", 10);
  }, []);
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
      </Helmet>
      <Header />
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
        <PageTitle
          pagesub={"Project Details"}
          pageImg={bg}
          PageTitle="Plumeria"
          plumeriaSub="community where life blossoms"
          bgImg1={bgImg1}
          bgImg2={bgImg2}
        />
        <div className="plumeria-icons-overview">
          {[
            { img: land_overview, label: `${counts.acres} Acres` },
            { img: plot_overview, label: `${counts.plots}+  Plots` },
            { img: amenity_overview, label: `${counts.amenities}+  Amenities` },
          ].map((item, index) => (
            <div key={index} className="icon-box">
              <img
                src={item.img}
                alt={item.label}
                className="overview-main-icon"
              />
              <p className="icon-label">{item.label}</p>
            </div>
          ))}
        </div>
        <div>
          <h1 className="project-name">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              Exclusive Premium Plots
            </FadeContent>
          </h1>
        </div>
        <div className="project-details">
          <div className="plumeria-layout">
            <div className="project-desc">
              <p>
                Plumeria is a thoughtfully designed residential project that
                blends modern comfort with natural serenity. Nestled in a prime
                location, it offers residential plots, lush green surroundings,
                and amenities. Whether you're looking for a peaceful retreat or
                a vibrant community, Plumeria provides the perfect balance of
                luxury and tranquility, making it an ideal place to call home.
              </p>
              <PlumeriaOveriew />
            </div>
          </div>
        </div>
        <div>
          <PlumeriaAmenities />
        </div>
        <div className="new-gal-plumeria">
          <InfiniteMovingCardsDemo />
        </div>
        <Plumeria />
        <div className="plumeria-brochure">
          <ThreeDCardDemo />
        </div>
        <div className="plumeria-contact-map row">
          <div className="plumeria-contact col-lg-12 col-sm-12 mb-5">
            <ContactUs projectPlumeria={"Plumeria"} />
          </div>
        </div>
        {/* <div>
          <ThreeDCardDemo />
        </div> */}

        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default PlumeriaMain;
