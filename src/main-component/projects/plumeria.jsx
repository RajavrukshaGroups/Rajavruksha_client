import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header";
import bg from "../../components/assets/plumeria3.webp";
import bgImg1 from "../../components/assets/plumeria3.webp";
import bgImg2 from "../../components/assets/plumeria1.webp";
import { Helmet } from "react-helmet";
import "../AboutPage/loading.css";
import "./pro-plumeria.css";
import Loader from "../../components/Loader/loader";
import { updateMetaTags } from "../../utils/updateMetaTags";
import FadeContent from "../../utils/FadeContent";
import { InfiniteMovingCardsDemo } from "../../utils/plumeriaGallery/PlumeriaInfiniteGallary";

const PageTitle = React.lazy(() => import("../../components/pagetitle"));
const Plumeria = React.lazy(() => import("../../components/Projects/plumeria"));
const ContactUs = React.lazy(() =>
  import("../../components/Projects/contactform")
);
const Footer = React.lazy(() => import("../../components/footer"));
const Amenities = React.lazy(() =>
  import("../../components/Amenities/amenities")
);
const ThreeDCardDemo = React.lazy(() => import("./plumeria3dDemo"));
const RollingGallery = React.lazy(() =>
  import("../../utils/plumeriaGallery/plumeriagallery")
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

  useEffect(() => {
    updateMetaTags({
      title,
      description,
      ogTitle,
      ogDescription,
      ogUrl,
    });
  }, [title, description, ogTitle, ogDescription, ogUrl]);

  const plumeriaAmenities = [
    "Individual water connection",
    "CCTV surveillance",
    "A wide black top road",
    "Play area",
    "Park",
    "Street lights",
  ];
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
              {/* <div className="location-benefits">
                <p class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Why Plumeria:
                </p>
                <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                  <li class="flex items-center mb-2">
                    <svg
                      class="benefits w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Well-connected to major highways and transport hubs.
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="benefits w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Proximus to schools, hospitals, and shopping centers.{" "}
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="benefits w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Eco-friendly surroundings with green landscapes.
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="benefits w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Access to public transport for easy commuting.{" "}
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="benefits w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    High appreciation potential for property investment.{" "}
                  </li>
                  <li class="flex items-center mb-2">
                    <svg
                      class="benefits w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Recreational spots like parks and entertainment zones.{" "}
                  </li>
                </ul>
              </div> */}
              <PlumeriaOveriew />
            </div>

            {/* <div className="plumeria-amenities">
              <Amenities amenities={plumeriaAmenities} projectType="plumeria" />
            </div> */}
            {/* <div className="plumeria-overview">Project Overview</div> */}
          </div>
        </div>
        <div>
          <PlumeriaAmenities />
        </div>
        <div className="new-gal-plumeria">
          <InfiniteMovingCardsDemo />
        </div>

        {/* <div className="plumeria-plan-map">
          <div className="demo-layout">
            <ThreeDCardDemo />
            <RollingGallery autoplay={true} pauseOnHover={true} />
            <InfiniteMovingCardsDemo />
          </div>       
        </div> */}
        <Plumeria />
        <div className="plumeria-contact-map row">
          <div className="plumeria-contact col-lg-12 col-sm-12 mb-5">
            <ContactUs projectPlumeria={"Plumeria"} />
          </div>
        </div>
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default PlumeriaMain;
