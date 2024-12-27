import React from "react";
import { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import TermsConditions from "../../components/TermsCondition/termsCondition";
import bg from "../../components/assets/terms-conditions.webp";

const MainTermsCondition = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle PageTitle={"Terms And Conditions"} pageImg={bg} />
      <TermsConditions />
      <Footer />
    </Fragment>
  );
};

export default MainTermsCondition;
