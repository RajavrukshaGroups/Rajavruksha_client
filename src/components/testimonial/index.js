import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonial1 from "../../img/testimonial-1.png";
import testimonial2 from "../../img/testimonial-2.png";
import testimonial3 from "../../img/testimonial-3.png";
import icon from "../../img/gridicons_quote.svg";

import "./style.css";

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: true,
      arrows: false,
      speed: 1200,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: false,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    const customerFeedback = [
      {
        name: 'Smitha',
        telling: 'Choosing Rajavruksha for our farm investment was a wise decision. Professionalism and trustworthiness set them apart.',
        proffession:'Property Manager'
      
      },
      {
        name: 'Suresh N',
        telling: 'Our experience with Rajavruksha was outstanding. Their dedicated team ensured a smooth journey to our farm ownership.',
        proffession:'Property Consultant'

      },
      {
        name: 'Manasa V',
        telling: 'Rajavruksha made our dream of owning a farm a reality. Their transparent dealings and commitment stood out.',
        proffession:'Real Estate Investor'
      },
      {
        name: 'Roshan Kumar',
        telling: 'Exceptional service and integrity define Rajavruksha. The process of buying our farm was seamless and gratifying.',
        proffession:'Land Surveyor'
      },
    ];
    


    return (
      <div   className="testimonial-area pb-5" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site-heading">
                <h3 className="testimonial-subtitle">Hear From</h3>
                <h2  className="testimonial-title">Our Happy Customers !</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
          <div className="tetimonial-slider">
                <Slider ref={(c) => (this.slider = c)} {...settings}>
                  {customerFeedback.map((value,index)=>{
                    return (
                      <div className="slide">
                      <div className="single-testimonial">
                        <div className="testimonial-text">
                          <img src={icon} alt="icon" />
                          <p>
                           {value.telling}
                          </p>
                        </div>
                        <div className="testimonial-meta">
                          {/* <img src={testimonial1} alt="img" /> */}
                          <div className="testimonial-author">
                            <p className="author-name">{value.name}</p>
                            <p>{value.proffession}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                     )
                  })}                  
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
