import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import bgImg1 from "../../components/assets/Sylan_retreat_new_Banner.webp";
import bgImg2 from "../../components/assets/syl-retreat-home-page.jpg";
import land from "../../components/assets/syl-new-acre.png";
import plot from "../../components/assets/syl-new-plots.png";
import club from "../../components/assets/syl-new-night-club.png";
import beeKeep from "../../components/assets/syl-new-beekeeping.png";
import arch from "../../components/assets/syl-new-entrance.png";
import animal from "../../components/assets/syl-new-farm.png";
import fruits from "../../components/assets/syl-new-fruit-tree.png";
import "./sylvanNew.css";
import SylvanNewHighlights from "../../components/Projects/sylvanNew";

const features = [
  { img: land, label: "50+ Acres" },
  { img: plot, label: "30+ Plots" },
  { img: club, label: "Club House" },
  { img: beeKeep, label: "Beekeeping" },
  { img: fruits, label: "Fruit Cultivation" },
  { img: animal, label: "Animal Husbandry" },
];

const SylvanRetreatNew = () => {
  return (
    <div>
      <div className="header-retreat">
        <Header />
      </div>
      <div className="pagetitle-retreat-new">
        <PageTitle
          pagesub={"Project Details"}
          project_page_syl={"Sylvan-Retreat"}
          PageTitle="Sylvan-Retreat"
          bgImg1={bgImg1}
          bgImg2={bgImg2}
        />
      </div>
      <div className="page-heading-new">
        <h1>Farm Smart with Managed Farm Land</h1>
      </div>
      <div className="page-new-description">
        <p>
          The theme of Sylvan Retreat is to create a harmonious and immersive
          living experience that seamlessly integrates with the natural
          surroundings. Envisioned as a sanctuary away from the hustle and
          bustle of urban life, the project aims to celebrate the beauty of
          nature.
        </p>
      </div>

      <div className="sylvan-new-overview">
        <div className="syl-new-card">
          {features.map((feature, index) => (
            <div className="feature-box" key={index}>
              <img
                src={feature.img}
                alt={feature.label}
                className="feature-icon"
              />
              <h3 className="label-title">{feature.label}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="syl-new-highlights">
        <SylvanNewHighlights />
      </div>
    </div>
  );
};

export default SylvanRetreatNew;
