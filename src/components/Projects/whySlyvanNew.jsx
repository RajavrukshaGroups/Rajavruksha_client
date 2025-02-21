import plantingSyl from "../../components/assets/planting_syl.png";
import investmentSyl from "../../components/assets/earning_syl.png";
import planetSyl from "../../components/assets/planet-earth_syl.png";
import compliance from "../../components/assets/compliance_syl.png";
import "./whySylvanNew.css";

const SylvanNewWhy = () => {
  const cards = [
    {
      title: "Expertise in Agriculture",
      image: plantingSyl,
      description: "Our team of agricultural experts is ready to assist and advise you in every step of your farming journey."
    },
    {
      title: "Investment Potential",
      image: investmentSyl,
      description: "Farmland is not just a dream; it's a sound financial investment with growing demand in the market."
    },
    {
      title: "Sustainability",
      image: planetSyl,
      description: "We're committed to sustainable farming practices and environmental conservation."
    },
    {
      title: "Legal Compliance",
      image: compliance,
      description: "Hassle-free process in terms of your documentation that carries from our expert team members."
    }
  ];

  return (
    <section className="why-sylvan-section">
      <h2 className="why-sylvan-title">WHY CHOOSE US</h2>
      <div className="why-sylvan-cards">
        {cards.map((card, index) => (
          <div key={index} className="why-sylvan-card">
            <img src={card.image} alt={card.title} className="why-sylvan-image" />
            <h3 className="why-sylvan-card-title">{card.title}</h3>
            <p className="why-sylvan-description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SylvanNewWhy;
