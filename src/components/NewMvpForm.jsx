import React, { useState, useEffect} from "react";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import lodash from 'lodash';
import ThumbnailsContainer from "./thumbnails/ThumbnailsContainer.jsx";
import dataSource from "./database/MvpDataSource.js";

const NewMvpForm = ({ onSubmit }) => {
  const [filteredDataSource] = useState(lodash.omit(dataSource, 'default'))
  const [mvp, setMvp] = useState("")
  const [map, setMap] = useState("")
  const [hours, setHours] = useState("")
  const [minutes, setMinutes] = useState("")
  const [timePeriod, setTimePeriod] = useState("")

  const validateHours = (event) => {
    let value = parseInt(event.target.value, 10)
    if (event.target.value == '') {
      value = ''
      setHours(value)
    } else {
      value = Math.min(12, Math.max(1, value))
      setHours(value.toString())
    }
  }

  const formatHours = () => {
    let adjustedValue
    let formattedHours
    if (hours == '') {
      formattedHours = hours
      setHours(formattedHours)
    } else {
      adjustedValue = Math.min(12, Math.max(0, parseInt(hours, 10)))
      formattedHours = adjustedValue <= 9 ? `0${adjustedValue}` : adjustedValue.toString()
      setHours(formattedHours)
    }
  }

  const validateMinutes = (event) => {
    let value = parseInt(event.target.value, 10)
    if (event.target.value == '') {
      value = ''
      setMinutes(value)
    } else {
      value = Math.min(59, Math.max(0, value))
      setMinutes(value.toString())
    }
  }

  const formatMinutes = () => {
    let adjustedValue
    let formattedMinutes
    if (minutes == '') {
      formattedMinutes = minutes
      setMinutes(formattedMinutes)
    } else {
      adjustedValue = Math.min(59, Math.max(0, parseInt(minutes, 10)))
      formattedMinutes = adjustedValue <= 9 ? `0${adjustedValue}` : adjustedValue.toString()
      setMinutes(formattedMinutes)
    }
  }

  const setCurrentTime = () => {
    const currentTime = new Date()

    const hours = currentTime.getHours()
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');

    const minutes = currentTime.getMinutes()
    const formattedMinutes = minutes.toString().padStart(2, '0');

    const period = hours >= 12 ? 'PM' : 'AM'

    setHours(formattedHours)
    setMinutes(formattedMinutes)
    setTimePeriod(period)
  }

  const formatData = () => {
    const formValues = {
      mvpName: mvp, 
      mapName: map,
      hours: hours,
      minutes: minutes,
      timePeriod: timePeriod
    }
    return formValues
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    onSubmit(formatData)
  }


  return (
    <>
      <div className="newMvp_container">
        <form 
          id='my-form' 
          style={{display: 'flex', flexDirection: 'column', rowGap: '24px'}} 
          onSubmit={handleOnSubmit}
        >

          <span className="newMvp_span_mvps">

            <Select 
              variant="plain" 
              placeholder="Seleccionar MVP" 
              sx={[selectStyles, Boolean(mvp) ? selectedStyles : {}]} 
              onChange={(event, value) => {setMvp(value)}}
              required
            >
              {Object.keys(filteredDataSource).map((key) => {
                return (
                  <Option key={key} value={key} sx={optionsStyles}>{filteredDataSource[key]['fullName']}</Option>
                )
              })}
            </Select>

            <Select
              disabled={(mvp == '')}
              variant="plain" 
              placeholder="Seleccionar Mapa" 
              sx={[selectStyles, Boolean(map) ? selectedStyles : {}]}
              onChange={(event, value) => {setMap(value)}}
              value={map}
              required
            >
              {
                mvp == '' ? (
                  <Option value="default" sx={optionsStyles}>default</Option>
                ):
                (
                  Object.keys(filteredDataSource[mvp]['maps']).map((key) => {
                    return (
                      <Option key={key} value={key} sx={optionsStyles}>{key}</Option>
                    )
                  })
                ) 
              }
            </Select>

          </span>

          <span className="newMvp_span_hora">

            <button type="button" className="current_date_btn" onClick={setCurrentTime} />

            <input type="number" 
              name="Hora" 
              id="hora_input" 
              placeholder="Hora" 
              min="1" 
              max="12" 
              onChange={validateHours} 
              onBlur={formatHours}
              value={hours}
              required 
            />

            <span style={{color: '#ABABAB', fontSize: 28, lineHeight: 0, margin: '0px 8px 2px 8px'}}>:</span>

            <input type="number" 
              name="Minutos" 
              id="minutos_input" 
              placeholder="Minutos" 
              min="0" 
              max="59" 
              onChange={validateMinutes}
              onBlur={formatMinutes}
              value={minutes}
              required
            />

            <Select 
              name="timePeriod" 
              variant="plain" 
              placeholder="AM / PM" 
              sx={[...periodStyles, Boolean(timePeriod) ? selectedPeriodStyles : {}]}
              onChange={(event, value) => {setTimePeriod(value)}}
              value={timePeriod}
              required
            >
              <Option value="AM" sx={optionsStyles} >AM</Option>
              <Option value="PM" sx={optionsStyles} >PM</Option>
            </Select>

          </span>

        </form>
        <ThumbnailsContainer mvpName={mvp} mapName={map}/>
      </div>
    </>
  )
}

export default NewMvpForm;


const selectStyles = {
  width: '100%',
  borderRadius: 3, 
  maxHeight: 30, 
  minHeight: 30,
  color: '#666666',
  backgroundColor: '#EEEEEE14',
  fontFamily: 'Roboto Flex',
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: '700 !important',
  lineHeight: 'normal',
  boxSizing: 'border-box',
  transition: 'border 0.3s',
  border: '1px solid #1d1d1d',
  outline: 'none',
  ':hover' : {
    backgroundColor: '#EEEEEE14',
    border: '1px solid #ededed26',
    color: '#ABABAB'
  },
  ':focus-visible': {
    outline: 'none',
    border: '1px solid #ABABAB !important',
    color: '#ABABAB'
  }
}

const selectedStyles = { 
  backgroundColor: '#EEEEEE14',
  border: '1px solid #ededed26',
  color: '#ABABAB' 
  }

const optionsStyles = {
  border: '1px solid #1E1E1E',
  backgroundColor: '#1E1E1E !important',
  fontFamily: 'Roboto Flex',
  fontWeight: 400,
  color: '#ABABAB',
  fontSize: 14,
  ':hover' : {
  border: '1px solid #ededed26',
  color: '#ABABAB !important',
  fontWeight: 500
  }
}

const periodStyles = [
  selectStyles, 
  { width: 126, marginLeft: '16px'}
]

const selectedPeriodStyles = {
  backgroundColor: '#EEEEEE14',
  border: '1px solid #ededed26',
  color: '#ABABAB'
}
