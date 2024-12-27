import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import bg from "../../components/assets/bde.webp";
import Footer from "../../components/footer/index.js";
import CareerForm from "../../components/careers/jobCareer.jsx";
import career_desktop from "../../components/assets/career_desktop.jpg";

const BdeCareerMain = () => {
  const subtitle = "Business Development Executive";
  return (
    <Fragment>
      <Header />
      <PageTitle
        PageTitle={"Career"}
        pagesub={"career"}
        subtitle={subtitle}
        pageImg={career_desktop}
      />
      <CareerForm />
      <Footer />
    </Fragment>
  );
};

export default BdeCareerMain;
