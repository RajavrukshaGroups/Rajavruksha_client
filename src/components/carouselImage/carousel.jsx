import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import gal_img1 from "../../components/assets/syl-retreat_gallary_img1.webp";
import gal_img2 from "../../components/assets/syl-retreat_gallary_img2.webp";
import gal_img3 from "../../components/assets/syl-retreat_gallary_img3.webp";
import gal_img4 from "../../components/assets/syl-retreat_gallary_img4.webp";
import gal_img5 from "../../components/assets/syl-retreat_gallary_img5.webp";

class TestimonialNewSlider extends Component {
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
      speed: 900,
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
        carouselImg: gal_img1,
      },
      {
        carouselImg: gal_img2,
      },
      {
        carouselImg: gal_img3,
      },
      {
        carouselImg: gal_img4,
      },
      {
        carouselImg: gal_img5,
      },
    ];

    const disableContextMenu = (e) => {
      e.preventDefault();
    };

    return (
      <div className="testimonial-area" data-aos="fade-up">
        <div className="containerr gal-cont">
          <div className="row">
            <div className="col-lg-12">
              <h2
                style={{ textAlign: "center", lineHeight: "45px" }}
                className="gallery-title"
              >
                Gallery
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                style={{ paddingLeft: "115px", paddingRight: "115px" }}
                className="testimonial-new-slider"
              >
                <Slider
                  style={{ marginBottom: "30px" }}
                  ref={(c) => (this.slider = c)}
                  {...settings}
                >
                  {customerFeedback.map((value, index) => {
                    return (
                      <div className="slide">
                        <div
                          className="gallery-testimonial"
                          onContextMenu={disableContextMenu}
                        >
                          <img src={value.carouselImg} alt={"namesss"} />
                        </div>
                      </div>
                    );
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

export default TestimonialNewSlider;
