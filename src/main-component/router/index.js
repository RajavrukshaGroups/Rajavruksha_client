import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Homepage from "../HomePage";
import AboutPage from "../AboutPage";
import ProjectPage from "../ProjectPage";
import ProjectSinglePage from "../ProjectSinglePage";
import ServicePage from "../ServicePage";
import ServiceSinglePage from "../ServiceSinglePage";
import PortfolioPage from "../PortfolioPage";
import TeamPage from "../TeamPage";
import FaqPage from "../FaqPage";
import ContactPage from "../ContactPage";
import ErrorPage from "../ErrorPage";
import BlogPage from "../BlogPage";
import BlogSinglePage from "../BlogSinglePage";
import ExperienceSection from "../../components/demo/experienceSection.jsx";
import SylvanRetreat from "../../main-component/projects/sylvanretreat";
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

const RoutesWithLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log("location", location.pathname);
    setLoading(true);
    const longLoadingRoutes = [
      "/projects",
      "/privacyPolicy",
      // "/terms-conditions",
      "/about",
      "/careers",
      "/careerDetails/:id"
    ];
    const delay = longLoadingRoutes.includes(location.pathname) ? 3000 : 1000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && (
        <Loader logo={true} color="#C1933C" secondaryColor="#C1933C" />
      )}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects-single" element={<ProjectSinglePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/service-single" element={<ServiceSinglePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-single" element={<BlogSinglePage />} />
        <Route path="/experienceSection" element={<ExperienceSection />} />
        <Route path="/careers" element={<CareerMainFooterComp />} />
        <Route path="/careerDetails/:id" element={<CareerDetails />} />
        {/* <Route path="/bdeCareerForm" element={<BdeCareerMain />} /> */}
        {/* <Route path="/bdeIntern" element={<BdeInternCareerMain />} /> */}
        <Route path="/sylvan-retreat" element={<SylvanRetreat />} />
        <Route path="/eco-nest" element={<Econest />} />
        <Route path="/journeySection" element={<JourneySection />} />
        <Route path="/status" element={<Status />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/privacyPolicy" element={<MainPrivacyPolicy />} />
        {/* <Route path="/terms-conditions" element={<MainTermsCondition />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

const AllRoute = () => {
  return (
    <div>
      <Router>
        <FloatingIcons />
        {/* <TawkMessengerReact
                    propertyId="66d2d5ab50c10f7a00a26593"
                    widgetId="1i70srim4"
                    /> */}
        <ScrollToTop />
        <RoutesWithLoader />
      </Router>
    </div>
  );
};

export default AllRoute;


