import React from "react";
import FadeContent from "../../utils/FadeContent";
import Plumeria_logo from "../../components/assets/Plumeria_text.png";
import Sylvan_logo from "../../components/assets/Sylvan-official-logo.png";
import Econest_logo from "../../components/assets/Econest-official-logo.png";
import "./style.css";

const PageTitle = (props) => {
  console.log("props", props);
  return (
    <section
      className={props?.title ? "breadcrumb-new" : "breadcrumb-area"}
      style={{
        backgroundImage: `url(${props.pageImg})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inn">
              {props.PageTitle === "Plumeria" ? (
                <div className="plum-img-text">
                  <img
                    src={Plumeria_logo}
                    alt="Plumeria"
                    className="plumeria-text-img"
                  />
                </div>
              ) : props.PageTitle === "Sylvan-Retreat" ? (
                <div className="sylvan-img-text">
                  <img
                    src={Sylvan_logo}
                    alt="Sylvan Retreat"
                    className="sylvan-text-img"
                  />
                </div>
              ) : props.PageTitle === "Eco-nest" ? (
                <div className="econest-img-text">
                  <img
                    src={Econest_logo}
                    alt="Eco-Nest"
                    className="econest-text-img"
                  />
                </div>
              ) : (
                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                >
                  <h1>{props.PageTitle}</h1>
                </FadeContent>
              )}

              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <h2 className="subtitle text-capitalize">
                  {props?.subtitle && props?.subtitle}
                </h2>
                <h2 className="subtitle">
                  {props?.intSubtitle && props?.intSubtitle}
                </h2>
              </FadeContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
