import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header";
// import bg from "../../components/assets/new_project.webp";
import bg from "../../components/assets/proone.jpg";
import { Helmet } from "react-helmet";
import { updateMetaTags } from "../../utils/updateMetaTags";
import "../AboutPage/loading.css";
import Loader from "../../components/Loader/loader";

const PageTitle = React.lazy(() => import("../../components/pagetitle"));
const ProjectListNew = React.lazy(() => import("../../components/ProjectListNew"));
const Footer = React.lazy(() => import("../../components/footer"));

const ProjectPageNew = () => {
  const description =
    "Discover our premium farmland and real estate projects that offer a great investment opportunity. Browse through our latest projects and find your perfect plot.";
  const ogTitle = "Our Projects - Rajavruksha Real Estate";
  const ogDescription =
    "Explore the best farmland and real estate projects with Rajavruksha. Learn about our latest developments and investment opportunities.";
  const ogUrl = "https://rajavrukshagroup.in/projects";
  const title = "Our Projects - Explore Premium Farmland and Real Estate";

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

        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rajavruksha Projects" />
        <meta name="twitter:description" content="Explore Rajavruksha's top real estate and farmland projects." />
        <meta name="twitter:image" content="https://rajavrukshagroup.in/wp-content/uploads/2024/05/RRPL-Horizontal_Final.png" /> */}
     
      </Helmet>
      <Header />
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
        <PageTitle PageTitle={"PROJECTS"} pagesub={"Projects"} pageImg={bg} />
        <ProjectListNew />
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default ProjectPageNew;
