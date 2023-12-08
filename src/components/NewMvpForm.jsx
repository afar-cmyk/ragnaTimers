import React, { useState, useEffect, useRef } from "react";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import ThumbnailsContainer from "./thumbnails/ThumbnailsContainer.jsx";

const NewMvpForm = ({ time }) => {

  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');

  const validateHours = (event) => {
    let value = parseInt(event.target.value, 10);
    value = Math.min(12, Math.max(1, value));
    setHours(value.toString());
  }

  const formatHours = () => {
    const adjustedValue = Math.min(12, Math.max(0, parseInt(hours, 10)));
    const formattedHours = adjustedValue <= 9 ? `0${adjustedValue}` : adjustedValue.toString();
    setHours(formattedHours);
  };

  const validateMinutes = (event) => {
    let value = parseInt(event.target.value, 10);
    value = Math.min(59, Math.max(0, value));
    setMinutes(value.toString());
  }

  const formatMinutes = () => {
    const adjustedValue = Math.min(59, Math.max(0, parseInt(minutes, 10)));
    const formattedMinutes = adjustedValue <= 9 ? `0${adjustedValue}` : adjustedValue.toString();
    setMinutes(formattedMinutes);
  };

    const selectStyles = {
      width: '100%',
      borderRadius: 3, 
      maxHeight: 32, 
      minHeight: 32,
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

    const optionsStyles = {
      border: '1px solid #1E1E1E',
      backgroundColor: '#1E1E1E !important',
      fontFamily: 'Roboto Flex',
      fontWeight: 400,
      color: '#666666',
      fontSize: 14,
      ':hover' : {
      border: '1px solid #ededed26',
      color: '#ABABAB !important',
      fontWeight: 500
      }
    }

    //TODO Organizar el error en consola al comprobar los campos vacios

  return (
    <>
    <div className="newMvp_container">
      <div style={{display: 'flex', flexDirection: 'column', rowGap: '24px'}} >

        <span className="newMvp_span_mvps">

          <Select variant="plain" placeholder="Seleccionar MVP" sx={selectStyles}>
            <Option value="Atroce" sx={optionsStyles}>Atroce</Option>
            <Option value="Garm" sx={optionsStyles}>Garm</Option>
          </Select>

          <Select variant="plain" placeholder="Seleccionar Mapa" sx={selectStyles}>
            <Option value="Ra_fild01" sx={optionsStyles}>Ra_fild01</Option>
            <Option value="Ve_fild03" sx={optionsStyles}>Ve_fild03</Option>
          </Select>

        </span>

        <span className="newMvp_span_hora">

          <button className="current_date_btn" />

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

          <Select name="periodo" variant="plain" placeholder="AM / PM" sx={[selectStyles,{ width: 126, marginLeft: '16px'}]}>
            <Option value="AM" sx={optionsStyles}>AM</Option>
            <Option value="PM" sx={optionsStyles}>PM</Option>
          </Select>

        </span>

      </div>
      <ThumbnailsContainer />
    </div>

    <button>nuevo MVP</button>
    </>
  );
};

export default NewMvpForm;
