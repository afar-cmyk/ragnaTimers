import React, { useState, useEffect} from "react";
import NewMvpForm from './NewMvpForm.jsx'

const ContainerContent = () => {
  const [submittedData, setSubmittedData] = useState('');

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <>
    <NewMvpForm onSubmit={handleFormSubmit} />
    <button form='my-form' type='submit'>nuevo MVP</button>
    
    <p style={{color: 'white'}}>Datos enviados: {JSON.stringify(submittedData)}</p>
    <b style={{color: 'white'}}>HORA ACTUAL: 02:47 AM</b>
  </>
  )
}

export default ContainerContent
