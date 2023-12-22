export const sendEmail = async (data) => {
  try {
    const response = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },      
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.json();
    }

    
  } catch (error) {
    console.error(error);
    return false;
  }
}