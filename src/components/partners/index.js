import React from "react";

import partnerImg1 from "../../img/partner-1.png";
import partnerImg2 from "../../img/partner-2.png";
import partnerImg3 from "../../img/partner-3.png";
import partnerImg4 from "../../img/partner-4.png";
import partnerImg5 from "../../img/partner-5.png";
import partnerImg6 from "../../img/partner-6.png";
import partnerImg7 from "../../img/partner-7.png";

import "./style.css";

const Partners = () => {
  return (
    <div  className="partners-area pt-5" >
  <div className="container" >
    <div className="row">
      {/* Left side content */}
      <div  className="col-lg-4 d-flex justify-content-start align-items-center" style={{textAlign:'center'}}>
        <h1>Your Journey Begins Here</h1>
      </div>
      {/* Right side content */}
      <div className="col-lg-4 d-flex justify-content-start align-items-center" >
        <h6 style={{color:'#777777'}}>
          We guide you in selecting the best property that aligns with your vision and goals. With our extensive knowledge and unwavering commitment, we’ll ensure you make an informed decision that paves the way for a thriving and prosperous future.
        </h6>
      </div>
    </div>
  </div>
</div>
  );
};

export default Partners;
