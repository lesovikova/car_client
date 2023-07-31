import React from 'react'
import './NewRow.css'

export default function NewRow({click}) {


  return (
    <div className='new-row' onClick={click}>
      <p>Add new car</p>
    </div>
  )
}
