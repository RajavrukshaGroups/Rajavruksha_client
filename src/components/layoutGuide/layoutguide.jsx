// import Image from "next/image";
import React, { useState } from "react";
import ContactModal from "../Modal/contactModal";
// import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
// import { CardBody, CardContainer, CardItem } from "../ui/";
import EcoNestLayout from "../../components/assets/eco-nest-layout.webp";
import { CardBody, CardContainer, CardItem } from "../3d-Cards/3d-card";
import EcoNest_Brochure from "../../components/assets/RRPL_Eco-nest_Brochure2.pdf";
// import Link from "next/link";
import BlurText from "../../utils/BlurText";
//sss
 function Layoutguide() {
  const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleDownloadBrochure = () => {
        window.open(EcoNest_Brochure, "_blank");
      };
        const disableContextMenu = (e) => {
          e.preventDefault();
        };

          const handleAnimationComplete = () => {
            console.log("Animation completed");
          };

  return (
    <>
    <h1 className="layout-title text-6">
          <BlurText
            text="Crafting Exquisite Design : Your Layout Guide"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-6xl mb-8 flex m-auto justify-center pt-12 pb-5"
          />
        </h1>
    <CardContainer className="inter-var mb-10">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        {/* <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          Make things float in air
        </CardItem> */}
        {/* <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Hover over this card to unleash the power of CSS perspective
        </CardItem> */}
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={EcoNestLayout}
            height="1000"
            width="1000"
            className="h-[699px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-4">
          {/* <CardItem
            translateZ={20}
            // as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem> */}
          <CardItem onClick={handleOpenModal}
            translateZ={20}
            as="button"
            className="flex h-11 justify-center items-center w-64 m-auto px-4 py-2 rounded-xl bg-[#0b3d2c] dark:bg-white dark:text-black text-[#d3b66d] text-xs font-bold">
            Download Brochure
          </CardItem>
        </div>
      </CardBody>
      {showModal && (
        <ContactModal
          show={showModal}
          handleClose={handleCloseModal}
          onSubmitSuccess={handleDownloadBrochure}
        />
      )}
    </CardContainer>
    </>

  );
}
export default Layoutguide;


// import React, { useState } from "react";
// import "../../components/layoutGuide/layoutguide.css";
// import ContactModal from "../Modal/contactModal";
// import EcoNestLayout from "../../components/assets/eco-nest-layout.webp";
// import BlurText from "../../utils/BlurText";
// import EcoNest_Brochure from "../../components/assets/RRPL_Eco-nest_Brochure2.pdf";
// function Layoutguide() {
//   const [showModal, setShowModal] = useState(false);

//   const handleOpenModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const handleDownloadBrochure = () => {
//     window.open(EcoNest_Brochure, "_blank");
//   };

//   const disableContextMenu = (e) => {
//     e.preventDefault();
//   };

//   const handleAnimationComplete = () => {
//     console.log("Animation completed");
//   };

//   return (
//     <div className="layout-container">
//       <div className="">
//         <h1 className="layout-title">
//           <BlurText
//             text="Crafting Exquisite Design : Your Layout Guide"
//             delay={150}
//             animateBy="words"
//             direction="top"
//             onAnimationComplete={handleAnimationComplete}
//             className="text-2xl mb-8"
//           />
//         </h1>
//       </div>
//       <div>
//         <button className="econest-download" onClick={handleOpenModal}>
//           Download Brochure
//         </button>
//       </div>
//       <div className="layout-image" onContextMenu={disableContextMenu}>
//         <img width="80%" height="50%" src={EcoNestLayout} alt="layout-image" />
//       </div>
//       {showModal && (
//         <ContactModal
//           show={showModal}
//           handleClose={handleCloseModal}
//           onSubmitSuccess={handleDownloadBrochure}
//         />
//       )}
//     </div>
//   );
// }

// export default Layoutguide;
