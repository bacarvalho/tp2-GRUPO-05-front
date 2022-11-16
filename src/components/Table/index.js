import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'
import MOCK_DATA from './sampledata.json'
import { COLUMNS } from './columns'
import { GlobalFilter } from './GlobalFilter'
import './styles.desktop.css'

export default function Table(apidata) {
	const someData = { apidata }
	console.log(someData);
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

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
			data
		},
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
										<span>
											{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
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