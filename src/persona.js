import React, { useEffect } from 'react';
import Persona from 'persona';
import { useLocation } from 'react-router-dom';

const PersonaComponent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get('userId');

  useEffect(() => {
    const client = new Persona.Client({
      templateId: "itmpl_oFwr5vDFxPnJVnpKmXpgxY5x",
      environment: "sandbox",
      onReady: () => client.open(),
      onComplete: ({ inquiryId, status, fields }) => {
        console.log(userId)

        if (status === "completed") {
          // Do something when the Persona process is completed
          window.location.href = 'https://www.google.com';
        }
      },
      onCancel: ({ inquiryId, sessionToken }) => console.log('onCancel'),
      onError: (error) => console.log(error),
    });
    client.open();

    return () => {
      // Clean up if needed
    };
  }, [userId]); // Make sure to include userId in the dependencies array

  return (
    <div>
      {/* Your React component content */}
    </div>
  );
};

export default PersonaComponent;
