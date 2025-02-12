import React from "react";
import "../../components/Projects/contactform.css";
import ContactForm from "../../components/ContactFrom";
import Map from "../../components/assets/Map.jpg";
import EcoNestBarScan from "../../components/assets/Econest_Location.png";
import Plumeria from "../../components/assets/plumeria_map.jpg"
const ContactUs = ({ projectTitle, page, contact_page_title,projectPlumeria }) => {
  const status = "project";
  const disableContextMenu = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-page-new-area">
      <div className="containerss">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-6">
            <div className={!!page ? "eco-nest-contact" : "contact-new-form"}>
              <div className="site-new-heading" data-aos="fade-up">
                <h2 className="sub-title">Get A Free Quote</h2>
              </div>
              <div className="responsive-contact-form">
                <ContactForm status={status} />
              </div>
            </div>
          </div>
          {!!projectTitle && (
            <div className="col-lg-6 col-sm-6">
              <div className="contact-image-container">
                <img
                  src={Map}
                  alt="Contact"
                  className="contact-image"
                  onContextMenu={disableContextMenu}
                />
              </div>
            </div>
          )}
           {!!projectPlumeria && (
            <div className="col-lg-6 col-sm-6">
              <div className="contact-image-container">
                <img
                  src={Plumeria}
                  alt="Contact"
                  className="contact-image"
                  onContextMenu={disableContextMenu}
                />
              </div>
            </div>
          )}
          {!!contact_page_title && (
            <div className="col-lg-6 col-sm-6 eco-nest-container">
              <img
                src={EcoNestBarScan}
                alt="bar-scan"
                className="eco-nest-route"
                onContextMenu={disableContextMenu}
              />
              <p className="eco-nest-text text-capitalize">
                scan here to know more about the route map
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
