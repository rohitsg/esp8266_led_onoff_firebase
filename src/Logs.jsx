import React from 'react'

export const Logs = ({ logs = [] }) => {
  return (
    <div className='Logs-container'>
      {logs.map((msg) => {
        return <li key={msg}>{msg}</li>
      })}
    </div>
  )
}
