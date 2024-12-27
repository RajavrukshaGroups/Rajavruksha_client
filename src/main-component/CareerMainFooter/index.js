import React from "react";

import { Fragment } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CareerFooter from "../../components/CareerFooter/careerFooter";
import PageTitle from "../../components/pagetitle";
import bg from "../../components/assets/career_page.webp";
import career_desktop from "../../components/assets/career_desktop.jpg"

const CareerMainFooterComp = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle PageTitle={"Current Openings"} pageImg={career_desktop} />
      <CareerFooter />
      <Footer />
    </Fragment>
  );
};

export default CareerMainFooterComp;
