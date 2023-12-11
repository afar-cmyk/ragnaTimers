import React, { useState, useEffect} from "react";
import NewMvpForm from './NewMvpForm.jsx'

export default function contentContainer() {
  const [submittedData, setSubmittedData] = useState('');

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  console.log(submittedData)
  
  return (
    <>
      <NewMvpForm onSubmit={handleFormSubmit} />
      <button form='my-form' type='submit'>nuevo MVP</button>
      
      <p style={{color: 'white'}}>Datos enviados: {JSON.stringify(submittedData)}</p>
    </>
  )
}
