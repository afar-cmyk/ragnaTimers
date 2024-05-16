import React, { useState } from 'react'

const SwitchButton = ({ onStateChange }) => {
  const [state, setState] = useState({
    mvpActive: true,
    miniActive: false
  })

  const toggleMvp = () => {
    setState((prevState) => ({
      ...prevState,
      mvpActive: true,
      miniActive: false
    }))
    onStateChange()
  }

  const toggleMini = () => {
    setState((prevState) => ({
      ...prevState,
      mvpActive: false,
      miniActive: true
    }))
    onStateChange()
  }

  const mvpState = state.mvpActive ? 'switchState__active' : ''
  const miniState = state.miniActive ? 'switchState__active' : ''

  return (
    <div className='switchButton'>
      <span className={`switchState ${mvpState}`} onClick={toggleMvp}>
        MVP
      </span>
      <span className={`switchState ${miniState}`} onClick={toggleMini}>
        Mini
      </span>
    </div>
  )
}

export default SwitchButton
