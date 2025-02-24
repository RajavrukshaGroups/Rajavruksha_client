import { motion } from "framer-motion";
import Abbey from "../../../components/assets/Abbey-falls-eco.webp";
import Kumaraparvatha from "../../../components/assets/kumara-parvatha-eco.webp";
import Dubare from "../../../components/assets/Dubare-eco.webp";
import Pushpagiri from "../../../components/assets/pushpagiri-eco.webp";
import GoldenTemple from "../../../components/assets/golden-temple-eco.webp";
import Talakaveri from "../../../components/assets/talakaveri-eco.webp";
import "./EcoNewGallery.css";

const EcoNewGallery = () => {
  const locations = [
    { image: Abbey, name: "Abbey Falls" },
    { image: Kumaraparvatha, name: "Kumaraparvatha View Point" },
    { image: Dubare, name: "Dubare Elephant Camp" },
    { image: Pushpagiri, name: "Pushpagiri Wildlife Sanctuary" },
    { image: GoldenTemple, name: "Golden Temple" },
    { image: Talakaveri, name: "Talakaveri" },
  ];

  return (
    <div className="eco-new-main-div">
      <div className="eco-new-location-high">
        <h2 className="location-high-eco-new">Location Highlights</h2>
      </div>
      <div className="eco-gallery-grid">
        {locations.map((location, index) => (
          <motion.div
            key={index}
            className="eco-gallery-card"
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }} // Animates every time it comes into view
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={location.image}
              alt={location.name}
              className="eco-gallery-image"
            />
            <div className="eco-gallery-caption">{location.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EcoNewGallery;
