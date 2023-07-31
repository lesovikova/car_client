import React from 'react'
import './Table.css'
import TableHead from '../tableHead/TableHead';
import TableBody from '../tableBody/TableBody';


export default function Table() {

  return (
    <div className='table'>
      <TableHead />
      <TableBody/>
      
    </div>
  )
}
