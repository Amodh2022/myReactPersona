
const apiUrl = 'https://bundeeapi1.azurewebsites.net/';

export const callApi = async (personaEnquiryId, userId) => {
  try {
    const response = await fetch(`${apiUrl}/api/v1/user/createDriverProfile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personaEnquiryId,
        userId,
      }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    console.log('API response:', data);


  } catch (error) {
    console.error('API error:', error);
    throw Error("Error In Catch Block")
  }
};
