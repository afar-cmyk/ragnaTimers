import React from 'react'
import { Card } from './cards/Card.jsx'
import { db } from '../database/db.js'
import { useLiveQuery } from 'dexie-react-hooks'
// import ShortUniqueId from 'short-unique-id'
// import { addCustomMVP } from '../database/dbService.js'

const CardsContainer = () => {
  const timedMvps = useLiveQuery(async () => {
    return await db.userSelection.where('timing').equals('true').toArray()
  })

  // const uid = new ShortUniqueId({ length: 5 })

  /* Custom MVP debug*/
  /*   const newCustomMVP = {
    amonra: {
      fullName: 'Amon Ra',
      settings: {
        thumbnail: {
          position: '-3px -26px',
          size: '150%'
        },
        card: {
          position: '6px -60px',
          size: '100%'
        }
      },
      maps: {
        moc_pryd06: { respawn: [60, 70] }
      }
    }
  } 
    console.log()
  */

  return (
    <div
      style={{
        minWidth: '702px',
        // maxWidth: '702px',
        marginTop: '40px'
      }}
    >
      <h1 style={title}>MVP Timeados</h1>
      <div style={content}>
        {timedMvps
          ? timedMvps.map((data) => (
              <Card
                key={data.id}
                dataId={data.id}
                mvpName={data.mvpName}
                mapName={data.mapName}
                selectedDate={data.selectedDate}
              />
            ))
          : null}
      </div>
      {/* Custom MVP debug */}
      {/* <div>
        <button
          onClick={() =>
            addCustomMVP(
              Object.keys(newCustomMVP)[0],
              Object.keys(newCustomMVP.amonra.maps)[0],
              69,
              420
            )
          }
        >
          customMVP
        </button>
      </div> */}
    </div>
  )
}

export default CardsContainer

const title = {
  color: '#DDDDDD',
  fontFamily: 'Roboto Flex',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 900,
  lineHeight: 'normal',
  marginBottom: '24px'
}

const content = {
  display: 'inline-flex',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  gap: '24px',
  flexWrap: 'wrap'
}
