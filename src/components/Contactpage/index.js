import React from "react";
import ContactForm from "../ContactFrom";
import "./style.css";

const Contactpage = ({ requestAquote }) => {
  let ContactClasss = "container-class";

  const handleLinkClick = (type, value) => {
    if (type === "phone") {
      window.location.href = `tel:${value}`;
    } else if (type === "email") {
      window.location.href = `mailto:${value}`;
    } else if (type === "map") {
      const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
        value
      )}`;
      window.open(googleMapsUrl, "_blank"); // Open map in a new tab
    }
  };
  return (
    <div className="contact-page-area pt-5  ">
      <div className="container new-form">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-6">
            <div className="contact-form responsive-contact-formcontact">
              {/* <div className="site-heading" data-aos="fade-up" >
                <h2 className="section-title">Request a Quote</h2>
              </div> */}
              <ContactForm ContactClasss={ContactClasss} />
            </div>
          </div>
          <div className="contact-body col-lg-5 col-sm-6 mb-5">
            <div className="contact-page-left">
              <h3 className="contact-info-det">Contact info</h3>
              <div className="contact-info">
                <div className="single-map-info" data-aos="fade-up">
                  <div className="map-info-icon">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="map-info-text">
                    <h3 className="contact-info-head">Head office</h3>
                    <p
                      className="email-link"
                      onClick={() => {
                        handleLinkClick("map", `Rajavruksha Groups`);
                      }}
                    >
                      #35 A, Kowdi, 2nd Floor, 1st Main Road, Chiranjeevi
                      Layout, Hebbal Kempapura, Bengaluru-560024
                    </p>
                  </div>
                </div>
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fas fa-phone-alt" />
                  </div>
                  <div className="contact-info-text">
                    <h3 className="contact-info-head">Phone</h3>
                    <p
                      className="email-link"
                      onClick={() =>
                        handleLinkClick("phone", "+91 8549 955 955")
                      }
                    >
                      +91 8549 955 955
                    </p>
                    {/* <p>(+09) 123 4567 89</p> */}
                  </div>
                </div>
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fas fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <h3 className="contact-info-head">Email</h3>
                    <p
                      className="email-link"
                      onClick={() =>
                        handleLinkClick("email", "enquiry@rajavrukshagroup.in")
                      }
                    >
                      enquiry@rajavrukshagroup.in
                    </p>
                    {/* <p>support@company.com</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row iframe-container">
            <div className="col-lg-6 col-sm-12">
              <div className="contact-page-right">
                <iframe
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=X-Factor%20Coworkspaces%2035a,%201st%20Cross%20Rd,%20Chiranjeevi%20Layout,%20Hebbal%20Kempapura,%20Bengaluru,%20Karnataka%20560024+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps systems</a>
                </iframe>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="crm-box">
                <h2 className="crm-heading">Solid Performers CRM</h2>
                <iframe
                  id="lead-form"
                  src="https://account.solidperformers.com/capture_form_data/MTAxNQ=="
                  style={{ border: "0px", height: "600px", width: "100%" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
