import React from 'react'
import { Card } from './Card.jsx'
import { useAtom } from 'jotai';
import { testData } from '../../App.jsx'

export const CardsContainer = () => {
  const [data] = useAtom(testData);
  return (
    <div style={{minWidth: '702px', maxWidth: '702px', marginBottom: '32px'}}>
      <h1 style={title}>MVP Timeados</h1>
      <div style={content}>
        { data.map((d, index) => 
          <Card 
            key={index} 
            mvpName={d.mvpName} 
            mapName={d.mapName} 
            selectedDate={d.selectedDate} 
          />
        )}
        {/* <Card /> */}
      </div>
    </div>
  )
}


const title = {
  color: '#DDDDDD',
  fontFamily: 'Roboto Flex',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 900,
  lineHeight: 'normal',
  marginBottom: '24px',
  marginTop: 0
}

const content = {
  display: 'inline-flex',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  gap: '24px',
  flexWrap: 'wrap'
}
