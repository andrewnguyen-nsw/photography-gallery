export const sendEmail = async (data) => {
  try {
    fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },      
    })
  } catch (error) {
    
  }
}