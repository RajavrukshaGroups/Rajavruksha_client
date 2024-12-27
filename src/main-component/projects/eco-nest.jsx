import React, { Fragment, useState } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import EcoNexts from "../../components/Projects/eco-nest";
import Footer from "../../components/footer";
import bg from "../../components/assets/eco_nest_img.webp";
import ContactUs from "../../components/Projects/contactform";
import Layoutguide from "../../components/layoutGuide/layoutguide";
import "./projects.css";
import NewCarousel from "../../components/newCarousel/newCarousel";

function Econext() {
  const contact_page_title = "Eco-Nest";
  return (
    <Fragment>
      <Header />
      <PageTitle
        PageTitle={"Eco-nest"}
        pagesub={"Project Details"}
        pageImg={bg}
      />
      <EcoNexts />
      <div className="flex-container">
        <ContactUs
          page={contact_page_title}
          contact_page_title={contact_page_title}
        />
      </div>
      <Layoutguide />

      <Footer />
    </Fragment>
  );
}

export default Econext;
