 import {format} from 'date-fns'

 const handleReturn= (cell) => {
    console.log("details ",cell?.row?.original);
  }
 
 export const COLUMNS = [
    {
      Header: 'Acción',
      disableFilter: true,
      disableSortBy: true,
      Cell: props => (
        <button className="act-btn" id='return' onClick={() => handleReturn(props)}>Devolver</button>
      )
    },
    {
      Header: 'Portada',
      accessor: 'Ejemplar.Libro.imagen_portada',
      disableFilters: true,
      disableSortBy: true,
      Cell: tableProps => (
        <img
          src={tableProps.row.original.Ejemplar.Libro.imagen_portada}
          width={60}
          alt='Portada'
        />
      )
    },
    {
      Header: 'Autor',
      accessor: 'Ejemplar.Libro.Autor.nombre'
    },
   {
    Header: 'Titulo',
    accessor: 'Ejemplar.Libro.titulo'
   },
   {
    Header: 'Genero',
    accessor: 'Ejemplar.Libro.Genero.nombre'
  },
  {
    Header: 'Editorial',
    accessor: 'Ejemplar.Libro.Editorial.nombre'
  },
  {
    Header: 'ISBN',
    accessor: 'Ejemplar.isbn_libro'
  },
  {
    Header: 'Fecha Desde',
    accessor: 'fecha_inicio',
    Cell: ({ value }) => {
      if (value == null) {
        return 'N/A'
      }
      return format(new Date(value), 'dd/MM/yyyy')}
  }
]
