// PersonaComponent.js
import React, { useEffect } from 'react';
import Persona from 'persona';

const PersonaComponent = () => {
  useEffect(() => {
    const client = new Persona.Client({
      templateId: "itmpl_oFwr5vDFxPnJVnpKmXpgxY5x",
      environment: "sandbox",
      onReady: () => client.open(),
      onComplete: ({ inquiryId, status, fields }) => {
        console.log(`Sending finished inquiry ${inquiryId} to backend`);
        console.log(fields);
        console.log(status);
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
