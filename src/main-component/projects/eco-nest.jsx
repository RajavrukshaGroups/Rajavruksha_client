import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header";
import bg from "../../components/assets/eco_nest_img.webp";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import { updateMetaTags } from "../../utils/updateMetaTags"; // Import the updateMetaTags function
import "../AboutPage/loading.css";
import Loader from "../../components/Loader/loader";

const PageTitle = React.lazy(() => import("../../components/pagetitle"));
const EcoNexts = React.lazy(() => import("../../components/Projects/eco-nest"));
const Footer = React.lazy(() => import("../../components/footer"));
const ContactUs = React.lazy(() =>
  import("../../components/Projects/contactform")
);
const Layoutguide = React.lazy(() =>
  import("../../components/layoutGuide/layoutguide")
);

function Econext() {
  const title = "Eco-Nest - Sustainable Living & Green Farmland";
  const description =
    "Discover Eco-Nest, a sustainable real estate project offering eco-friendly farmlands and plots for green living.";
  const ogTitle = "Eco-Nest - Green Real Estate Excellence";
  const ogDescription =
    "Explore Eco-Nest, a sustainable farmland project offering eco-friendly living spaces in harmony with nature.";
  const ogUrl = "https://rajavrukshagroup.in/eco-nest";

  useEffect(() => {
    // Use updateMetaTags to dynamically set the meta tags for this page
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
        <meta name="twitter:title" content="Eco-Nest - Sustainable Green Living" />
        <meta
          name="twitter:description"
          content="Invest in Eco-Nest for a sustainable, green lifestyle with premium farmlands and eco-friendly living spaces."
        />
        <meta
          name="twitter:image"
          content="https://rajavrukshagroup.in/wp-content/uploads/2024/05/RRPL-Horizontal_Final.png"
        /> */}
        {/* <link rel="icon" href="/web_logo_new.png" type="image/png" /> */}
      </Helmet>

      <Header />
      <Suspense
        fallback={
          <div>
            <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
          </div>
        }
      >
        {" "}
        <PageTitle
          PageTitle={"Eco-nest"}
          pagesub={"Project Details"}
          pageImg={bg}
        />
        <EcoNexts />
        <div className="flex-container">
          <ContactUs page={"Eco-Nest"} contact_page_title={"Eco-Nest"} />
        </div>
        <Layoutguide />
        <Footer />
      </Suspense>
    </Fragment>
  );
}

export default Econext;
