import { motion } from "framer-motion";
import "./EcoNewAmenities.css";
import road from "../../../components/assets/road-eco.png";
import water from "../../../components/assets/water-supply-eco.png";
import park from "../../../components/assets/playgorund-eco.png";
import drainage from "../../../components/assets/drainage-eco.png";
import trees from "../../../components/assets/trees-eco.png";
import electricity from "../../../components/assets/underground-eco.png";
import arch from "../../../components/assets/arch-eco.png";

const EcoNewAmenities = () => {
  const amenities = [
    { icon: road, title: "Wide Roads" },
    { icon: water, title: "Water Supply" },
    { icon: park, title: "Children's Park" },
    { icon: drainage, title: "Underground Drainage" },
    { icon: trees, title: "Avenue Plantation" },
    { icon: electricity, title: "Underground Electricity" },
    { icon: arch, title: "Grand Entrance Arch" },
  ];

  return (
    <div className="eco-amenities-wrapper">
      <div className="eco-new-amenities">
        <div className="eco-amenities-heading">
          <h2 className="eco-amenities-title">Amenities</h2>
          <div className="eco-title-line"></div>
        </div>
        <div className="eco-amenities-list">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              className="eco-amenity-card"
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }} // Repeats animation every time the element enters view
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src={amenity.icon}
                alt={amenity.title}
                className="eco-amenity-icon"
              />
              <p className="eco-amenity-title">{amenity.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcoNewAmenities;
