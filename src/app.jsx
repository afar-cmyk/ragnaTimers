import * as React from 'react';
import { createRoot } from 'react-dom/client';
import ContentContainer from './components/ContentContainer.jsx';
import CardsContainer from './components/CardsContainer.jsx';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <main>
      <ContentContainer />
      <CardsContainer />
    </main>
  </>
);

//TODO Agregar los esqueletos de las barras
//TODO Agrear un historial y un contador para definir los mvp 'favoritos'
//TODO Buscar una base de datos liviana para usar localmente (quizas solo un json)

//TODO planificar aun mas en Figma
//TODO planificar un layout con usuario y dashboard

//TODO Usar MobX para los datos de la web(subscribirse)
//TODO Si MobX es muy dificil reemplazarlo por react-query
