import React, { Fragment, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Header from "../../components/header";
import { updateMetaTags } from "../../utils/updateMetaTags";
import Loader from "../../components/Loader/loader";
import bgImg1 from "../../components/assets/Sylan_retreat_new_Banner.webp";
import bgImg2 from "../../components/assets/syl-retreat-home-page.jpg";
import land from "../../components/assets/syl-new-acre.png";
import plot from "../../components/assets/syl-new-plots.png";
import club from "../../components/assets/syl-new-night-club.png";
import beeKeep from "../../components/assets/syl-new-beekeeping.png";
import animal from "../../components/assets/syl-new-farm.png";
import fruits from "../../components/assets/syl-new-fruit-tree.png";
import sylGalImg1 from "../../components/assets/syl-retreat_gallary_img1.webp";
import sylGalImg2 from "../../components/assets/syl-retreat_gallary_img2.webp";
import sylGalImg3 from "../../components/assets/syl-retreat_gallary_img3.webp";
import sylGalImg4 from "../../components/assets/syl-retreat_gallary_img4.webp";
import sylGalImg5 from "../../components/assets/syl-retreat_gallary_img5.webp";
import "./sylvanNew.css";
import FadeContent from "../../utils/FadeContent";
import SylvanNewRunner from "../../components/Projects/SylvanNewRunner";

const PageTitle = React.lazy(() => import("../../components/pagetitle"));
const SylvanNewHighlights = React.lazy(() =>
  import("../../components/Projects/sylvanNew")
);
const SylvanNewAmenities = React.lazy(() =>
  import("../../components/Amenities/sylvanNewAmenities")
);
const SylvanNewWhy = React.lazy(() =>
  import("../../components/Projects/whySlyvanNew")
);
const ContactUs = React.lazy(() =>
  import("../../components/Projects/contactform")
);
const InfiniteMovingCardsDemo = React.lazy(() =>
  import("../../utils/plumeriaGallery/PlumeriaInfiniteGallary")
);
const Footer = React.lazy(() => import("../../components/footer"));

const SylvanRetreatNew = () => {
  const title = "Sylvan Retreat - Premium Farmlands & Plots";
  const description =
    "Discover Sylvan Retreat, an exclusive real estate project offering premium farmlands and plots surrounded by nature. Ideal for peaceful living.";
  const ogTitle = "Sylvan Retreat - Real Estate Excellence";
  const ogDescription =
    "Explore Sylvan Retreat, an exquisite farmland project that promises a tranquil lifestyle. Ideal for nature lovers and investment opportunities.";
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

  const features = [
    { img: land, label: "50+ Acres" },
    { img: plot, label: "30+ Plots" },
    { img: club, label: "Club House" },
    { img: beeKeep, label: "Beekeeping" },
    { img: fruits, label: "Fruit Cultivation" },
    { img: animal, label: "Animal Husbandry" },
  ];

  const galleryImages = [
    { image: sylGalImg1, alt: "Sylvan 1" },
    { image: sylGalImg2, alt: "Sylvan 2" },
    { image: sylGalImg3, alt: "Sylvan 3" },
    { image: sylGalImg4, alt: "Sylvan 4" },
    { image: sylGalImg5, alt: "Sylvan 5" },
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

        {/* <meta name="twitter:card" content="summary_large_image" />

<meta name="twitter:title" content="Sylvan Retreat - Premium Farmlands" />

<meta

  name="twitter:description"

  content="Discover the serene beauty of Sylvan Retreat and invest in your dream farmland."

/>

<meta

  name="twitter:image"

  content="https://rajavrukshagroup.in/wp-content/uploads/2024/05/RRPL-Horizontal_Final.png"

/> */}

        {/* <link rel="icon" href="/web_logo_new.png" type="image/png" /> */}
      </Helmet>

      <div>
        <div className="header-retreat">
          <Header />
        </div>
        <Suspense
          fallback={
            <div>
              <Loader color="#C1933C" secondaryColor="#C1933C" logo={true} />{" "}
            </div>
          }
        >
          <div className="pagetitle-retreat-new">
            <PageTitle
              pagesub={"Project Details"}
              project_page_syl={"Sylvan-Retreat"}
              PageTitle="Sylvan-Retreat"
              bgImg1={bgImg1}
              bgImg2={bgImg2}
            />
          </div>
          <div className="page-heading-new">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <h1>Farm Smart with Managed Farm Land</h1>
            </FadeContent>
          </div>
          <div className="page-new-description">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Escape the urban chaos and embrace the tranquility of nature.
              Sylvan Retreat is designed to offer a sustainable, eco-friendly
              living experience, where modern comfort blends seamlessly with
              organic farming and rural charm.
            </motion.p>
          </div>
          {/* <div className="sylvan-new-overview">
            <div className="syl-new-card">
              {features.map((feature, index) => (
                <div className="feature-box" key={index}>
                  <img
                    src={feature.img}
                    alt={feature.label}
                    className="feature-icon"
                  />
                  <h3 className="label-title">{feature.label}</h3>
                </div>
              ))}
            </div>
          </div> */}
          <motion.div
            className="sylvan-new-overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="syl-new-card">
              {features.map((feature, index) => (
                <motion.div
                  className="feature-box"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }} // Ensures animation runs only once on scroll
                  whileHover={{ scale: 1.05 }} // Small hover effect
                >
                  <img
                    src={feature.img}
                    alt={feature.label}
                    className="feature-icon"
                  />
                  <h3 className="label-title">{feature.label}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <SylvanNewRunner />
          <div className="syl-new-highlights">
            <SylvanNewHighlights />
          </div>
          <div>
            <SylvanNewAmenities />
          </div>
          <div>
            <SylvanNewWhy />
          </div>
          <div className="SylvanNewGallery">
            <InfiniteMovingCardsDemo
              galleryImages={galleryImages}
              title="Sylvan Retreat"
            />
          </div>
          <div className="sylNew-contact">
            <h2 className="sylNew-contact-title">CONTACT US</h2>
            <div className="sylNew-contact-main-div">
              <ContactUs projectTitle={"Sylvan-Retreat"} />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </Suspense>
      </div>
    </Fragment>
  );
};

export default SylvanRetreatNew;
