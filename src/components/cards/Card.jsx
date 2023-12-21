import React from 'react'
import { ProgressBar } from './ProgressBar.jsx'
import RemainingTime from './RemainingTime.jsx'
import { isBefore, isAfter, differenceInSeconds, addMinutes, parse } from 'date-fns'
import { CardFooter } from './CardFooter.jsx'
import DataSource from '../../database/DataSource.js'
import CardBackground from './CardBackground.jsx'
import { toInteger } from 'lodash'

export function ConstruirFecha(horas, minutos, periodo) {
  horas = periodo === 'PM' && horas < 12 ? horas + 12 : horas;

  var fechaConstruida = new Date();
  
  fechaConstruida.setHours(horas);
  fechaConstruida.setMinutes(minutos);
  fechaConstruida.setSeconds(0);

  return fechaConstruida;
}

// TODO modificar el codigo para recibir el nuevo tipo de fecha y hacer los calculos en torno a ella

export const Card = () => {

  let datosUsuario = [
    {"mvpName":"gtb","mapName":"prt_sewb4","hours":"00","minutes":"49","timePeriod":"AM"}
  ]

  let datosMvp = DataSource[datosUsuario[0].mvpName]
  let imagenMvp = datosUsuario[0].mvpName
  let horaMuerte = toInteger(datosUsuario[0].hours)
  let minutosMuerte = toInteger(datosUsuario[0].minutes)

  let respawnBase = datosMvp.maps[datosUsuario[0].mapName].respawn[0]
  let respawnVariable = datosMvp.maps[datosUsuario[0].mapName].respawn[1]

  let fechaAntigua = new Date("Tue Dec 19 2023 21:30:00 GMT-0500 (Colombia Standard Time)")
  let fechaActual = new Date("Tue Dec 19 2023 22:00:00 GMT-0500 (Colombia Standard Time)")
  let fechaFutura = new Date("Tue Dec 19 2023 23:31:00 GMT-0500 (Colombia Standard Time)")
  
  // si no esta muerto para que lo voy a timear?
  
  let calcularRespawnVariable = (respawn, variable) => {
    return variable - respawn
  }

  let horaActual = ConstruirFecha(10, 47, 'PM')
  // let horaActual = Date.now()
  let fechaIngresda = ConstruirFecha(horaMuerte, minutosMuerte, datosUsuario[0].timePeriod)

  let fechaConRespawn = addMinutes(fechaIngresda, respawnBase)
  let fechaConRespawnVariable = addMinutes(fechaIngresda, respawnVariable)


  let tiempoFinal = differenceInSeconds(fechaConRespawn, horaActual)
  let tiempoFinal2 = differenceInSeconds(fechaConRespawnVariable, fechaConRespawn)

  // console.log(isBefore(horaActual, fechaIngresda))
  // console.log(isAfter(horaActual, fechaConRespawnVariable))
  console.log(isAfter(fechaActual, fechaFutura))

  return (
    //TODO Nombrar todos los props de forma congruente

    <div style={mainContainer}>
      <CardBackground mvpName={imagenMvp} />
      <div style={content}>


        <div style={cardHeader}>
          <span style={headerTitile}>{datosMvp['fullName']}</span>
          <span style={headerSubtitile}>{datosUsuario[0].mapName}</span>
        </div>


        
        <RemainingTime sRespawn={tiempoFinal} sVariable={tiempoFinal2} />

        <CardFooter selectedDate={fechaIngresda} respawn={respawnBase} variable={respawnVariable} />

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
