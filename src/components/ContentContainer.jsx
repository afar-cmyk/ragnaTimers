import React, { useState, useEffect} from "react";
import NewMvpForm from './NewMvpForm.jsx'
import DataBaseManager from "./database/DataBaseManager.jsx";


export default function ContentContainer() {
  const [submittedData, setSubmittedData] = useState('');

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  console.log(submittedData)
  
  return (
    <>
      <NewMvpForm onSubmit={handleFormSubmit} />
      <button form='my-form' type='submit'>nuevo MVP</button>
      <DataBaseManager />
      
      <p style={{color: 'white'}}>Datos enviados: {JSON.stringify(submittedData)}</p>
    </>
  )
}
