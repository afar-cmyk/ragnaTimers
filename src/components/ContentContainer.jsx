import React from 'react'
import NewMvpForm from './NewMvpForm.jsx'

const ContentContainer = () => {
  return (
    <div style={mainContainer}>
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
          Nuevo timer
        </button>
      </div>

      <NewMvpForm />
    </div>
  )
}

export default ContentContainer

const mainContainer = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '38px'
}

const buttonsContainer = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '8px',
  justifyContent: 'flex-start',
  alignIitems: 'center',
  height: '163px',
  width: 'fit-content'
}
