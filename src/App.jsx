import React from 'react';
import { createRoot } from "react-dom/client";
import ContainerContent from './components/ContainerContent.jsx';
import './index.css';

//TODO agregar un componente para visualizar el mvp ingresado
//TODO Agregar los esqueletos de las barras
//TODO Agrear un historial y un contador para definir los mvp 'favoritos'
//TODO Buscar una base de datos liviana para usar localmente (quizas solo un json)

//TODO planificar aun mas en Figma
//TODO planificar un layout con usuario y dashboard

//TODO Usar jotai para los datos locales (Solo si es necesario)

//TODO Usar RxDB para los datos de la web(subscribirse)
//TODO Si RxDB es muy dificil reemplazarlo por react-query

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <main>
      <ContainerContent />
    </main>
  </>
);
