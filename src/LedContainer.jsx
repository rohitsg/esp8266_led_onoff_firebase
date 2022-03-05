import { LedImage } from './LedImage'
import React from 'react'

export const LedContainer = ({ color, isOn }) => {
  const isOnColor = `${isOn === 'on' ? color : 'gray'}`;

  return (
    <div className='Led-container'>
      <LedImage color={isOnColor} />
    </div>
  )
}
