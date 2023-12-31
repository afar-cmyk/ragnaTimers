import React from 'react'
import NewMvpForm from './NewMvpForm.jsx'

const ContentContainer = () => {
  return (
    <>
      <div style={buttonsContainer}>
        <button
          type='button'
          className='formButtons cancelButton'
          onClick={() => console.log('Cancel callback')}
        >
          Cancelar
        </button>

        <button
          form='my-form'
          type='submit'
          className='formButtons newMvpButton'
        >
          Agregar MVP
        </button>
      </div>

      <NewMvpForm />
    </>
  )
}

export default ContentContainer

const buttonsContainer = {
  display: 'flex',
  flexDirection: 'column',
  columnGap: '16px',
  // gap: '8px'
  gap: '16px'
}
