import { motion } from "framer-motion";
import "./EcoNestNewDesc.css";
import natureIcon from "../../../components/assets/nature-eco.png";
import secureIcon from "../../../components/assets/secure-eco.png";
import investmentIcon from "../../../components/assets/saving-eco.png";

const EcoNestNewDesc = () => {
  const points = [
    {
      title: "Serene Natural Setting",
      description:
        "Nestled in the heart of Coorg, Eco Nest offers a peaceful escape surrounded by lush greenery and rolling hills, blending modern living with nature.",
      icon: natureIcon,
      highlights: [
        "2 Acres of Lush Land",
        "30 Premium Plots of 1200 Sqft Each",
      ],
    },
    {
      title: "Secure Investment",
      description:
        "Approved by the Kodagu Urban Development Authority (KUDA), ensuring your investment is safe and aligned with all local regulations.",
      icon: secureIcon,
      highlights: ["Approved by KUDA", "Secure Legal Documentation"],
    },
    {
      title: "Affordable Luxury",
      description:
        "Claim your piece of paradise with premium plots available for just Rs. 7,49,000/-, offering exceptional value in a dream location.",
      icon: investmentIcon,
      highlights: ["Rs. 7,49,000/-", "Exceptional Value", "Prime Location"],
    },
  ];

  //   return (
  //     <div className="eco-new-description">
  //       <h2 className="eco-why-title">Why Eco Nest?</h2>
  //       <div className="eco-points-container">
  //         {points.map((point, index) => (
  //           <motion.div
  //             key={index}
  //             className="eco-point"
  //             initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
  //             whileInView={{ opacity: 1, x: 0 }}
  //             transition={{ duration: 0.8, ease: "easeOut" }}
  //           >
  //             <img
  //               src={point.icon}
  //               alt={point.title}
  //               className="eco-point-icon"
  //             />
  //             <h3 className="eco-point-title">{point.title}</h3>
  //             <p className="eco-point-description">{point.description}</p>
  //             <div className="eco-point-highlights">
  //               {point.highlights.map((highlight, idx) => (
  //                 <span key={idx} className="eco-highlight-badge">
  //                   {highlight}
  //                 </span>
  //               ))}
  //             </div>
  //           </motion.div>
  //         ))}
  //       </div>
  //     </div>
  //   );

  return (
    <div className="eco-new-description">
      <div className="eco-title-wrapper">
        <h2 className="eco-why-title">Why Eco Nest?</h2>
      </div>
      <div className="eco-points-container">
        {points.map((point, index) => (
          <motion.div
            key={index}
            className="eco-point"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={point.icon}
              alt={point.title}
              className="eco-point-icon"
            />
            <h3 className="eco-point-title">{point.title}</h3>
            <p className="eco-point-description">{point.description}</p>
            <div className="eco-point-highlights">
              {point.highlights.map((highlight, idx) => (
                <span key={idx} className="eco-highlight-badge">
                  {highlight}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EcoNestNewDesc;
