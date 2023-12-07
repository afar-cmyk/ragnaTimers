import React, { useState, useEffect, useRef } from "react";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const NewMVP = ({ time }) => {
    console.log("Hola mundo desde Timear")

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
      fontWeight: 700,
      lineHeight: 'normal'
    }


    // .select_periodo{

    //   border: 0;
    //   color: #666666;
    //   padding-left: 16px;
    //   padding-right: 12px;
    //   margin-left: 16px;
    //   background: url('./images/arrow_down.svg') no-repeat right center;
    //   background-color: #EEEEEE14;
    //   padding-right: 20px;
    // }

  return (
    
    <div className="newMvp_container">
      <div style={{display: 'flex', flexDirection: 'column', rowGap: 24}} >
        <span className="newMvp_span_mvps">

          {/* <select name="MVP" id="nombre_mvp">
            <option value="none" selected disabled hidden>Seleccione un MVP</option> 
            <option value="Garm">Garm</option>
            <option value="Atroce">Atroce</option>
            <option value="Maya">Maya</option>
            <option value="Ungoliant">Ungoliant</option>
          </select> */}

          {/* <select name="MVP" id="nombre_mvp">
            <option value="none" selected disabled hidden>Seleccione un Mapa</option> 
            <option value="mapa1">mapa1</option>
            <option value="mapa1">mapa1</option>
          </select> */}

          <Select variant="plain" placeholder="Seleccionar MVP" sx={selectStyles}>
            <Option value="Atroce">Dog</Option>
            <Option value="Garm">Cat</Option>
          </Select>

          <Select variant="plain" placeholder="Seleccionar Mapa" sx={selectStyles}>
            <Option value="Ra_fild01">Dog</Option>
            <Option value="Ve_fild03">Cat</Option>
          </Select>

        </span>

        <span className="newMvp_span_hora">
          <button />

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
