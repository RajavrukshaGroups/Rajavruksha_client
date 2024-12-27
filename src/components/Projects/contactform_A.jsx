import React from "react";
import ContactForm from "../../components/Projects/form";
import "../../components/Projects/contactform.css";

const ContactUs = () => {
  return (
    <div className="contact-page-new-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 pt-1" style={{ height:'532px'}}>
            <div className="contact-new-form ">
              <div className="site-new-heading" data-aos="fade-up">
                {/* <h3 className="sub-title">Request a Quote</h3> */}
                <h2 className="sub-title">Get A Free Quotes</h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
