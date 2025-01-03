import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header";
import { Helmet } from "react-helmet";
import { updateMetaTags } from "../../utils/updateMetaTags.js";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../components/ErrorBoundary/errorBoundary.js";
import Loader from "../../components/Loader/loader.jsx";
const Hero = React.lazy(() => import("../../components/hero"));
const About = React.lazy(() => import("../../components/about"));
const Container = React.lazy(() => import("../Status/status.jsx"));
const ServiceSection = React.lazy(() =>
  import("../../components/ServiceSection")
);
const Testimonial = React.lazy(() => import("../../components/testimonial"));
const Footer = React.lazy(() => import("../../components/footer"));
const OngoingProjects = React.lazy(() =>
  import("../../components/ourOnGoingProjects/ourOnGoingProjects.jsx")
);
import "../AboutPage/loading.css";

const HomePage = () => {
  const description =
    "Explore prime farmland & plots with Rajavruksha, your expert guide to perfect investments and properties.";
  const ogTitle = "Rajavruksha - Real Estate Excellence";
  const ogDescription =
    "Welcome to Rajavruksha! Discover premium real estate services, farmlands, and projects tailored for you.";
  const ogUrl = "https://rajavrukshagroup.in/";
  const title =
    "Welcome to Rajavruksha – Your Real Estate Partner for Farmland & Plots located at Hebbal, North Bangalore";

  useEffect(() => {
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
      </Helmet>
      <Header />
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
        <Hero />
        <Container />
        <About text={""} readMore="read more" />
        <OngoingProjects />
        <ServiceSection />
        <Testimonial />
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default HomePage;
