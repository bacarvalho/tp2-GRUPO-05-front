export const COLUMNS = [
    {
      Header: 'Portada',
      accessor: 'Libro.imagen_portada',
      disableSortBy: true,
      disableFilterBy: true
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
      Header: 'Genero',
      accessor: 'Libro.Genero.nombre'
    },
    {
        Header: 'Editorial',
        accessor: 'Libro.Editorial.nombre'
      }
  ]
  