import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <header>Este es el header</header>
    <main>
      <h2>Hola Mundo desede App.jsx</h2>
    </main>
    <footer>Este es el footer</footer>
  </>
);
