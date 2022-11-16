import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import MOCK_DATA from './sampledata.json'
import { COLUMNS } from './columns'
import './styles.desktop.css'

export default function Table (apidata) {
    const someData = {apidata}
    console.log(someData);
    const columns = useMemo (() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow} =
          useTable({
          columns,
          data
        },
          useSortBy
      );
    
    return (
        <div className='table-container'>
            <table {...getTableProps()}>
                    <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ?  (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                    </span>
                                </th>
                            ))
                            }
                        </tr>
                        ))
                    }

                    </thead>

                    <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell=> {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })
                            }

                            </tr>
                        )
                        })
                    }

                    </tbody>

                </table>
        </div>

    );
}