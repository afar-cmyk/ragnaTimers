import * as React from 'react'
import { createRoot } from 'react-dom/client'
import ContentContainer from './components/ContentContainer.jsx'
import CardsContainer from './components/CardsContainer.jsx'
import MenuContainer from './components/MenuContainer.jsx'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <>
    <header
      style={{
        marginTop: '32px',
        marginBottom: '32px',
        height: '56px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        columnGap: '14px'
      }}
    >
      <MenuContainer />
    </header>
    <main>
      <ContentContainer />
      <CardsContainer />
    </main>
  </>
)

//TODO Investigar como mantener el release actualizado

//TODO Agregar un sistema para que los usuarios puedan ajustar el tiempo de respawn de cualquier mvp
//TODO Agregar un apartado para que los usuarios puedan poner mvp especiales como el Nidhoggr's, ellos deben de poner el tiempo de respawn
//TODO Actualizar la version de package.json y index.html adecuadamente major.minor.patch 0.0.11

//TODO Agregar los esqueletos de las barras
//TODO Agrear un historial y un contador para definir los mvp 'favoritos'

//TODO planificar aun mas en Figma
//TODO planificar un layout con usuario y dashboard

//TODO Usar MobX para los datos de la web(subscribirse)
//TODO Si MobX es muy dificil reemplazarlo por react-query

// Pipeline de desarrollo
// ./src/main.js -> activar DevTools (descomentar linea 38)
// ./package.json -> ajustar versionamiento (linea 4)
// ./index.html -> ajustar versionamiento (linea 5)
