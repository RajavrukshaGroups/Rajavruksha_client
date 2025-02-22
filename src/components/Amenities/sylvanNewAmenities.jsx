import { motion } from "framer-motion";
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
      {/* Amenities Section with Smooth Animation */}
      <motion.div
        className="syl-amenities-container"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
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
            <motion.div
              key={index}
              className="syl-amenity-card"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            >
              <img src={amenity.img} alt={amenity.title} />
              <p>{amenity.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* YouTube Video Section with Slide-Up Animation */}
      <motion.div
        className="syl-video-container"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <h2 className="syl-amenities-title">EXPLORE THROUGH VIDEO</h2>
        <motion.iframe
          className="yt-iframe"
          src="https://www.youtube.com/embed/xz14d8sd7Nc?autoplay=1&loop=1&playlist=xz14d8sd7Nc&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default SylvanNewAmenities;
