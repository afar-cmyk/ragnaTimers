import React from 'react'
import dataSource from "../database/MvpDataSource.js";

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
      position: '0px -18px',
      size: '195%'
    },
  }

  if ((mvpName == null) || (mapName == null)) {
    mvpName = 'default'
    mapName = 'default'
  } else if ((mvpName == '') || (mapName == '')) {
    mvpName = 'default'
    mapName = 'default'
  }

  let mvpImage = require(`../../images/mvps/${mvpName}.png`)
  let mapImage = require(`../../images/maps/${mapName}.gif`)

  const gradient = 'linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)'
  const backgroundImage = type == 'map' ? mapImage : mvpImage
  const backgroundPosition = type == 'map' ? '-4px -1px' : dataSource[mvpName].settings.position
  const backgroundSize = type == 'map' ? '110%' : dataSource[mvpName].settings.size

  let style = {
    background: `${gradient} no-repeat center / 100%, `
                + `url(${backgroundImage}) no-repeat ${backgroundPosition} / ${backgroundSize}`,
  }

  return (
    <div className='newMvp_thumbnail' style={style} />
  )
}
