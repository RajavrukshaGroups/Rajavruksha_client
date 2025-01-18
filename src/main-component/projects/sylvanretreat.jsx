import React, { Fragment, Suspense, useEffect } from "react";
import Header from "../../components/header";
import bg from "../../components/assets/Sylan_retreat_new_Banner.webp";
import { Helmet } from "react-helmet";
import { updateMetaTags } from "../../utils/updateMetaTags";
import "../AboutPage/loading.css";
import Loader from "../../components/Loader/loader";

const PageTitle = React.lazy(() => import("../../components/pagetitle"));
const Sylvanretreat = React.lazy(() =>
  import("../../components/Projects/sylvanretreat")
);
const ContactUs = React.lazy(() =>
  import("../../components/Projects/contactform")
);
const Carousel = React.lazy(() =>
  import("../../components/carouselImage/carousel")
);
const Footer = React.lazy(() => import("../../components/footer"));
const NewCarousel = React.lazy(() =>
  import("../../components/newCarousel/newCarousel")
);

function Sylvanretreats() {
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
          project_page_syl={"Sylvan-Retreat"}
        />
        <Sylvanretreat />
        <ContactUs projectTitle={"Sylvan-Retreat"} />
        <Carousel />
        <Footer />
      </Suspense>
    </Fragment>
  );
}

export default Sylvanretreats;
