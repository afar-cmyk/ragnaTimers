import React, { useState, useEffect } from 'react'
import { switchStateAtom } from '../../hooks/stateManager.jsx'
import { useAtom } from 'jotai'

const SwitchButton = ({ onStateChange }) => {
  const [state, setState] = useState({
    mvpActive: true,
    miniActive: false
  })

  const [switchState, setSwitchState] = useAtom(switchStateAtom)

  const toggleMvp = () => {
    setState({
      mvpActive: true,
      miniActive: false
    })
    setSwitchState('mvp')
  }

  const toggleMini = () => {
    setState({
      mvpActive: false,
      miniActive: true
    })
    setSwitchState('mini')
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
