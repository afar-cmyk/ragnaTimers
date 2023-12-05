import React, { useState, useEffect, useRef } from "react";

const NewMVP = ({ time }) => {
    console.log("Hola mundo desde Timear")

  return (
    <>

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

      <button>Hora Actual</button>

      <input type="number" name="Hora" id="hora_input" placeholder="Ingresar Hora" />
      <input type="number" name="Minutos" id="hora_input" placeholder="Ingresar Minutos" />
      
      <select name="MVP" id="nombre_mvp">
        <option value="none" selected disabled hidden>Periodo</option> 
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </>
  );
};

export default NewMVP;
