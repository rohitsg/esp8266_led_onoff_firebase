import './App.scss';

import { Led, } from './Led';
import { getLogs, updateLedStatus} from './api';
import { useState, useEffect } from 'react';

const defaultState = {
  red: {
    on: false,
    logs: {},
  },
  green: {
    on: false,
    logs: {},
  }
};

function App() {
  const [isRedLedOn, setIsRedLedOn] = useState('off');
  const [isGreenLedOn, setIsGreenLedOn] = useState('off');
  const [logs, setLogs] = useState(defaultState);

  useEffect( () => {
    
      const fetchData = async () => {
        const logs = await getLogs();
        if (Object.keys(logs).length) {
          setLogs(logs);
          setIsRedLedOn(logs.red ? (logs.red.on ? "on" : 'off') : 'off');
          setIsGreenLedOn(logs.green ? (logs.green.on ? "on" : 'off') : 'off');
      }
    }
    fetchData();
  }, []);
  
  const handleIsRedOn = async (e, name, color) => {
    const nameValue = name.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    const val = e.target.value;
    await updateLedStatus({
      user: nameValue,
      led: 'red',
      on: val === 'on'
    });
    // setIsRedLedOn(val);
    const logs = await getLogs();
    setLogs(logs);
    setIsRedLedOn(logs.red.on ? "on" : 'off');
  }

  const handleIsGreenOn = async (e, name, color) => {
    const val = e.target.value;
    await updateLedStatus({
      user: name.replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
      led: 'green',
      on: val === 'on'
    });
    // setIsGreenLedOn(val);
    const logs = await getLogs();
    setLogs(logs);
    setIsGreenLedOn(logs.green.on ? "on" : 'off');
  }

  return (
    <div className="container">
      <Led color='red' isOn={isRedLedOn} handleIsOn={handleIsRedOn} logs={logs.red ? logs.red.logs: {}} />
      <Led color='green' isOn={isGreenLedOn} handleIsOn={handleIsGreenOn} logs={logs.green ? logs.green.logs : {}} />
    </div>
  );
}

export default App;
