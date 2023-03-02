import React, { useState } from "react";
import fs from "fs";
import path from "path";
import os from "os";

function AddTimer() {
  const [timerName, setTimerName] = useState("");
  const [timerDuration, setTimerDuration] = useState(0);
  const [timerImage, setTimerImage] = useState(null);

  function handleTimerImageChange(event) {
    const file = event.target.files[0];

    if (
      file &&
      (file.type === "image/jpeg" || file.type === "image/png") &&
      (file.name.endsWith(".jpg") || file.name.endsWith(".png"))
    ) {
      setTimerImage(file);
    } else {
      setTimerImage(null);
      alert("Por favor, selecciona un archivo en formato JPG o PNG.");
    }
  }

  function handleTimerNameChange(event) {
    setTimerName(event.target.value);
  }

  function handleTimerDurationChange(event) {
    setTimerDuration(event.target.value);
  }

  function handleTimerImageChange(event) {
    setTimerImage(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Creamos un objeto con la información del timer
    const timer = {
      name: timerName,
      duration: timerDuration,
      image: timerImage.name,
    };

    // Creamos la ruta donde se guardará el timer
    const timerFilePath = path.join(
      os.homedir(),
      "timers",
      `${timer.name}.json`
    );

    // Guardamos la información del timer en un archivo en formato JSON
    fs.writeFileSync(timerFilePath, JSON.stringify(timer));

    // Limpiamos los inputs
    setTimerName("");
    setTimerDuration(0);
    setTimerImage(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre del timer:
          <input
            type="text"
            value={timerName}
            onChange={handleTimerNameChange}
          />
        </label>
      </div>
      <div>
        <label>
          Duración del timer (en segundos):
          <input
            type="number"
            value={timerDuration}
            onChange={handleTimerDurationChange}
          />
        </label>
      </div>
      <div>
        <label>
          Imagen del timer:
          <input type="file" onChange={handleTimerImageChange} />
        </label>
      </div>
      <button type="submit">Agregar timer</button>
    </form>
  );
}

export default AddTimer;
