// PersonaComponent.js
import React, { useEffect } from 'react';
import Persona from 'persona';
import { BrowserRouter as Router, useParams } from 'react-router-dom';


const PersonaComponent = () => {
  const { userId } = useParams();
  useEffect(() => {
    const client = new Persona.Client({
      templateId: "itmpl_oFwr5vDFxPnJVnpKmXpgxY5x",
      environment: "sandbox",
      onReady: () => client.open(),
      onComplete: ({ inquiryId, status, fields }) => {
        console.log('User ID:', userId);
        // Redirect to Google.com on completion
        if(status=="completed"){

        }
        window.location.href = 'https://www.google.com';
      },
      onCancel: ({ inquiryId, sessionToken }) => console.log('onCancel'),
      onError: (error) => console.log(error),
    });
    client.open();

    return () => {
      // Clean up if needed
    };
  }, []); 

  return (
    <div>
      {/* Your React component content */}
    </div>
  );
};

export default PersonaComponent;
