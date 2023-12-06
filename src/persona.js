// PersonaComponent.js
import React, { useEffect } from 'react';
import Persona from 'persona';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { callApi } from './personaupdateapi'; 


const PersonaComponent = () => {
  const { userId } = useParams();

  useEffect(() => {
  
    const urlParams=new URLSearchParams(window.location.search);
    const param1=urlParams.get('userId');
    console.log(param1);
    const client = new Persona.Client({
      templateId: "itmpl_oFwr5vDFxPnJVnpKmXpgxY5x",
      environment: "sandbox",
      onReady: () => client.open(),
      onComplete: ({ inquiryId, status, fields }) => {
        console.log(userId);
        
        if(status=="completed"){
           callApi(inquiryId, param1);
        }
        
      },
      onCancel: ({ inquiryId, sessionToken }) => console.log('onCancel'),
      onError: (error) => console.log(error),
    });
    client.open();

    return () => {
      
    };
  }, []); 

  return (
    <div>
      {/* Your React component content */}
    </div>
  );
};

export default PersonaComponent;
