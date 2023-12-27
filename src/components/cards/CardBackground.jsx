import React from 'react'
import DataSource from '../../database/DataSource.js'

const CardBackground = ({ mvpName }) => {

  const mvpContext = require.context("../../images/mvps/", true, /\.png$/)
  let mvpImage = mvpContext(`./${mvpName}.png`)
  
  const backgroundImage = {
    backgroundImage: `url(${mvpImage})`,
    backgroundPosition: DataSource[mvpName].settings.card.position,
    backgroundSize: DataSource[mvpName].settings.card.size,
    width: '100%',
    height: '100%',
    filter: 'saturate(0)',
    backgroundRepeat: 'no-repeat',
    imageRendering: 'pixelated',
    border: '1px solid #ffffff42',
    borderRadius: '3px'
  }

  return (
    <div style={backgroundImage} />
  )
}

export default CardBackground
