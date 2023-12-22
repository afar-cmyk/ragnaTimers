import React from 'react'
import DataSource from '../../database/DataSource.js'

const CardBackground = ({ mvpName }) => {

  let mvpImage = require(`../../images/mvps/${mvpName}.png`)

  const backgroundImage = {
    backgroundImage: `url(${mvpImage})`,
    backgroundPosition: DataSource[mvpName].settings.card.position,
    backgroundSize: DataSource[mvpName].settings.card.size,
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
