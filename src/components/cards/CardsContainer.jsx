import React from 'react'
import { Card } from './Card.jsx'


export const CardsContainer = () => {
  return (
    <div style={{minWidth: '702px', maxWidth: '702px', marginBottom: '32px'}}>
      <h1 style={title}>MVP Timeados</h1>
      <div style={content}>
        <Card />
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
