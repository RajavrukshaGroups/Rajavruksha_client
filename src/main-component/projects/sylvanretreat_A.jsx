import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
// import ProjectSingle from '../../components/ProjectSingle'
import Sylvanretreat from "../../components/Projects/sylvanretreat";
import Testimonial from "../../components/testimonial";
import Footer from "../../components/footer";
import bg from "../../components/assets/Sylan_retreat_new_Banner.jpg";
import ContactUs from "../../components/Projects/contactform";
import Carousel from "../../components/carouselImage/carousel";
function Sylvanretreats() {
  const project_page_syl = "Sylvan-Retreat";
  return (
    <Fragment>
      <Header />
      <PageTitle
        // PageTitle={"sylvan-Retreat"}
        pagesub={"Project Details"}
        pageImg={bg}
        project_page_syl={project_page_syl}
      />
      <Sylvanretreat />
      {/* <ContactForm/> */}
      <ContactUs />
      <Carousel />
      <Footer />
    </Fragment>
  );
}

export default Sylvanretreats;
