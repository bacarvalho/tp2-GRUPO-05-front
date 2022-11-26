import React from 'react';
import InputField from './InputField.js'

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return(
    <span>
      <input value ={filterValue || ''} placeholder="filtrar por"
      onChange={e => setFilter(e.target.value)}/>
      <InputField></InputField>
    </span>
  )
}