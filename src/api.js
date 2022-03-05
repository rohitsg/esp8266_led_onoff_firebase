let baseUrl = 'http://localhost:3002';
// let baseUrl = 'https://e504-2409-4042-4c01-4e0f-991c-ba8a-cd4f-d543.ngrok.io';


export const getLogs = async () => {
  console.log(process.env.MODE, process.env.BACKEND_URL)
  if (process.env.REACT_APP_MODE === 'prod') {
  baseUrl = process.env.REACT_APP_BACKEND_URL
  }
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

  if (process.env.MODE === 'prod') {
    baseUrl = process.env.BACKEND_URL
    }
  try {
    const resp = await fetch(`${baseUrl}/ledOp`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    await resp.json();
  } catch (err) {
    console.error('Error while updating led status: ', err);
  }
}