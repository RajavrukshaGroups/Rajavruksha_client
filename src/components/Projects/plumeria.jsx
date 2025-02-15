import { useRef } from "react";
import "./plumeria.css";
import { BentoGridDemo } from "./plumeriaGridItem";
import VariableProximity from "../../utils/VariableProximity";
const Plumeria = () => {
  const containerRef = useRef(null);
  return (
    <div>
      <div className="key-highlights">
        <div className="highlights-title">
          <div ref={containerRef} style={{ position: "relative" }}>
            <VariableProximity
              label={"Key Highlights"}
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 800, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>
        </div>
        <div className="key-highlight-comp">
          <BentoGridDemo />
        </div>
      </div>
    </div>
  );
};

export default Plumeria;
