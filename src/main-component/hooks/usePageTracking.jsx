import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTracking = () => {
  const location = useLocation();
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path: location.pathname,
      page_title: document.title,
    });
    console.log("page view event pushed:", location.pathname);
  }, [location]);
};

export default usePageTracking;
