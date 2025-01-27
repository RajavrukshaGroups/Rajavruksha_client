import React from "react";

import { createRoot } from "react-dom/client"; 
import "./index.css" ;
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/all.min.css";
import TagManager from "react-gtm-module";
import { HelmetProvider } from "react-helmet-async";
import App from "./main-component/App/App";
import { ToastContainer, toast } from "react-toastify";


const tagManagerArgs = {
  // gtmId: "GTM-5F6Z2H5J",
  gtmId: "GTM-5LQN7TLH",
};

TagManager.initialize(tagManagerArgs);

// Get the root element from the DOM
const container = document.getElementById("root");
const root = createRoot(container); // Create a root

// Now you can call root.render
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
