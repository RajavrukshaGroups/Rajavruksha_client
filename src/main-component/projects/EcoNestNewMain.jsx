import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import bgImg1 from "../../components/assets/eco_nest_img.jpg";
import bgImg2 from "../../components/assets/layer5.jpg";
import EcoNestNewHeading from "../../components/Projects/EcoNestNew/EcoNestNewHeading";
import EcoNestNewDesc from "../../components/Projects/EcoNestNew/EcoNestNewDesc";
import layer1 from "../../components/assets/Layer1.jpg";
import layer2 from "../../components/assets/Layer2.jpg";
import layer3 from "../../components/assets/Layer3.jpg";
import layer4 from "../../components/assets/Layer4.jpg";
import InfiniteMovingCards from "../../utils/plumeriaGallery/PlumeriaInfiniteGallary";
import "./ecoNestNew.css";
import EcoNewAmenities from "../../components/Projects/EcoNestNew/EcoNewAmenities";

const EcoNestNewMain = () => {
  const galleryImages = [
    { image: layer1, alt: "layer 1" },
    { image: layer2, alt: "layer 2" },
    { image: layer3, alt: "layer 3" },
    { image: layer4, alt: "layer 4" },
    { image: layer2, alt: "layer 5" },
  ];
  return (
    <div>
      <Header />
      <PageTitle
        PageTitle={"Eco-nest"}
        pagesub={"Project Details"}
        bgImg1={bgImg1}
        bgImg2={bgImg2}
      />{" "}
      <EcoNestNewHeading />
      <EcoNestNewDesc />
      <div className="eco-nest-new-infGal">
        <InfiniteMovingCards galleryImages={galleryImages} title="EcoNestNew" />
      </div>
      <EcoNewAmenities />
    </div>
  );
};

export default EcoNestNewMain;
