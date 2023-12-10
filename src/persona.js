// PersonaComponent.js
import React, { useEffect } from 'react';
import Persona from 'persona';
import { callApi } from './personaupdateapi'; 



const PersonaComponent = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const encryptedUserId = urlParams.get('userId');

    if (!encryptedUserId) {
      console.error('userId is missing.');
      return;
    }

    // var decodedString = atob(encryptedUserId);
    // var splitDecoded=decodedString.split('-')
    // var afterSplit=splitDecoded[0]
   
    const client = new Persona.Client({
      templateId: "itmpl_oFwr5vDFxPnJVnpKmXpgxY5x",
      environment: "sandbox",
      onReady: () => client.open(),
      onComplete: async({ inquiryId, status, fields }) => {
        if (status === "completed") {
          await callApi(inquiryId, encryptedUserId);

          // const previousLink = document.referrer || '/';
          // window.location.href = previousLink;

          // if (window.opener) {
          //   window.close();
          // }
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

    };
  }, []);

  return (
    <div>
      {/* Your React component content */}
    </div>
  );
};

export default PersonaComponent;
