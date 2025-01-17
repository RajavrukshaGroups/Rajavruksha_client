"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import layer1 from "../../components/assets/Layer1.jpg";
import layer2 from "../../components/assets/Layer2.jpg";
import layer3 from "../../components/assets/Layer3.jpg";
import layer4 from "../../components/assets/Layer4.jpg";
import "./cards.css";

export function ThreeDCardDemo() {
  return (
    <div className="card-wrapper">
      <CardContainer className="inter-var card-item">
        <CardBody className="card-body relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
          <CardItem translateZ="100" className="card-img-wrapper w-full mt-4">
            <img
              src={layer1}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="layer1"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var card-item">
        <CardBody className="card-body  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
          <CardItem translateZ="100" className="w-full mt-4 card-img-wrapper">
            <img
              src={layer2}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="layer2"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var card-item">
        <CardBody className="card-body relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
          <CardItem translateZ="100" className="w-full mt-4 card-img-wrapper">
            <img
              src={layer3}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl card-img"
              alt="layer3"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var card-item">
        <CardBody className="card-body relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
          <CardItem translateZ="100" className="w-full mt-4 card-img-wrapper">
            <img
              src={layer4}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl card-img"
              alt="layer4"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
