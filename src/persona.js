// PersonaComponent.js
import React, { useEffect } from 'react';
import Persona from 'persona';
import { callApi } from './personaupdateapi'; 
import { decrypt } from './decrypt'; // Replace with the actual path
import CryptoJS from 'crypto-js';

const PersonaComponent = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const encryptedUserId = urlParams.get('userId');
    var decodedString = atob(encryptedUserId);
   
    const client = new Persona.Client({
      templateId: "itmpl_oFwr5vDFxPnJVnpKmXpgxY5x",
      environment: "sandbox",
      onReady: () => client.open(),
      onComplete: ({ inquiryId, status, fields }) => {
        if (status === "completed") {
          callApi(inquiryId, decodedString);

          // Redirect to the previous link
          // const previousLink = document.referrer || '/';
          // window.location.href = previousLink;

          // Close the current tab
          if (window.opener) {
            window.close();
          }
        }
      },
      onCancel: ({ inquiryId, sessionToken }) => console.log('onCancel'),
      onError: (error) => console.log(error),
    });

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div>
      {/* Your React component content */}
    </div>
  );
};

export default PersonaComponent;
