import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <div>
    <h2>Hola mundo desde React en App.jsx</h2>
  </div>
);
