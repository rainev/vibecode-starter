// This is where React starts. It finds the <div id="root"> in
// index.html and draws our App inside it. You won't need to edit this.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
