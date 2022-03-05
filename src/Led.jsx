import React, { useState } from 'react'

import { Input } from './Input'
import { LedContainer } from './LedContainer'
import { Logs } from './Logs'
import { OnOffContainer } from './OnOffContainer'

export const Led = ({ color, isOn, handleIsOn, logs }) => {
  const [name, setName] = useState('');
  const handleChange = (e) => {
    setName(e.target.value);
  }


  return (
    <div className='Led-main-wrapper'>
      <LedContainer color={color} isOn={isOn} />
      <Input handleChange={handleChange} name={name} />
      <OnOffContainer handleIsOn={handleIsOn} isOn={isOn} color={color} name={name} />
      <Logs logs={Object.values(logs).reverse()} />
    </div>
  )
}
