import { motion } from "framer-motion";
import sylProImg from "../../components/assets/Sylan_retreat_new_Banner.jpg";
import sylProImg2 from "../../components/assets/syl-retreat_gallary_img1.webp";
import sylProImg3 from "../../components/assets/syl-retreat_gallary_img2.webp";
import Beekeeping from "../../components/assets/3.jpg";
import Mango from "../../components/assets/mangoImg.webp";
import Animal from "../../components/assets/animal.webp";
import "./SylvanNewHighlights.css";

const SylvanNewHighlights = () => {
  return (
    <div className="syl-new-pro-highLights">
      <h2 className="syl-new-highlight-head">Project Highlights</h2>
      <div className="syl-new-container">
        {/* Key Points Section - Ultra Smooth Slide from Left */}
        <motion.div
          className="syl-new-first"
          initial={{ x: -150, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {[
            {
              title: "Vast Project Area: 58 Acres",
              description:
                "The project spans an impressive area of 58 acres, providing ample space for diverse development and amenities.",
            },
            {
              title: "Wooden House Retreat: Nature's Escape",
              description:
                "Rajavruksha will engage wooden house for rental basis in weekend entertainment program.",
            },
            {
              title: "Enjoy Mango's Natural Richness!",
              description:
                "Our vibrant orchard boasts mango varieties like Malgova, Totapuri, Mallika, and Banganapalli, each tree contributing to a rich, flavorful harvest.",
            },
            {
              title: "Skillful Passion Fruit Farming Practices",
              description:
                "Our passion fruit cultivation activities are characterized by innovation, expertise, and a deep appreciation for this exotic fruit's unique flavor and nutritional benefits.",
            },
            {
              title: "Rich Soil and Fertile Land",
              description:
                "Our farmland is renowned for its rich and fertile soil, providing the ideal foundation for a thriving agricultural venture.",
            },
            {
              title: "Water Resources",
              description:
                "Abundant access to natural water sources, ensuring your crops will flourish year-round.",
            },
            {
              title: "Security",
              description:
                "We prioritize your investment's safety, providing 24/7 security to protect your agricultural pursuits.",
            },
          ].map((point, index) => (
            <motion.div
              className="syl-new-subpoints"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            >
              <h3 className="syl-pro-points">{point.title}</h3>
              <h4 className="syl-point-exp">{point.description}</h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Images Section - Smooth Slide from Right */}
        <motion.div
          className="sylNew-High-img"
          initial={{ x: 150, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img src={sylProImg} alt="Project Highlights 1" />
          <img
            src={sylProImg2}
            alt="Project Highlights 2"
            className="syl-new-stacked-img"
          />
          <img
            src={sylProImg3}
            alt="Project Highlights 3"
            className="syl-new-stacked-img"
          />
        </motion.div>
      </div>

      {/* Extra Section: Smooth Fade Up with Delay */}
      <div className="syl-extra-section">
        {[
          {
            img: Beekeeping,
            title: "Beekeeping: Sustainable Honey Farming",
            desc: "Ethical honey production supports biodiversity while generating high-value products like raw honey, beeswax, and royal jelly. The global honey market is booming, offering lucrative opportunities for local farmers.",
          },
          {
            img: Animal,
            title: "Animal Husbandry: Ethical Livestock Care",
            desc: "A well-managed livestock farm ensures quality dairy and wool production, creating sustainable income sources. The demand for organic, ethically raised products is rising, providing economic stability for farmers.",
          },
          {
            img: Mango,
            title: "Mango Farming: Premium Organic Harvest",
            desc: "Organically grown mangoes fetch premium prices in both local and export markets. Value-added products like dried mango, pulp, and juice increase profitability, ensuring long-term financial sustainability.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="syl-extra-card"
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            <img src={card.img} alt={card.title} />
            <div className="syl-extra-text">
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SylvanNewHighlights;
