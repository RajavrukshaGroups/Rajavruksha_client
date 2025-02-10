import React, { Fragment, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header";
import bg from "../../components/assets/project_page.webp";
import { updateMetaTags } from "../../utils/updateMetaTags";
import "./loading.css";
import Loader from "../../components/Loader/loader";

const About = React.lazy(() => import("../../components/about"));
const PageTitle = React.lazy(() => import("../../components/pagetitle"));
const Animation = React.lazy(() =>
  import("../../components/reactIcons/journeySection")
);
const Footer = React.lazy(() => import("../../components/footer"));
const aboutText = `
  At Rajavruksha, we truly appreciate the wonders of nature and understand 
  the tranquility it can bring to one's existence. Our purpose is to turn 
  your aspiration of owning a plot of land into an experience by providing 
  selected and well-maintained farm plots in the scenic surroundings of Bangalore.
`;

const AboutPage = () => {
  useEffect(() => {
    updateMetaTags({
      title: "About Us - Rajavruksha",
      description:
        "Discover Rajavruksha's mission to connect people with nature through serene farm plots near Bangalore.",
      ogTitle: "About Us - Rajavruksha",
      ogDescription:
        "Discover Rajavruksha's mission to connect people with nature.",
      ogUrl: "https://rajavrukshagroup.in/about",
    });
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>About Us - Rajavruksha</title>
        <meta
          name="description"
          content="Discover Rajavruksha's mission to connect people with nature through serene farm plots near Bangalore."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us - Rajavruksha" />
        <meta
          property="og:description"
          content="Discover Rajavruksha's mission to connect people with nature through serene farm plots near Bangalore."
        />
        <meta
          property="og:image"
          content="https://rajavrukshagroup.in/wp-content/uploads/2024/05/RRPL-Horizontal_Final.png"
        />
      </Helmet>

      <Header />
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
        <PageTitle PageTitle="About Us" pagesub="About" pageImg={bg} />
        <About text={aboutText} image={bg} />
        <Animation />
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default AboutPage;
