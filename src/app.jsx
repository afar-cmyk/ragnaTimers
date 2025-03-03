import * as React from 'react'
import { createRoot } from 'react-dom/client'
import ContentContainer from './components/ContentContainer.jsx'
import CardsContainer from './components/CardsContainer.jsx'
import MenuContainer from './components/MenuContainer.jsx'
import { useDefaultSettings } from './hooks/useDefaultSettings.jsx'

const App = () => {
  const { setDefaultSettings } = useDefaultSettings()

  React.useEffect(() => {
    setDefaultSettings()
  }, [])

  return (
    <>
      <header>
        <MenuContainer />
      </header>
      <main>
        <ContentContainer />
        <CardsContainer />
      </main>
    </>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)

//TODO Investigar como mantener el release actualizado

//TODO Agregar un sistema para que los usuarios puedan ajustar el tiempo de respawn de cualquier mvp
//TODO Agregar un apartado para que los usuarios puedan poner mvp especiales como el Nidhoggr's, ellos deben de poner el tiempo de respawn

//TODO Agregar los esqueletos de las barras
//TODO Agrear un historial y un contador para definir los mvp 'favoritos'

//TODO planificar aun mas en Figma
//TODO planificar un layout con usuario y dashboard

//TODO Usar MobX para los datos de la web(subscribirse)
//TODO Si MobX es muy dificil reemplazarlo por react-query

// Pipeline de desarrollo (production ready)
// ./src/main.js -> activar DevTools (descomentar linea 35)
// ./package.json -> ajustar versionamiento (linea 4)
// ./index.html -> ajustar versionamiento (linea 5)
// ./src/components/NewMvpForm.jsx -> agregar 'debug' y 'default' a los filtros del selector (lineas 24 y 144)
