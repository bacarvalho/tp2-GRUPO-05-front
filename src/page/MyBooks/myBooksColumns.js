import {format} from 'date-fns'

export const COLUMNS = [
  {
    // primer grupo
    Header: "Libro",
    // primer grupo de columnas
    columns: [
      {
        Header: 'Portada',
        accessor: 'Libro.imagen_portada',
        disableFilters: true
      },
    {
      Header: 'ISBN',
      accessor: 'Libro.isbn'
    },
      {
        Header: 'Autor',
        accessor: 'Libro.Autor.nombre'
      },
      {
        Header: 'Titulo',
        accessor: 'Libro.titulo'
      },
      {
        Header: 'Editorial',
        accessor: 'Libro.Editorial.nombre'
      }
      ]
  },
  // segundo grupo de columnas: info de prestamo
  {
    Header: "Prestamos",
    columns: [
      {
        Header: "Fecha Desde",
        accessor: "Prestamo.fecha_inicio",
        Cell: ({ value }) => {
          if (value == null) {
            return 'N/A'
          }
          return format(new Date(value), 'dd/MM/yyyy')}
      },
      {
        Header: "Usuario",
        accessor: "Prestamo.Usuario.nombre",
        Cell: ({value}) => {
          if (value == null) {
            return 'N/A'
          }
          return value;
        }
      },
    ]
  }
  ]
  