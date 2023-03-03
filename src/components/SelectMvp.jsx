import React from "react";

const SelectMvp = () => {
  return (
    <div className="selectMvp-container">
      <h4>Selecciona un MVP:</h4>
      <select name="mvps" id="mpvs">
        <option value="maya">Maya</option>
        <option value="garm">Garm</option>
        <option value="ladyTanee">Lady-Tanee</option>
      </select>
    </div>
  );
};

export default SelectMvp;
