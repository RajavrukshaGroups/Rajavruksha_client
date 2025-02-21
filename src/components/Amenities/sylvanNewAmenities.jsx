import paverlSyl from "../../components/assets/paver-syl.png";
import playGroundSyl from "../../components/assets/playgorund-syl.png";
import plumberSyl from "../../components/assets/plumber-syl.png";
import watersystemSyl from "../../components/assets/water-system-syl.png";
import fenceSyl from "../../components/assets/fence-syl.png";
import ecoHouseSyl from "../../components/assets/eco-house-syl.png";
import "./sylNewAmenities.css";

const SylvanNewAmenities = () => {
  return (
    <div className="syl-amenities-section">
      {/* Amenities Section */}
      <div className="syl-amenities-container">
        <h2 className="syl-amenities-title">AMENITIES</h2>
        <div className="syl-amenities-list">
          {[
            { img: paverlSyl, title: "Paver Pathways" },
            { img: playGroundSyl, title: "Playground" },
            { img: plumberSyl, title: "Private Water Supply" },
            { img: watersystemSyl, title: "Water System" },
            { img: fenceSyl, title: "Security and Fencing" },
            { img: ecoHouseSyl, title: "Electricity" },
          ].map((amenity, index) => (
            <div key={index} className="syl-amenity-card">
              <img src={amenity.img} alt={amenity.title} />
              <p>{amenity.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="syl-video-container">
        <h2 className="syl-amenities-title">EXPLORE THROUGH VIDEO</h2>
        <iframe
          className="yt-iframe"
          src="https://www.youtube.com/embed/xz14d8sd7Nc?autoplay=1&loop=1&playlist=xz14d8sd7Nc&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default SylvanNewAmenities;
