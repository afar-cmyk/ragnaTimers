import React from 'react'

export default function Thumbnails({type='mvp', mvpName='default', mapName='default'}) {

  const imgSettings = {
    default: {
      position: '4px -15px',
      size: '130%'
    },
    randgris: {
      position: '-64px -34px',
      size: '255%'
    },
    garm: {
      position: '4px -15px',
      size: '130%'
    },
  }

  if ((mvpName == null) || (mapName == null)) {
    mvpName = 'default'
    mapName = 'default'
  } else if ((mvpName == '') || (mapName == '')) {
    mvpName = 'default'
    mapName = 'default'
  }

  let mvpImage = require(`../../images/${mvpName}.png`)
  let mapImage = require(`../../images/maps/${mapName}.gif`)

  const gradient = 'linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)'
  const backgroundImage = type == 'map' ? mapImage : mvpImage
  const backgroundPosition = type == 'map' ? '-4px -1px' : imgSettings[mvpName].position
  const backgroundSize = type == 'map' ? '110%' : imgSettings[mvpName].size

  let style = {
    width: '100%',
    height: '100%',
    background: `${gradient}, url(${backgroundImage})`,
    backgroundPosition: `center, ${backgroundPosition}`,
    backgroundSize: `cover, ${backgroundSize}`,
    backgroundrepeat: 'no-repeat'
  }

  return (
    <div style={style} />
  )
}
