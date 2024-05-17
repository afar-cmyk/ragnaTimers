import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../../hooks/globalState.jsx'

const SwitchButton = ({ onStateChange }) => {
  const [state, setState] = useState({
    mvpActive: true,
    miniActive: false
  })

  const toggleMvp = () => {
    setState({
      mvpActive: true,
      miniActive: false
    })
    useGlobalState.getState().setMvpState()
  }

  const toggleMini = () => {
    setState({
      mvpActive: false,
      miniActive: true
    })
    useGlobalState.getState().setMiniState()
  }

  useEffect(() => {
    toggleMvp()
  }, [])

  useEffect(() => {
    onStateChange(state)
  }, [state])

  const mvpState = state.mvpActive ? 'switchState__active' : ''
  const miniState = state.miniActive ? 'switchState__active' : ''

  return (
    <div className='switchSection_container'>
      <span className='form_title'>
        Nuevo timer de {state.mvpActive ? 'MVP' : 'Mini Boss'}
      </span>
      <div className='switchButton'>
        <span className={`switchState ${mvpState}`} onClick={toggleMvp}>
          MVP
        </span>
        <span className={`switchState ${miniState}`} onClick={toggleMini}>
          Mini
        </span>
      </div>
    </div>
  )
}

export default SwitchButton
