import React, { useState, useEffect, useRef } from "react";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const NewMVP = ({ time }) => {
    console.log("Hola mundo desde Timear")

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

  return (
    
    <div className="newMvp_container">
      <div style={{display: 'flex', flexDirection: 'column', rowGap: 24}} >

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

          <input type="number" name="Hora" id="hora_input" placeholder="Hora" />
          <span style={{color: '#ABABAB', fontSize: 28, lineHeight: 0, margin: '0px 8px 2px 8px'}}>:</span>
          <input type="number" name="Minutos" id="hora_input" placeholder="Minutos" />

          <Select name="periodo" variant="plain" placeholder="AM / PM" sx={[selectStyles,{ width: 126, marginLeft: '16px'}]}>
            <Option value="AM" sx={optionsStyles}>AM</Option>
            <Option value="PM" sx={optionsStyles}>PM</Option>
          </Select>

        </span>

      </div>
      
    </div>
  );
};

export default NewMVP;
