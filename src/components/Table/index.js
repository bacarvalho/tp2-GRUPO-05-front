import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from 'react-table'
//import MOCK_DATA from './sampledata.json'
import { GlobalFilter } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'

import './styles.desktop.css'

export default function Table({data, columns}) {

	const defaultColumn = useMemo(()=>{
		return {
		  Filter: ColumnFilter
		}
	  },[]);

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
		setGlobalFilter,
		state: { pageIndex, pageSize, globalFilter },
		prepareRow,
		} =
		useTable({
			columns,
			data,
			defaultColumn
		},
			useFilters,
			useGlobalFilter,
			useSortBy,
			usePagination
		);

		// const {globalFilter} = state;

	return (
		<div className='table-container'>
			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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