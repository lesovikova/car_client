import React from 'react'
import './TableRow.css'
import TableNumberCell from '../tableNumberCell/TableNumberCell';
import TableCell from '../tableCell/TableCell';
import TableOptionsCell from '../tableOptionsCell/TableOptionsCell'

export default function TableRow({number, brand, model, colour, engineType, engineSize, handleDelete, handleEdit}) {

  return (
    <div className='table-row' >
        <TableNumberCell number={number}/>
        <TableCell text={brand}/>
        <TableCell text={model}/>
        <TableCell text={colour}/>
        <TableCell text={engineType}/>
        <TableCell text={engineSize}/>
        <TableOptionsCell identifier={number} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  )
}
