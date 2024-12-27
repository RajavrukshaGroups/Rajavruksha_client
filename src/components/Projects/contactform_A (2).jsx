import React from "react";
// import ContactForm from "../../components/Projects/form";
import "../../components/Projects/contactform.css";
import ContactForm from "../../components/ContactFrom";
import Map from "../../components/assets/Map.jpg";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const ContactUs = ({ onFormSubmit }) => {
  const status = "project";
  return (
    <div className="contact-page-new-area">
      <div className="containerss">
        <div className="row align-items-center">
          {/* Left Column: Image */}
          {/* Right Column: Form */}
          <div className="col-lg-6 col-sm-6">
            <div className="contact-new-form">
              <div className="site-new-heading" data-aos="fade-up">
                <h2 className="sub-title">Get A Free Quote</h2>
              </div>
              <div className="responsive-contact-form">
                <ContactForm status={status} />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6">
            <div className="contact-image-container">
              <img src={Map} alt="Contact" className="contact-image" />
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="contact-page-new-area">
    //   <div className="containerss">
    //     <div className="row align-items-center">
    //       <div className="col-lg-12 pt-1" style={{ height: "532px" }}>
    //         <div className="contact-new-form ">
    //           <div className="site-new-heading" data-aos="fade-up">
    //             {/* <h3 className="sub-title">Request a Quote</h3> */}
    //             <h2 className="sub-title">Get A Free Quotes</h2>
    //           </div>
    //           <ContactForm/>
    //           {/* <ContactForm  isMessageSent={ima/> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ContactUs;
