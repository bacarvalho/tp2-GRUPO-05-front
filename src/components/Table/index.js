import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, useFilters } from 'react-table'
import MOCK_DATA from './sampledata.json'
import { COLUMNS } from './columns'
import { GlobalFilter } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'

import './styles.desktop.css'

export default function Table(apidata) {
	const someData = { apidata }
	console.log(someData);
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	const defaultColumn = useMemo(()=>{
		return {
		  Filter: ColumnFilter
		}
	  },[]);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		setGlobalFilter,
		} =
		useTable({
			columns,
			data,
			defaultColumn
		},
			useFilters,
			useGlobalFilter,
			useSortBy
		);

		const {globalFilter} = state;

	return (
		<div className='table-container'>
			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{
								headerGroup.headers.map(column => (
									<th {...column.getHeaderProps(column.getSortByToggleProps())}>
										{column.render('Header')}
										<div id="sorting">
											{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
										</div>
										<div id="filter">{column.canFilter ? column.render('Filter') : null}</div>
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
										row.cells.map(cell => {
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