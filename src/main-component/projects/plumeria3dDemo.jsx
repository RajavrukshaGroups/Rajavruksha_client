import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./plumeria-3d";
import layout_plan from "../../components/assets/layout_plumeria.webp";
import ContactModal from "../../components/Modal/contactModal";
import plumeria_plan from "../../components/assets/plumeria_plan.pdf";
export default function ThreeDCardDemo() {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleDownloadLayout = () => {
    window.open(plumeria_plan, "_blank");
  };
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-green-800 border-2 border-green-900 w-auto sm:w-[30rem] h-auto rounded-xl p-6">
        <div className="flex justify-center">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-green-900 dark:text-green-400 text-center"
          >
            Plumeria
          </CardItem>
        </div>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {/* Hover over this card to unleash the power of CSS perspective */}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={layout_plan}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {/* Try now → */}
          </CardItem>
          <CardItem
            onClick={handleOpenModal}
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-green-900 dark:bg-green-800 dark:text-white text-white text-xs font-bold"
          >
            Click Here
          </CardItem>
        </div>
      </CardBody>
      {showModal && (
        <ContactModal
          show={showModal}
          handleClose={handleCloseModal}
          onSubmitSuccess={handleDownloadLayout}
        />
      )}
    </CardContainer>
  );
}
