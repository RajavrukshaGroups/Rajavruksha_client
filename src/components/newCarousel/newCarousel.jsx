import React, { useState, useEffect } from "react";
import "./carouse.css";

import img1 from "../../components/assets/home_carousel_img1.webp";
import img2 from "../../components/assets/Sylvan_retreat_single_banner_img.webp";
import Mango from "../../components/assets/mangoImg.webp";
import Fruit from "../../components/assets/fruit.webp";
import img6 from "../../components/assets/home_carousel_img6.webp";

function NewCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [img1, img2, Mango, Fruit, img6];
  const text = [
    "Sustainability",
    "Investment Potential",
    "Organic Fruit Farm",
    "Discover Your Agricultural Dream",
    "Expertise in Agriculture",
  ];

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getClass = (index) => {
    if (index === activeIndex) return "focus";
    if (index === (activeIndex - 1 + items.length) % items.length)
      return "big1";
    if (index === (activeIndex + 1) % items.length) return "big2";
    if (index === (activeIndex - 2 + items.length) % items.length)
      return "small1";
    if (index === (activeIndex + 2) % items.length) return "small2";
    return "";
  };

  return (
    <>
      <div className="home-new-carouse ">
        <div className="home-popular">
          <div className="slider-new">
            <div className="slider-prev-new">
              <button onClick={prev} className="prev-btn">
                {"<"}
              </button>
            </div>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <img
                    style={{
                      width: "165px",
                      boxShadow: "0 6px 12px rgba(0, 0, 0, 1)",
                      borderRadius: "10px",
                    }}
                    className={`item ${getClass(index)}`}
                    src={item}
                    alt={`Slide ${index + 1}`}
                  />
                </li>
              ))}
            </ul>
            <div className="slider-next-new">
              <button onClick={next} className="next-btn">
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="description-new-carosel">
        <h2 className="carousel-title">{text[activeIndex]}</h2>
      </div>
    </>
  );
}

export default NewCarousel;
