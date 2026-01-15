import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Componants/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
