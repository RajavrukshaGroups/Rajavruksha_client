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
        <div className="syl-new-first">
          <div className="syl-new-subpoints">
            <h3 className="syl-pro-points">Vast Project Area: 58 Acres</h3>
            <h4 className="syl-point-exp">
              The project spans an impressive area of 58 acres, providing ample
              space for diverse development and amenities.
            </h4>
          </div>
          <div className="syl-new-subpoints">
            <h3 className="syl-pro-points">
              Wooden House Retreat: Nature's Escape
            </h3>
            <h4 className="syl-point-exp">
              Rajavruksha will engage wooden house for rental basis in weekend
              entertainment program.
            </h4>
          </div>
          <div className="syl-new-subpoints">
            <h3 className="syl-pro-points">Enjoy Mango's Natural Richness!</h3>
            <h4 className="syl-point-exp">
              Our vibrant orchard boasts mango varieties like Malgova, Totapuri,
              Mallika, and Banganapalli, each tree contributing to a rich,
              flavorful harvest.
            </h4>
          </div>
          <div className="syl-new-subpoints">
            <h3 className="syl-pro-points">
              Skillful Passion Fruit Farming Practices
            </h3>
            <h4 className="syl-point-exp">
              Our passion fruit cultivation activities are characterized by
              innovation, expertise, and a deep appreciation for this exotic
              fruit's unique flavor and nutritional benefits.
            </h4>
          </div>
          <div className="syl-new-subpoints">
            <h3 className="syl-pro-points">Rich Soil and Fertile Land</h3>
            <h4 className="syl-point-exp">
              Our farmland is renowned for its rich and fertile soil, providing
              the ideal foundation for a thriving agricultural venture.
            </h4>
          </div>
          <div className="syl-new-subpoints">
            <h3 className="syl-pro-points">Water Resources</h3>
            <h4 className="syl-point-exp">
              Abundant access to natural water sources, ensuring your crops will
              flourish year-round.
            </h4>
          </div>
          <div className="syl-new-subpoints">
            <h3 className="syl-pro-points">Security</h3>
            <h4 className="syl-point-exp">
              We prioritize your investment's safety, providing 24/7 security to
              protect your agricultural pursuits.
            </h4>
          </div>
        </div>

        <div className="sylNew-High-img">
          <img src={sylProImg} alt="Project Highlights 1" />
          <img
            src={sylProImg2}
            alt="Project Highlights 2"
            className="syl-new-stacked-img"
          />
          <img
            src={sylProImg3}
            alt="Project Highlights 2"
            className="syl-new-stacked-img"
          />
        </div>
      </div>

      {/* New Section: Beekeeping, Animal Husbandry, Mango Farming */}
      <div className="syl-extra-section">
        <div className="syl-extra-card">
          <img src={Beekeeping} alt="Beekeeping" />
          <div className="syl-extra-text">
            <h4>Beekeeping: Sustainable Honey Farming</h4>
            <p>
              Ethical honey production supports biodiversity while generating
              high-value products like raw honey, beeswax, and royal jelly. The
              global honey market is booming, offering lucrative opportunities
              for local farmers.
            </p>
          </div>
        </div>

        <div className="syl-extra-card">
          <img src={Animal} alt="Animal Husbandry" />
          <div className="syl-extra-text">
            <h4>Animal Husbandry: Ethical Livestock Care</h4>
            <p>
              A well-managed livestock farm ensures quality meat, dairy, and
              wool production, creating sustainable income sources. The demand
              for organic, ethically raised products is rising, providing
              economic stability for farmers.
            </p>
          </div>
        </div>

        <div className="syl-extra-card">
          <img src={Mango} alt="Mango Farming" />
          <div className="syl-extra-text">
            <h4>Mango Farming: Premium Organic Harvest</h4>
            <p>
              Organically grown mangoes fetch premium prices in both local and
              export markets. Value-added products like dried mango, pulp, and
              juice increase profitability, ensuring long-term financial
              sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SylvanNewHighlights;
