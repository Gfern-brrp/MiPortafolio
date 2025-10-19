import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ScrolltoTop from "./components/ScrollToTop";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/MiPortafolio"> 
      <ScrolltoTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);
