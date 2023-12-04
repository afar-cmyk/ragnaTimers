import React from "react";
import { createRoot } from "react-dom/client";
import ServerInfo from "./components/ServerInfo.jsx";
import SelectMvp from "./components/SelectMvp.jsx";
import Timer from "./components/Timer.jsx";

//TODO planificar en Figma
//TODO simplificar y mejorar el componente timer
//TODO agregar una estructura de datos tipo json como en el timer del bot discord
//TODO planificar un tema oscuro (no tan oscuro)
//TODO planificar un layout con usuario y dashboard

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <header>
      {/* <ServerInfo />
      <SelectMvp />  */}
    </header>

    <main>
      {/* <Timer time={300} /> */}
    </main>
    {/* <footer>Este es el footer</footer> */}
  </>
);
