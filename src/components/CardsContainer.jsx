import React, { useState, useEffect } from 'react'
import { Card } from './cards/Card.jsx'
import { db } from '../database/db.js';
import { useLiveQuery } from 'dexie-react-hooks';

const CardsContainer = () => {
  const [data, setData] = useState([]);

  const liveQuery = useLiveQuery(() => db.userSelection.toArray());
 
  useEffect(() => {
    if (liveQuery) {
      setData(liveQuery);
    }
  }, [liveQuery]);

  return (
    <div style={{minWidth: '702px', maxWidth: '702px', marginBottom: '32px'}}>
    <h1 style={title}>MVP Timeados</h1>
    <div style={content}>
      {data ? data.map((d, index) => 
        <Card 
          key={index} 
          mvpName={d.mvpName} 
          mapName={d.mapName} 
          selectedDate={d.selectedDate} 
        />
      ) : null}
    </div>
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
