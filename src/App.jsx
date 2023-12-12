import React from 'react';
import { createRoot } from "react-dom/client";
import ContentContainer from './components/ContentContainer.jsx';
import './index.css';


//TODO planificar aun mas en Figma
//TODO Agregar los esqueletos de las barras
//TODO agregar el contenido de los mvp y los mapas
//TODO agregar un componente para visualizar el mvp ingresado
//TODO Buscar una base de datos liviana para usar localmente
//TODO agregar una estructura de datos tipo json como en el timer del bot discord
//TODO planificar un layout con usuario y dashboard

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    {/* <header>
    </header> */}

    <main>
      <ContentContainer />
    </main>
    {/* <footer>Este es el footer</footer> */}
  </>
);
