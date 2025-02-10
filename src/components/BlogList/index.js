"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation.jsx";
// import Image from "next/image";
// import Image from '../assets/Sylan_retreat_new_Banner.jpg'
import  Images from "../../components/assets/Sylan retreat_Banner1.webp"
function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }>
        <img
          src={Images}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} />
      </ContainerScroll>
    </div>)
  );
}
export default HeroScrollDemo