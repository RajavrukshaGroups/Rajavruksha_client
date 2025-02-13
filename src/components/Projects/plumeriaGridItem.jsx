import React from "react";
import { BentoGrid, BentoGridItem } from "./plumeriaGrid";
import airport from "../../components/assets/airport.jpg";
import metro from "../../components/assets/metro.jpg";
import sez from "../../components/assets/sez.webp";
import college from "../../components/assets/college.webp";
import industry from "../../components/assets/industry.webp";
import healthcare from "../../components/assets/healthcare.webp";
import nandi from "../../components/assets/nandihills.webp";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconPlaneDeparture,
  IconBusStop,
  IconReceiptRupee,
  IconSchool,
  IconBuildingFactory2,
  IconBuildingHospital,
  IconCar,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Proximity to KIAL",
    description:
      "Doddaballapura is located close to the Kempegowda International Airport.",
    header: (
      <img src={airport} className="w-full h-full object-cover rounded-xl" />
    ),
    icon: <IconPlaneDeparture className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Good Connectivity",
    description:
      "STRR,upcoming Metro rail connectivity and Sub-Urban Railway network.",
    header: (
      <img
        src={metro}
        className="object-cover rounded-xl"
        style={{ height: "150px" }}
      />
    ),
    icon: <IconBusStop className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Educational Institutions",
    description:
      "Proximus to prestigious engineering and management institutions.",
    header: (
      <img
        src={college}
        className="object-cover rounded-xl"
        style={{ height: "150px" }}
      />
    ),
    icon: <IconSchool className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Growing ITER/SEZ Sector",
    description:
      "Increases demand for residential properties in the region. For example, Foxconn is setting up an iPhone assembly plant (Project Elephant) in Karnataka, located in Doddaballapur.",
    header: (
      <img
        src={sez}
        className="object-cover rounded-xl"
        style={{ height: "150px" }}
      />
    ),
    icon: <IconReceiptRupee className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "KIADB Industrial Sectors",
    description: "Doddaballapura is home to automobile,apparel park etc..",
    header: (
      <img
        src={industry}
        className="object-cover rounded-xl"
        style={{ height: "150px" }}
      />
    ),
    icon: <IconBuildingFactory2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Healthcare Services",
    description: "enriched with hospitals providing excellent services",
    header: (
      <img
        src={healthcare}
        className="object-cover rounded-xl"
        style={{ height: "150px" }}
      />
    ),
    icon: <IconBuildingHospital className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tourism Potential",
    description:
      "North Bangalore has tourists attractions such as Ghati Subhramanya temple and Nandi Hills etc..",
    header: (
      <img
        src={nandi}
        className="object-cover rounded-xl"
        style={{ height: "150px" }}
      />
    ),
    icon: <IconCar className="h-4 w-4 text-neutral-500" />,
  },
];
