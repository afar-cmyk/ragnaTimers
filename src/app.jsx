import * as React from 'react'
import { createRoot } from 'react-dom/client'
import ContentContainer from './components/ContentContainer.jsx'
import CardsContainer from './components/CardsContainer.jsx'

const container = document.getElementById('root')
const root = createRoot(container)

const prueba = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '38px'
}

root.render(
  <>
    <main>
      <div style={prueba}>
        <ContentContainer />
      </div>
      <CardsContainer />
    </main>
  </>
)

//TODO CONVERTIR EN UN PWA PARA QUE SIRVA EN WINDOWS 7/8/8.1 o hacer downgrade a Electron 22
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
