import { ThreeDCardDemo } from "../../dowloadBrochure/ecoNest";
import EcoNestBarScan from "../../../components/assets/Econest_Location.png";
import "./EcoNewPageContact.css";
import ContactUs from "../contactform";

const EcoNewPageContact = () => {
  return (
    <div className="main-econew-div">
      <div className="ecoNew-contact">
        <h2 className="ecoNew-contact-headline">Contact Us</h2>
      </div>
      <div className="ecoNew-brochure">
        <div className="ecoNew-card-section">
          <ThreeDCardDemo />
        </div>
        <div className="eco-scan-contact">
          <ContactUs page={"Eco-Nest"} contact_page_title={"Eco-Nest"} />
        </div>
      </div>
    </div>
  );
};

export default EcoNewPageContact;
