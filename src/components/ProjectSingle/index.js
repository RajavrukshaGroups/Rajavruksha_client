import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const ProjectSingle = (props) => {
  console.log(props.projectImage);
  return (
    <section className="project-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-top">
              <div className="project-details-top-box">
                <h3>Project Details</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Project</h5>
                      <p>Interior</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Location</h5>
                      <p>UAE</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Year</h5>
                      <p>2020</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Clients</h5>
                      <p>John Doe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-details-top-text">
              <h3>Discover Your Agricultural Dream:</h3>
              <p>
                Escape the hustle and bustle of city life and embark on a
                journey to a tranquil and fertile oasis. Introducing our
                exclusive collection of 25 farmland plots, each a canvas of
                opportunity for you to cultivate your agricultural aspirations.
              </p>
              <h3>Agricultural Canvas Ready for Your Vision</h3>

              <p>
                These 25 farmland plots offer an invitation to realize your
                agricultural dreams. Whether you dream of orchards, Apiculture,
                Organic farms, or a combination of them all, these plots are the
                ideal blank canvas to bring your vision to life. Let your
                imagination run wild and watch your agricultural dreams
                flourish.
              </p>
              <h3>Key Features:</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectSingle;
