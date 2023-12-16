import React from 'react'
import atroce from '../../images/mvps/atroce.png'
import { ProgressBar } from './ProgressBar.jsx'
import RemainingTime from './RemainingTime.jsx'
import { differenceInSeconds, addMinutes, format } from 'date-fns'


export const Card = () => {

  let fechaIngresda = construirFecha(3, 0, 'AM')
  let horaActual = construirFecha(3, 0, 'AM')

  let fechaConRespawn = addMinutes(fechaIngresda, 1)
  let fechaConRespawnVariable = addMinutes(fechaIngresda, 2)

  // let tiempoFinal = differenceInSeconds(fechaConRespawn, Date.now())
  // let tiempoFinal2 = differenceInSeconds(fechaConRespawnVariable, Date.now())

  let tiempoFinal = differenceInSeconds(fechaConRespawn, horaActual)
  let tiempoFinal2 = differenceInSeconds(fechaConRespawnVariable, horaActual)

  console.log(tiempoFinal)
  console.log(tiempoFinal2)


  console.log(format(fechaConRespawn, 'hh:mm a'))
  console.log(format(fechaConRespawnVariable, 'hh:mm a'))

  let segundosPrueba = tiempoFinal
  // let segundosPrueba = Math.abs(tiempoFinal)
  return (
    <div style={mainContainer}>
      <div style={backgroundImage} />
      <div style={content}>


        <div style={cardHeader}>
          <span style={headerTitile}>Atroce</span>
          <span style={headerSubtitile}>ra_fld02</span>
        </div>


        {/* TODO logica para crear un counter usando los datos del mvp seleccionado */}
        <RemainingTime sRespawn={tiempoFinal} sVariable={tiempoFinal2} />


        <div style={cardFooter}>
          <span style={footerTitle}>Respawn variable:</span>
          <span style={footerContent}>de <p style={{...footerTimes, marginLeft: '6px', marginRight: '6px'}}>10:59 AM</p> a <p style={{...footerTimes, marginLeft: '6px'}}>12:39 PM</p></span>
        </div>


        <ProgressBar computedSeconds={segundosPrueba} />

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

const cardFooter = {
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  margin: '0px 8px 8px 8px',
}

const footerTitle = {
  color: '#666',
  fontFamily: 'Roboto Flex',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '12px',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
}

const footerContent = {
  color: '#666666',
  fontFamily: 'Roboto Flex',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '14px',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
  display: 'flex',
  flexDirection: 'row'
}

const footerTimes = {
  color: '#ABABAB',
  fontFamily: 'Roboto Flex',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 900,
  margin: '0px',
  padding: '0px'
}

function construirFecha(horas, minutos, periodo) {
  horas = periodo === 'PM' && horas < 12 ? horas + 12 : horas;

  var fechaConstruida = new Date();
  
  fechaConstruida.setHours(horas);
  fechaConstruida.setMinutes(minutos);
  fechaConstruida.setSeconds(0);

  return fechaConstruida;
}

function formatearHora(date) {
  return format(date, 'hh:mm a');
}
