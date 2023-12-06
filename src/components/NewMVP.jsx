import React, { useState, useEffect, useRef } from "react";

const NewMVP = ({ time }) => {
    console.log("Hola mundo desde Timear")

  return (
    
    <div className="newMvp_container">
      <div style={{display: 'flex', flexDirection: 'column', rowGap: 24}} >
        <span className="newMvp_span_mvps">
          <select name="MVP" id="nombre_mvp">
            <option value="none" selected disabled hidden>Seleccione un MVP</option> 
            <option value="Garm">Garm</option>
            <option value="Atroce">Atroce</option>
            <option value="Maya">Maya</option>
            <option value="Ungoliant">Ungoliant</option>
          </select>

          <select name="MVP" id="nombre_mvp">
            <option value="none" selected disabled hidden>Seleccione un Mapa</option> 
            <option value="mapa1">mapa1</option>
            <option value="mapa1">mapa1</option>
          </select>
        </span>

        <span className="newMvp_span_hora">
          <button>a</button>

          <input type="number" name="Hora" id="hora_input" placeholder="Ingresar Hora" style={{ marginRight: 8 }} />
          <span style={{color: '#ABABAB', fontSize: 28, lineHeight: 0, marginBottom: 7}}>:</span>
          <input type="number" name="Minutos" id="hora_input" placeholder="Ingresar Minutos" style={{ marginLeft: 8 }} />

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
