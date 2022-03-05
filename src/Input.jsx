import React from 'react'

export const Input = ({ name, handleChange }) => {
  return (
    <div className='Input-container'>
      <label htmlFor="nameInput">
        Enter your name:
        <input max={10} type="text" id='nameInput' onChange={handleChange} />
      </label>
      <button>Save</button>
      <span className='username'>Your Name: {name}</span>
    </div>
  )
}
