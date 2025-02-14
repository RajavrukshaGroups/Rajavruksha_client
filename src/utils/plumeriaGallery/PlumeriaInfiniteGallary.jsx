"use client";

import React, { useRef } from "react";
import { InfiniteMovingCards } from "./InfinitePlumeriaGallary";
import plumeria_1 from "../../components/assets/plumeria_1.webp";
import plumeria_2 from "../../components/assets/plumeria_2.webp";
import plumeria_3 from "../../components/assets/plumeria_3.webp";
import plumeria_4 from "../../components/assets/plumeria_4.webp";
import plumeria_5 from "../../components/assets/plumeria_5.webp";
import "./plumeriaGal.css";
import VariableProximity from "../VariableProximity";

const galleryImages = [
  { image: plumeria_1, alt: "Plumeria 1" },
  { image: plumeria_2, alt: "Plumeria 2" },
  { image: plumeria_3, alt: "Plumeria 3" },
  { image: plumeria_4, alt: "Plumeria 4" },
  { image: plumeria_5, alt: "Plumeria 5" },
];
const InfiniteMovingCardsDemo = () => {
  const containerRef = useRef(null);

  return (
    <div className="inf-gal-plum h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="plumeria-gal-title">
        <div ref={containerRef} style={{ position: "relative" }}>
          <VariableProximity
            label={"Gallery"}
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 800, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
      </h1>
      <InfiniteMovingCards
        items={galleryImages}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default InfiniteMovingCardsDemo;
