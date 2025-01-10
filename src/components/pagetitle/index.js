import React from "react";
import { Link } from "react-router-dom";
import FadeContent from "../../utils/FadeContent";
import "./style.css";

const PageTitle = (props) => {
  console.log("props", props);
  return (
    <section
      className={props?.title ? "breadcrumb-new" : "breadcrumb-area"}
      // style={{ backgroundImage: `url(${bg})` }}
      style={{
        backgroundImage: `url(${props.pageImg})`,
        // backgroundSize: "cover",
        // backgroundPosition: "right center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inn">
              {/* <h1>{props.PageTitle}</h1> */}
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <h1>{props.PageTitle}</h1>
              </FadeContent>
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <h1 className="syl-retreat-title text-capitalize">
                  {props?.project_page_syl && props?.project_page_syl}
                </h1>
              </FadeContent>
              {/* <h1 className="syl-retreat-title text-capitalize">
                {props?.project_page_syl && props?.project_page_syl}
              </h1> */}
              {/* <h2 className="subtitle text-capitalize">
                {props?.subtitle && props?.subtitle}
              </h2> */}
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
              {/* <h2 className="subtitle">
                {props?.intSubtitle && props?.intSubtitle}
              </h2> */}
              {/* <ul>
                <li className="home">
                  <Link to="/">
                    <span className="fas fa-home" />
                  </Link>
                </li>
                <li>{props.pagesub}</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
