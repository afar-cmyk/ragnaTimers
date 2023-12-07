import React from "react";
import { createRoot } from "react-dom/client";
import ServerInfo from "./components/ServerInfo.jsx";
import SelectMvp from "./components/SelectMvp.jsx";
import Timer from "./components/Timer.jsx";
import NewMVP from "./components/NewMVP.jsx";
import './index.css';

//TODO planificar aun mas en Figma
//TODO Agregar los select usando mui o alguna otra libreria
//TODO no permitir que el usuario pueda hacer fullscreen o maximizar la ventana
//TODO Agregar los esqueletos de las barras
//TODO agregar un componente para visualizar el mvp ingresado
//TODO agregar una estructura de datos tipo json como en el timer del bot discord
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
      <NewMVP />
      {/* <Timer time={300} /> */}
    </main>
    {/* <footer>Este es el footer</footer> */}
  </>
);
