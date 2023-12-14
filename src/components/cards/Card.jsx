import React from 'react'
import atroce from '../../images/mvps/atroce.png'


export const Card = () => {
  return (
    <div style={mainContainer}>
      <div style={backgroundImage} />
      <div style={content}>


        <div style={cardHeader}>
          <span style={headerTitile}>Atroce</span>
          <span style={headerSubtitile}>ra_fld02</span>
        </div>

        {/* TODO logica para crear un counter usando los datos del mvp seleccionado */}
        <span style={remainingTime}>00:21:20</span>

        {/* TODO poner los estilos de footerContent */}
        <div style={cardFooter}>
          <span style={footerTitle}>Respawn variable:</span>
          <span style={footerContent}>de 10:59 AM a 12:39 PM</span>
        </div>

        {/* TODO convertir en un componente que reciba el tiempo restante en segundos */}
        <span className='progress-bar'>
          <span className='progress-bar-fill' />
        </span>


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
  color: '#ABABAB',
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

const remainingTime = {
  color: '#ABABAB',
  textAlign: 'center',
  fontFamily: 'Roboto Flex',
  fontSize: '44px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '36px',
  letterSpacing: '2.2px',
  margin: '25px 0px 29px 0px',
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
  color: '#ABABAB',
  fontFamily: 'Roboto Flex',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 900,
  lineHeight: '14px',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
}
