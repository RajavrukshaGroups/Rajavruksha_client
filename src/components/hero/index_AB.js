import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import VideoModal from "../../components/ModalVideo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "../../img/slider-1.jpg";
import hero2 from "../../img/slider-2.png";
import field from "../../components/assets/field.jpg";
import Container from "../../main-component/Status/status.jsx"


import "./style.css";
class Hero extends Component {
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
      dots: false,
      arrows: false,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    };

    return (
      <section className="hero-area" >
        <div className="hero-slider">
          <div className="hero_arrows">
            <button className="button" onClick={this.previous}>
              <i className="fas fa-angle-left"></i>
            </button>
            <button className="button" onClick={this.next}>
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div className="slide">
              <div
                className="hero-slide-item"
                // style={{ backgroundImage: `url(${field})` }}
                style={{
                      backgroundImage: `url('https://rajavrukshagroup.in/wp-content/uploads/2023/12/pexels-jahoo-clouseau-388415-1536x810.jpg')`
                    }}
                    >
                <div className="container">
                  <div className="hero-text">
                    <h2>
                     Plow Your Capital into<br/>
                      Farmland for Growth
                    </h2>
                    <div className="hero-action">
                      <Link to="/projects" className="cta-btn btn-border">
                        See Projects
                      </Link>
                      <Link to="/contact" className="cta-btn btn-border">
                        Get Contact
                      </Link>
                    </div>
                  </div>
                  <div className="video-main">
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1" />
                        <div className="waves wave-2" />
                        <div className="waves wave-3" />
                      </div>
                    </div>
                    <VideoModal videoId="xz14d8sd7Nc" />
                  </div>
                </div>
              </div>
            </div>
          
           <div className="slide">
              <div
                className="hero-slide-item"
                // style={{ backgroundImage: `url(${field})` }}
                style={{
                      backgroundImage: `url('https://rajavrukshagroup.in/wp-content/uploads/2023/12/pexels-jahoo-clouseau-388415-1536x810.jpg')`
                  }}
              >
                <div className="container">
                  <div className="hero-text">
                    
                    <h2>
                    Invest in Farmland for <br/>
                    Long-Term Prosperity
                    </h2>
                    <div className="hero-action">
                      <Link to="/projects" className="cta-btn btn-border">
                        See Projects
                      </Link>
                      <Link to="/contact" className="cta-btn btn-border">
                        Get Contact
                      </Link>
                    </div>
                  </div>
                  <div className="video-main">
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1" />
                        <div className="waves wave-2" />
                        <div className="waves wave-3" />
                      </div>
                    </div>
                    <VideoModal videoId="xz14d8sd7Nc" />
                  </div>
                </div>
              </div>
              </div> 
          </Slider>
        </div>
        
      </section>
    );
  }
}

export default Hero;
