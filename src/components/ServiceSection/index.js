
"use client"

import { useEffect, useRef, useState } from "react"
import { Search, Users, TrendingUp, Lightbulb } from "lucide-react"
import FadeContent from "../../utils/FadeContent";
const steps = [
  {
    id: "01",
    title: "PRELIMINARY RESEARCH",
    description:
      "In the initial phase of the project, we will conduct preliminary research to gather essential insights and information.",
    icon: Search,
    color: "orange",
    bgGradient: "from-orange-500 to-orange-600",
    shadowColor: "shadow-orange-500/50",
    ringColor: "ring-orange-400/30",
  },
  {
    id: "02",
    title: "STAKEHOLDER ENGAGEMENT",
    description:
      "In the second phase, we will engage with stakeholders to identify key perspectives and ensure their input is incorporated into the process.",
    icon: Users,
    color: "red",
    bgGradient: "from-red-500 to-red-600",
    shadowColor: "shadow-red-500/50",
    ringColor: "ring-red-400/30",
  },
  {
    id: "03",
    title: "DATA EVALUATION",
    description:
      "In the third phase, we will perform data analysis to identify key patterns and insights that will inform our next steps.",
    icon: TrendingUp,
    color: "purple",
    bgGradient: "from-purple-600 to-purple-700",
    shadowColor: "shadow-purple-600/50",
    ringColor: "ring-purple-500/30",
  },
  {
    id: "04",
    title: "COMMUNICATION OPTIMIZATION",
    description:
      "In the fourth phase, we will communicate our findings to relevant stakeholders to share insights and recommendations.",
    icon: Lightbulb,
    color: "teal",
    bgGradient: "from-teal-500 to-teal-600",
    shadowColor: "shadow-teal-500/50",
    ringColor: "ring-teal-400/30",
  },
]

export default function ServiceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
       <FadeContent
        blur={true}
        duration={900}
        easing="ease-out"
        initialOpacity={0}
      >
        <h1
          className="work-title"
          style={{ textAlign: "center", marginTop: "29px" }}
        >
          Our Working Process
        </h1>
      </FadeContent>
    <div ref={containerRef} className="w-full max-w-7xl mx-auto pt-14 pb-14">
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-start justify-center gap-0">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-start">
            {/* Step Card */}
            <div
              className={`flex flex-col items-center transition-all duration-700 delay-${index * 150} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              >
              {/* Circle Badge with 3D Effect */}
              <div className="relative group">
                {/* Outer ring for hover effect */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 scale-110`}
                  />

                {/* Main circle container with 3D shadow */}
                <div className="relative">
                  {/* Bottom shadow layer */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.bgGradient} translate-y-2 blur-md ${step.shadowColor} shadow-2xl`}
                    />

                  {/* Middle shadow layer */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.bgGradient} translate-y-1 opacity-60`}
                    />

                  {/* Top circle with white background */}
                  <div
                    className={`relative w-40 h-40 rounded-full bg-white flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 ${step.shadowColor} shadow-xl ring-8 ${step.ringColor} ring-offset-4`}
                    >
                    {/* Icon */}
                    <step.icon
                      className={`w-16 h-16 text-gray-700 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                      strokeWidth={1.5}
                      />
                  </div>
                </div>
              </div>

              {/* Step Number Badge */}
              <div
                className={`mt-6 px-4 py-1.5 rounded-md bg-gradient-to-r ${step.bgGradient} text-white font-bold text-sm tracking-wider shadow-lg transform transition-all duration-500 group-hover:scale-105`}
                >
                {step.id}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-sm font-bold text-gray-800 tracking-wide text-center max-w-[200px] transition-colors duration-300 group-hover:text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-xs text-gray-600 text-center max-w-[220px] leading-relaxed">{step.description}</p>
            </div>

            {/* Arrow Connector */}
            {index < steps.length - 1 && (
              <div
              className={`flex items-center justify-center mt-20 mx-4 transition-all duration-700 delay-${
                index * 150 + 300
              } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              >
                <div className="relative">
                  {/* Animated arrow */}
                  <svg width="60" height="40" viewBox="0 0 60 40" className="animate-pulse-slow">
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop
                          offset="0%"
                          className={`text-${steps[index].color}-500`}
                          stopColor="currentColor"
                          stopOpacity="0.6"
                          />
                        <stop
                          offset="100%"
                          className={`text-${steps[index + 1].color}-500`}
                          stopColor="currentColor"
                          stopOpacity="0.6"
                          />
                      </linearGradient>
                    </defs>
                    {/* Arrow line */}
                    <line
                      x1="0"
                      y1="20"
                      x2="45"
                      y2="20"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="3"
                      className="animate-draw-line"
                      />
                    {/* Arrow head */}
                    <polygon
                      points="45,12 60,20 45,28"
                      className={`fill-${steps[index + 1].color}-500`}
                      fill="currentColor"
                      fillOpacity="0.6"
                      />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-12">
        {steps.map((step, index) => (
          <div
          key={step.id}
          className={`flex flex-col items-center transition-all duration-700 delay-${index * 150} ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          >
            {/* Circle Badge with 3D Effect */}
            <div className="relative group">
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 scale-110`}
              />

              <div className="relative">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.bgGradient} translate-y-2 blur-md ${step.shadowColor} shadow-2xl`}
                  />

                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.bgGradient} translate-y-1 opacity-60`}
                  />

                <div
                  className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 ${step.shadowColor} shadow-xl ring-8 ${step.ringColor} ring-offset-4`}
                  >
                  <step.icon
                    className={`w-12 h-12 md:w-16 md:h-16 text-gray-700 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    strokeWidth={1.5}
                    />
                </div>
              </div>
            </div>

            <div
              className={`mt-6 px-4 py-1.5 rounded-md bg-gradient-to-r ${step.bgGradient} text-white font-bold text-sm tracking-wider shadow-lg transform transition-all duration-500 group-hover:scale-105`}
              >
              {step.id}
            </div>

            <h3 className="mt-4 text-sm font-bold text-gray-800 tracking-wide text-center max-w-[200px]">
              {step.title}
            </h3>

            <p className="mt-3 text-xs text-gray-600 text-center max-w-[220px] leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
        </>
  )
}



// import React from "react";
// import targetIcon from "../../components/assets/focus (1).png";
// import identification from "../../components/assets/document.png";
// import Check from "../../components/assets/check (1).png";
// import Management from "../../components/assets/management (1).png";
// import Plant from "../../components/assets/plant-1-new.png";
// import FadeContent from "../../utils/FadeContent";

// import "./style.css";

// const ServiceSection = () => {
//   const disableContextMenu = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <section className="service-area -mt-10">
//       <div
//         className="service-area-container"
//         onContextMenu={disableContextMenu}
//       >
//         <span style={{ marginRight: "15px", color: "#c6993e" }}>
//           ....................
//         </span>{" "}
//         <img style={{ width: "40px", height: "40px" }} src={Plant} alt="" />{" "}
//         <span style={{ marginLeft: "15px", color: "#c6993e" }}>
//           ....................
//         </span>
//       </div>
//       <FadeContent
//         blur={true}
//         duration={900}
//         easing="ease-out"
//         initialOpacity={0}
//       >
//         <h1
//           className="work-title"
//           style={{ textAlign: "center", marginTop: "29px" }}
//         >
//           Our Working Process
//         </h1>
//       </FadeContent>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-3 col-md-6">
//             <div
//               className="service-box"
//               data-aos="fade-up"
//               data-aos-delay="200"
//               style={{ height: "91%" }}
//             >
//               <div
//                 className="step-header-container"
//                 style={{ backgroundColor: "#c6993e", borderRadius: "50px" }}
//               >
//                 <div
//                   className="step-header"
//                   style={{ backgroundColor: "#c6993e", width: "100px" }}
//                 >
//                   STEP 01{" "}
//                 </div>
//               </div>
//               <div className="service-icon">
//                 <img
//                   src={targetIcon}
//                   alt="img"
//                   onContextMenu={disableContextMenu}
//                 />
//               </div>
//               <div className="service-text">
//                 <p className="service-steps">Aim on Independent Assessments</p>
//                 <p>
//                   We aim to provide an independent assessment that examines all
//                   aspects of a proposed project, including technical, economic,
//                   financial, legal and environmental considerations.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6">
//             <div
//               className="service-box"
//               data-aos="fade-up"
//               data-aos-delay="350"
//               style={{ height: "91%" }}
//             >
//               <div
//                 className="step-header-container"
//                 style={{ backgroundColor: "#c6993e", borderRadius: "50px" }}
//               >
//                 <div
//                   className="step-header"
//                   style={{ backgroundColor: "#c6993e", width: "100px" }}
//                 >
//                   STEP 02{" "}
//                 </div>
//               </div>
//               <div className="service-icon">
//                 <img src={identification} alt="img" />
//               </div>
//               <div className="service-text">
//                 <p className="service-steps">
//                   Land Identification and Acquisition
//                 </p>
//                 <p>
//                   Specializing in pinpointing ideal land prospects, we
//                   meticulously evaluate for suitability, fertility, and
//                   strategic value. Our process ensures precise acquisition,
//                   securing prime plots for diverse agricultural pursuits.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6">
//             <div
//               className="service-box"
//               data-aos="fade-up"
//               data-aos-delay="500"
//               style={{ height: "91%" }}
//             >
//               <div
//                 className="step-header-container"
//                 style={{ backgroundColor: "#c6993e", borderRadius: "50px" }}
//               >
//                 <div
//                   className="step-header"
//                   style={{ backgroundColor: "#c6993e", width: "100px" }}
//                 >
//                   STEP 03{" "}
//                 </div>
//               </div>
//               <div className="service-icon">
//                 <img src={Check} alt="img" />
//               </div>
//               <div className="service-text">
//                 <p className="service-steps">Project Delivery</p>
//                 <p>
//                   We assure to deliver more than just a project, we deliver a
//                   vision realized, a dream fulfilled and projects where every
//                   detail has been crafted to perfection.
//                   <br />
//                   <br />
//                   <br />
//                   <br />
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6">
//             <div
//               className="service-box"
//               data-aos="fade-up"
//               data-aos-delay="650"
//               style={{ height: "91%" }}
//             >
//               <div
//                 className="step-header-container"
//                 style={{ backgroundColor: "#c6993e", borderRadius: "50px" }}
//               >
//                 <div
//                   className="step-header"
//                   style={{ backgroundColor: "#c6993e", width: "100px" }}
//                 >
//                   STEP 04{" "}
//                 </div>
//               </div>
//               <div className="service-icon">
//                 <img src={Management} alt="img" />
//               </div>
//               <div className="service-text">
//                 <p className="service-steps">
//                   Property Management & Maintenance
//                 </p>
//                 <p>
//                   Our team focuses on maintenance of the Projects to retain its
//                   aesthetic appearance in order to ensure that your investment
//                   retains and appreciates its value.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceSection;
