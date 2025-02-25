import { text } from "@fortawesome/fontawesome-svg-core";
import "./SylvanNewRunner.css";
import {
  IconPlaneDeparture,
  IconBusStop,
  IconReceiptRupee,
  IconSchool,
  IconBuildingFactory2,
  IconBuildingHospital,
  IconCar,
  icons,
  IconRoad,
} from "@tabler/icons-react";

const SylvanNewRunner = () => {
  const points = [
    { text: "Located Near State Highway-09", icon: <IconRoad size={18} /> },
    {
      text: "25-Minute Drive From KIAL",
      icon: <IconPlaneDeparture size={18} />,
    },
    {
      text: "6 KM From Shri Ghati Subrahmanya Temple",
      icon: <IconCar size={18} />,
    },
    {
      text: "KHIR City Is Only 15 Minutes Away",
      icon: <IconBuildingFactory2 size={18} />,
    },
  ];
  return (
    <div className="sylvan-runner-wrapper">
      <div className="sylvan-runner-track">
        <div className="sylvan-runner-content">
          {points.map((point, index) => (
            <span key={index} className="sylvan-runner-point">
              <div className="sylvan-runner-icon">{point.icon}</div>
              <div className="sylvan-runner-text">{point.text}</div>
            </span>
          ))}
        </div>
        <div className="sylvan-runner-content">
          {points.map((point, index) => (
            <span key={index} className="sylvan-runner-point">
              <div className="sylvan-runner-icon">{point.icon}</div>
              <div className="sylvan-runner-text">{point.text}</div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SylvanNewRunner;
