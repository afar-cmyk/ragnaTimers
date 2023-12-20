import React from 'react'

const CardBackground = ({ mvpName }) => {

  let mvpImage = require(`../../images/mvps/${mvpName}.png`)

  // gtb = background-position: 0px 11px; background-size: 100%;
  // atroce = background-position: -38px -30px; background-size: 175%;

  const backgroundImage = {
    backgroundImage: `url(${mvpImage})`,
    backgroundPosition: '-38px -30px',
    backgroundSize: '175%',
    width: '100%',
    height: '100%',
    filter: 'saturate(0)',
    backgroundRepeat: 'no-repeat',
    imageRendering: 'pixelated'
  }

  return (
    <div style={backgroundImage} />
  )
}

export default CardBackground
