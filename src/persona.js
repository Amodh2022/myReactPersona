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

    // Check if userId is empty or null
    if (!encryptedUserId) {
      // Handle the case where userId is empty or null (e.g., redirect to an error page)
      console.error('userId is missing.');
      return;
    }

    var decodedString = atob(encryptedUserId);
   
    const client = new Persona.Client({
      templateId: "itmpl_oFwr5vDFxPnJVnpKmXpgxY5x",
      environment: "sandbox",
      onReady: () => client.open(),
      onComplete: ({ inquiryId, status, fields }) => {
        if (status === "completed") {
          callApi(inquiryId, decodedString);

          const previousLink = document.referrer || '/';
          window.location.href = previousLink;

          if (window.opener) {
            window.close();
          }
        }
      },
      onCancel: ({ inquiryId, sessionToken }) => {
        const previousLink = document.referrer || '/';
        window.location.href = previousLink;

        if (window.opener) {
          window.close();
        }
      },
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
