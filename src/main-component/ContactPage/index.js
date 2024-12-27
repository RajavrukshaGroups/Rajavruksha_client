import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Contactpage from "../../components/Contactpage";
import Footer from "../../components/footer";
// import bg from "../../components/assets/contactedited.jpg";
import bg from "../../components/assets/customer_support.webp";
// import bg from "../../components/assets/contact_page_new.jpg"
import contact_us from "../../components/assets/Contact_us.jpg";

const ContactPage = () => {
  const title = "contact";
  return (
    <Fragment>
      <Header />
      <PageTitle
        PageTitle={"CONTACT"}
        pagesub={"Contact"}
        pageImg={contact_us}
        title={title}
      />
      <Contactpage ContactClasss="contact-container" />
      <Footer />
    </Fragment>
  );
};
export default ContactPage;
