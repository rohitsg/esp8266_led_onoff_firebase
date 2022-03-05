const baseUrl = 'http://localhost:3002';
// let baseUrl = 'https://e504-2409-4042-4c01-4e0f-991c-ba8a-cd4f-d543.ngrok.io';

if (process.env.MODE === 'prod') {
baseUrl = process.env.BACKEND_URL
}


export const getLogs = async () => {
  try {
    const resp = await fetch(`${baseUrl}/logs`, {
      'Content-Type': 'application/json'
    });
    const logs = await resp.json();
    return logs;
  } catch (err) {
    console.error('Error occurred while getLogs: ', err);
  }
}

export const updateLedStatus = async (payload) => {
  try {
    const resp = await fetch(`${baseUrl}/ledOp`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const msg = await resp.json();
  } catch (err) {
    console.error('Error while updating led status: ', err);
  }
}