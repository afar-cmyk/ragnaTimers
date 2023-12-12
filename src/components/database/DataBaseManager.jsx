import React from 'react'

export default function DataBaseManager() {


  let esquema_mvp = {
    Atroce: {
      mapas: {
        ra_fild02: {fecha: "0", respawn: [240, 250], timeando: false},
        ra_fild03: {fecha: "0", respawn: [180, 190], timeando: false},
        ra_fild04: {fecha: "0", respawn: [300, 310], timeando: false},
        ve_fild01: {fecha: "0", respawn: [180, 190], timeando: false},
        ve_fild02: {fecha: "0", respawn: [360, 370], timeando: false}
      }
    },
    Ungoliant: {
      mapas: {
        ein_dun01: {fecha: "0", respawn: [60, 110],    timeando: false},
        ein_fild02: {fecha: "0", respawn: [1260, 2510], timeando: false},
        ein_fild07: {fecha: "0", respawn: [1440, 2873], timeando: false}
      }
    }
  }
  
  let prueba = esquema_mvp.Atroce.mapas

  return (
    <div style={{marginTop: '16px'}}>
      <button type='button' onClick={() => console.log(prueba)}>New DB</button>
    </div>
  )
}

