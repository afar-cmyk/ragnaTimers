import React, { useState, useEffect} from "react";
import NewMvpForm from './NewMvpForm.jsx'

export default function contentContainer() {
  const [submittedData, setSubmittedData] = useState('');

  const handleFormSubmit = (data) => {
    // Actualiza el estado con los datos del hijo al hacer submit
    setSubmittedData(data);
  };

  console.log(submittedData)
  
  return (
    <>
    {/* TODO mostrar los datos que se enviaron en el formulario aqui en este componente */}
      <NewMvpForm onSubmit={handleFormSubmit} />
      <button form='my-form' type='submit'>nuevo MVP</button>
      
      <p style={{color: 'white'}}>Datos enviados: {JSON.stringify(submittedData)}</p>
    </>
  )
}
