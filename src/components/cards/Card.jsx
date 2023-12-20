import React from 'react'
import atroce from '../../images/mvps/atroce.png'
import { ProgressBar } from './ProgressBar.jsx'
import RemainingTime from './RemainingTime.jsx'
import { differenceInSeconds, addMinutes } from 'date-fns'
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


export const Card = () => {

  let datosUsuario = [
    {"mvpName":"gtb","mapName":"prt_sewb4","hours":"09","minutes":"48","timePeriod":"PM"}
  ]

  let datosMvp = DataSource[datosUsuario[0].mvpName]
  let imagenMvp = datosUsuario[0].mvpName
  let horaMuerte = toInteger(datosUsuario[0].hours)
  let minutosMuerte = toInteger(datosUsuario[0].minutes)

  let respawnBase = datosMvp.maps[datosUsuario[0].mapName].respawn[0]
  let respawnVariable = datosMvp.maps[datosUsuario[0].mapName].respawn[1]
  
  let calcularRespawnVariable = (respawn, variable) => {
    return variable - respawn
  }

  let horaActual = ConstruirFecha(10, 47, 'PM')
  let fechaIngresda = ConstruirFecha(horaMuerte, minutosMuerte, datosUsuario[0].timePeriod)

  //console.log(respawnVariable)
  // let fechaIngresda = ConstruirFecha(3, 0, 'AM')
  // let horaActual = ConstruirFecha(3, 0, 'AM')

  let fechaConRespawn = addMinutes(fechaIngresda, respawnBase)
  let fechaConRespawnVariable = addMinutes(fechaIngresda, calcularRespawnVariable(respawnBase, respawnVariable))

  //console.log(fechaConRespawnVariable)

  // let tiempoFinal = differenceInSeconds(fechaConRespawn, Date.now())
  // let tiempoFinal2 = differenceInSeconds(fechaConRespawnVariable, Date.now())


  let tiempoFinal = differenceInSeconds(fechaConRespawn, horaActual)
  let tiempoFinal2 = differenceInSeconds(fechaConRespawnVariable, horaActual)

  console.log(addMinutes(fechaIngresda, calcularRespawnVariable(respawnBase, respawnVariable)))


  // let tiempoFinal = differenceInSeconds(fechaConRespawn, horaActual)
  // let tiempoFinal2 = differenceInSeconds(fechaConRespawnVariable, horaActual)


  // console.log(tiempoFinal)
  // console.log(tiempoFinal2)

  // console.log(format(fechaConRespawn, 'hh:mm a'))
  // console.log(format(fechaConRespawnVariable, 'hh:mm a'))

  let segundosPrueba = tiempoFinal
  // let segundosPrueba = Math.abs(tiempoFinal)
  return (
    <div style={mainContainer}>
      {/* Convertir en componente */}

      <CardBackground mvpName={imagenMvp} />

      {/* <div style={backgroundImage} /> */}
      <div style={content}>


        <div style={cardHeader}>
          <span style={headerTitile}>{datosMvp['fullName']}</span>
          <span style={headerSubtitile}>{datosUsuario[0].mapName}</span>
        </div>


        {/* TODO logica para crear un counter usando los datos del mvp seleccionado */}
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

const backgroundImage = {
  backgroundImage: `url(${atroce})`,
  backgroundPosition: '-38px -30px',
  backgroundSize: '175%',
  width: '100%',
  height: '100%',
  filter: 'saturate(0)',
  backgroundRepeat: 'no-repeat',
  imageRendering: 'pixelated'
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
