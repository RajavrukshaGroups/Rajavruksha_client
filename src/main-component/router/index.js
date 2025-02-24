import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Homepage from "../HomePage";
import AboutPage from "../AboutPage";
import ProjectPage from "../ProjectPage";
import ProjectSinglePage from "../ProjectSinglePage";
import ServicePage from "../ServicePage";
import ContactPage from "../ContactPage";
import ErrorPage from "../ErrorPage";
import ExperienceSection from "../../components/demo/experienceSection.jsx";
import SylvanRetreat from "../../main-component/projects/sylvanretreat";
import PlumeriaMain from "../../main-component/projects/plumeria.jsx"
import Econest from "../projects/eco-nest";
import JourneySection from "../../components/reactIcons/journeySection.jsx";
import Status from "../Status/status.jsx";
import Amenities from "../../components/Amenities/amenities.jsx";
// import BdeCareerMain from "../careers/bdeCareer.jsx";
import BdeInternCareerMain from "../careers/bdeInternCareer.jsx";
import ScrollToTop from "../../utils/utils.js";
import MainPrivacyPolicy from "../PrivacyPolicy/index.js";
import CareerMainFooterComp from "../CareerMainFooter/index.js"; 
import FloatingIcons from "../../components/FloatingIcons/FloatingIcons.jsx";
import Loader from "../../components/Loader/loader.jsx";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import MainTermsCondition from "../TermsConditions/index.js";
import CareerDetails from "../careers/careerDetails.jsx";
import  HeroScrollDemo  from "../../components/BlogList/index.js";
import SylvanRetreatNew from "../projects/sylvanRetreatNew.jsx";
import ProjectPageNew from "../ProjectsPageNew/index.js";
import EcoNestNewMain from "../projects/EcoNestNewMain.jsx";

const RoutesWithLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();  

  useEffect(() => {
    console.log("location", location.pathname);
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust delay to match your content loading time

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* {loading && (
        <Loader logo={true} color="#C1933C" secondaryColor="#C1933C" />
      )} */}
      <Routes>
        {/* <Route path="/toatify" element={<ToastContainer />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/projects" element={<ProjectPage />} /> */}
        <Route path="/projects" element={<ProjectPageNew />} />
        <Route path="/projects-single" element={<ProjectSinglePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/experienceSection" element={<ExperienceSection />} />
        <Route path="/careers" element={<CareerMainFooterComp />} />
        <Route path="/careerDetails/:id" element={<CareerDetails />} />
        {/* <Route path="/sylvan-retreat" element={<SylvanRetreat />} /> */}
        <Route path="/sylvan-retreat" element={<SylvanRetreatNew/>} />
        {/* <Route path="/eco-nest" element={<Econest />} /> */}
        <Route path="/eco-nest" element={<EcoNestNewMain />} />
        <Route path="/plumeria" element={<PlumeriaMain />} />
        <Route path="/journeySection" element={<JourneySection />} />
        <Route path="/status" element={<Status />} />
        {/* <Route path="/amenities" element={<Amenities />} /> */}
        <Route path="/privacyPolicy" element={<MainPrivacyPolicy />} />
        <Route path="/aceternity" element={<HeroScrollDemo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

      const AllRoute = () => {
        // const notify = () => toast("Wow so easy!");
        return (
          <>
          <div>
              <FloatingIcons />
            <Router>
            {/* <button onClick={notify}>Notify!</button> */}
              {/* <TawkMessengerReact
                          propertyId="66d2d5ab50c10f7a00a26593"
                          widgetId="1i70srim4"
                          /> */}
                  <ScrollToTop />
                  <RoutesWithLoader />
            </Router>
          </div>
           </>
        );
      };
      export default AllRoute;
