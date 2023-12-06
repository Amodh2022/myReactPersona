// PersonaComponent.js
import React, { useEffect } from 'react';
import Persona from 'persona';
import { callApi } from './personaupdateapi'; 
import { decryptUserId } from './decrypt';

const PersonaComponent = () => {


  useEffect(() => {
  
    const urlParams=new URLSearchParams(window.location.search);
    const param1=urlParams.get('userId');
    const decryptedUserId = decryptUserId(encryptedUserId,"mySecret");
    setDecryptedUserId(decryptedUserId);
    console.log(param1);
    const client = new Persona.Client({
      templateId: "itmpl_oFwr5vDFxPnJVnpKmXpgxY5x",
      environment: "sandbox",
      onReady: () => client.open(),
      onComplete: ({ inquiryId, status, fields }) => {
        console.log(decryptedUserId);
        
        if(status=="completed"){
           callApi(inquiryId, decryptedUserId);
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
