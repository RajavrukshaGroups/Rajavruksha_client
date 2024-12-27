import React from "react";
import { Fragment } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import bg from "../../components/assets/privacy_policy.webp";

const MainPrivacyPolicy = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle PageTitle={"Privacy Policy"} pageImg={bg} />
      <PrivacyPolicy />
      <Footer />
    </Fragment>
  );
};

export default MainPrivacyPolicy;
