import React from 'react'
import './TableHead.css'
import TableHeadCell from '../tableHeadCell/TableHeadCell'

export default function TableHead() {
  return (
    <div className='table-head'>
        <TableHeadCell text={'#'} />
        <TableHeadCell text={'Brand'} />
        <TableHeadCell text={'Model'} />
        <TableHeadCell text={'Colour'} />
        <TableHeadCell text={'Engine Type'} />
        <TableHeadCell text={'Engine Size'} />
        <TableHeadCell text={'Options'} />
    </div>
  )
}
