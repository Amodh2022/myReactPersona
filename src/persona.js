// PersonaComponent.js
import React, { useEffect } from 'react';
import Persona from 'persona';
import { callApi } from './personaupdateapi'; 
import { decrypt } from './decrypt'; // Replace with the actual path
import CryptoJS from 'crypto-js';
const PersonaComponent = () => {


  useEffect(() => {
  
    const urlParams=new URLSearchParams(window.location.search);
    const encryptedUserId=urlParams.get('userId');
 
    // const decryptedUserId = atob(encryptedUserId);
  
    console.log("this")
  
    const client = new Persona.Client({
      templateId: "itmpl_oFwr5vDFxPnJVnpKmXpgxY5x",
      environment: "sandbox",
      onReady: () => client.open(),
      onComplete: ({ inquiryId, status, fields }) => {
     
        if(status=="completed"){
           callApi(inquiryId, encryptedUserId);
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
