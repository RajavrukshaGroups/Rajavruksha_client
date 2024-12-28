import React, { Fragment, useEffect } from "react";
import Header from "../../components/header";
import Hero from "../../components/hero";
import About from "../../components/about";
import ServiceSection from "../../components/ServiceSection";
import Testimonial from "../../components/testimonial";
import Footer from "../../components/footer";
import Container from "../Status/status.jsx";
import OngoingProjects from "../../components/ourOnGoingProjects/ourOnGoingProjects.jsx";
import { Helmet } from "react-helmet";
import { updateMetaTags } from "../../utils/updateMetaTags.js"; // Import the updateMetaTags function

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
        <meta property="og:image" content="https://rajavrukshagroup.in/wp-content/uploads/2024/05/RRPL-Horizontal_Final.png" />
        <meta property="og:url" content={ogUrl} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Helmet>
      <Header />
      <Hero />
      <Container />
      <About text={""} readMore="read more" />
      <OngoingProjects />
      <ServiceSection />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
