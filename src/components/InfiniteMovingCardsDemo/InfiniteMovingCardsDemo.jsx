"use client";

import React from "react";
import { InfiniteMovingCards } from "../../utils/InfiniteMovingCards";
import "./style.css"

export function InfiniteMovingCardsDemo() {
  return (
    <div className="inf-card h-[20rem] sm:mt-4 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Choosing Rajavruksha for our farm investment was a wise decision. Professionalism and trustworthiness set them apart.",
    name: "Smitha",
    title: "Property Manager",
  },
  {
    quote:
      "Our experience with Rajavruksha was outstanding. Their dedicated team ensured a smooth journey to our farm ownership.",
    name: "Suresh N",
    title: "Property Consultant",
  },
  {
    quote:
      "Rajavruksha made our dream of owning a farm a reality. Their transparent dealings and commitment is outstanding and remarkable.",
    name: "Manasa V",
    title: "Real Estate Investor",
  },
  {
    quote:
      "Exceptional service and integrity define Rajavruksha. The process of buying our farm was seamless, satisfying and gratifying.",
    name: "Roshan Kumar",
    title: "Land Surveyor",
  },
];
