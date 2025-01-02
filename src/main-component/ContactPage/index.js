import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header";
import { Helmet } from "react-helmet";
import { updateMetaTags } from "../../utils/updateMetaTags"; // Import the updateMetaTags function
import contact_us from "../../components/assets/Contact_us.jpg";
import "../AboutPage/loading.css";
import Loader from "../../components/Loader/loader";

const PageTitle = React.lazy(() => import("../../components/pagetitle"));
const Contactpage = React.lazy(() => import("../../components/Contactpage"));
const Footer = React.lazy(() => import("../../components/footer"));

const ContactPage = () => {
  const title = "Contact Us";
  const description =
    "Get in touch with Rajavruksha Group for inquiries, support, or to know more about our real estate services and properties.";
  const ogTitle = "Contact Rajavruksha Group - Real Estate Assistance";
  const ogDescription =
    "Reach out to Rajavruksha Group for inquiries, feedback, or to explore our farmland and plot offerings.";
  const ogUrl = "https://rajavrukshagroup.in/contact";

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
        <meta name="twitter:title" content="Contact Rajavruksha Group" />
        <meta name="twitter:description" content="Contact Rajavruksha Group for all real estate inquiries." />
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
        {" "}
        <PageTitle
          PageTitle={"CONTACT"}
          pagesub={"Contact"}
          pageImg={contact_us}
          title={title}
        />
        <Contactpage ContactClasss="contact-container" />
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default ContactPage;
