"use client";

import React, { useRef } from "react";
import { InfiniteMovingCards } from "./InfinitePlumeriaGallary";
import "./plumeriaGal.css";
import VariableProximity from "../VariableProximity";

const InfiniteMovingCardsDemo = ({ galleryImages, title }) => {
  const containerRef = useRef(null);
  return (
    <div className="inf-gal-plum h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      {title ? (
        <h2
          className={`${
            title === "EcoNestNew" ? "ecoNew-gallery" : "sylvanNew-gallery"
          }`}
        >
          Gallery
        </h2>
      ) : (
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
      )}

      <InfiniteMovingCards
        items={galleryImages}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default InfiniteMovingCardsDemo;
