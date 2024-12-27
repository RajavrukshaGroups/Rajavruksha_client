import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import bg from "../../components/assets/bde_intern.webp";
import Footer from "../../components/footer/index.js";
import BdeInternCareer from "../../components/careers/bdeIntCareer.jsx";
import career_desktop from "../../components/assets/career_desktop.jpg";

const BdeInternCareerMain = () => {
  const intSubtitle = "Business Development Executive Intern";
  return (
    <Fragment>
      <Header />
      <PageTitle
        PageTitle={"Career"}
        pagesub={"career"}
        pageImg={career_desktop}
        intSubtitle={intSubtitle}
      />
      <BdeInternCareer />
      <Footer />
    </Fragment>
  );
};

export default BdeInternCareerMain;
