import React, { useState, useEffect, useRef } from "react";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const NewMVP = ({ time }) => {
    console.log("Hola mundo desde Timear")

    const [open, setOpen] = React.useState(false);
    const skipRef = React.useRef(false);

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
      ':hover' : {
        backgroundColor: '#EEEEEE14',
        border: '1px solid #ededed26',
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
    }}

  return (
    
    <div className="newMvp_container">
      <div style={{display: 'flex', flexDirection: 'column', rowGap: 24}} >
        <span className="newMvp_span_mvps">

          <Select variant="plain" placeholder="Seleccionar MVP" sx={selectStyles} listboxOpen={open} onListboxOpenChange={(isOpen) => {
            if (!skipRef.current) {
              setOpen(isOpen);
            }
          }} >
            <Option value="Atroce" sx={optionsStyles}>Atroce</Option>
            <Option value="Garm" sx={optionsStyles}>Garm</Option>
          </Select>

          <Select variant="plain" placeholder="Seleccionar Mapa" sx={selectStyles}>
            <Option value="Ra_fild01" sx={optionsStyles}>Ra_fild01</Option>
            <Option value="Ve_fild03" sx={optionsStyles}>Ve_fild03</Option>
          </Select>

        </span>

        <span className="newMvp_span_hora">
          <button onClick={() => {
          skipRef.current = false;
          setOpen((bool) => !bool);
        }} onMouseDown={() => {
          skipRef.current = true;
        }} />

          <input type="number" name="Hora" id="hora_input" placeholder="Hora" />
          <span style={{color: '#ABABAB', fontSize: 28, lineHeight: 0, marginBottom: 7}}>:</span>
          <input type="number" name="Minutos" id="hora_input" placeholder="Minutos" style={{ marginLeft: 8 }} />



          <select name="periodo" id="periodo_tiempo" class="custom-select" className="select_periodo">
            <option value="none" selected disabled hidden>Periodo</option> 
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>

        </span>
      </div>




      

      
      
      
    </div>
  );
};

export default NewMVP;
