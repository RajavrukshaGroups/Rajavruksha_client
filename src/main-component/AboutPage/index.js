import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Feature from "../../components/feature";
import Partners from "../../components/partners";
import Expertise from "../../components/expertise";
import Team from "../../components/team";
import Footer from "../../components/footer";
import bg from "../../components/assets/project_page.webp";
import About from "../../components/about";
import Animation from "../../components/reactIcons/journeySection";

let Text =
  "At Rajavrusksha we truly appreciate the wonders of nature. Understand the tranquility it can bring to ones existence. Our purpose is to turn your aspiration of owning a plot of land into an experience by providing selected and well maintained farm plots in the scenic surroundings of Bangalore.";

const AboutPage = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle PageTitle={"About Us"} pagesub={"About"} pageImg={bg} />
      <About text={Text} image={bg} />
      <Animation />
      <Footer />
    </Fragment>
  );
};
export default AboutPage;
