import React, { useMemo } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
//import MOCK_DATA from './sampledata.json'

import './styles.desktop.css'

export default function Table({data, columns}) {

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		state: { pageIndex },
		prepareRow,
		} =
		useTable({
			columns,
			data
		},
			useSortBy,
			usePagination
		);


	return (
		<div className='table-container'>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr id="header-row" {...headerGroup.getHeaderGroupProps()}>
							{
								headerGroup.headers.map(column => (
									<th {...column.getHeaderProps(column.getSortByToggleProps())}>
										{column.render('Header')}
										<span id="sorting">
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
						page.map(row => {
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
			<div id='table-buttons-container'>
				<span>
					Página {' '}
					<strong>{pageIndex + 1} de {pageOptions.length}</strong>{' '}
				</span>
				<button id='previous-table-page' onClick={()=>previousPage()} disabled={!canPreviousPage}>Anterior</button>
				<button id='next-table-page' onClick={()=>nextPage()} disabled={!canNextPage}>Siguiente</button>
				</div>
		</div>
		
	);
}