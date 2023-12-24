import React from 'react'
import { ProgressBar } from './ProgressBar.jsx'
import RemainingTime from './RemainingTime.jsx'
import { differenceInSeconds, addMinutes } from 'date-fns'
import { CardFooter } from './CardFooter.jsx'
import DataSource from '../../database/DataSource.js'
import CardBackground from './CardBackground.jsx'


//TODO Nombrar todos los props y funciones de forma congruente

export const Card = (props) => {
  let { dataId, mvpName, mapName, selectedDate } = props
  
  let horaActual = Date.now()

  let mvpData = DataSource[mvpName]
  let fechaSeleccionada = new Date(selectedDate)

  let base = mvpData.maps[mapName].respawn[0]
  let variable = mvpData.maps[mapName].respawn[1]
  

  let fechaConRespawn = addMinutes(fechaSeleccionada, base)
  let fechaConRespawnVariable = addMinutes(fechaSeleccionada, variable)


  let tiempoFinal = differenceInSeconds(fechaConRespawn, horaActual)
  let tiempoFinal2 = differenceInSeconds(fechaConRespawnVariable, fechaConRespawn)


  return (
    <div style={mainContainer}>
      <CardBackground mvpName={mvpName} />
      <div style={content}>

        <div style={cardHeader}>
          <span style={headerTitile}>{mvpData['fullName']}</span>
          <span style={headerSubtitile}>{mapName}</span>
        </div>

        <RemainingTime sRespawn={tiempoFinal} sVariable={tiempoFinal2} id={dataId} />

        <CardFooter selectedDate={fechaSeleccionada} respawn={base} variable={variable} />

        <ProgressBar computedSeconds={tiempoFinal} />

      </div>
    </div>
  )
}

const mainContainer = {
  position: 'relative',
  width: '218px',
  height: '179px',
  borderRadius: '3px',
  display: 'flex',
  overflow: 'hidden',
}

const content = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1,
  backgroundColor: '#090706D9',
}

const cardHeader = {
  margin: '8px 8px 0px 8px',
  display: 'flex',
  flexDirection: 'column'
}

const headerTitile = {
  color: '#DDDDDD',
  fontFamily: 'Roboto Flex',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 900,
  lineHeight: 'normal',
}

const headerSubtitile = {
  color: '#666',
  fontFamily: 'Roboto Flex',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
}
