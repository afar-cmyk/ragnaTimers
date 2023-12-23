import React from 'react';
import { createRoot } from "react-dom/client";
import ContainerContent from './components/ContainerContent.jsx';
import './index.css';
import { CardsContainer } from './components/cards/CardsContainer.jsx';
import { atom } from 'jotai';
import useDb from './database/useDb.jsx';

//TODO VOLVER A EMPEZAR CON UNA NUEVA VERSION DE ELECTRON
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
export const testData = atom([
  {"mvpName":"atroce","mapName":"ra_fild02","selectedDate":"2023-12-21T07:30:00.424Z"},
  {"mvpName":"garm","mapName":"xmas_fild01","selectedDate":"2023-12-21T07:44:00.448Z"},
  {"mvpName":"gtb","mapName":"prt_sewb4","selectedDate":"2023-12-21T06:45:00.724Z"},
  {"mvpName":"randgris","mapName":"odin_tem03","selectedDate":"2023-12-21T06:19:00.500Z"},
  {"mvpName":"ungoliant","mapName":"ein_fild02","selectedDate":"2023-12-21T06:00:00.429Z"},
])

// const db = useDb()

root.render(
  <>
    <main>
      <ContainerContent />
      <CardsContainer />
    </main>
  </>
);
