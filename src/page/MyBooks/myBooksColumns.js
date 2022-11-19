export const COLUMNS = [
  {
    // first group - TV Show
    Header: "Libro",
    // First group columns
    columns: [
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
        Header: 'Portada',
        accessor: 'Libro.imagen_portada'
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
  },
  {
    Header: "Prestamos",
    columns: [
      {
        Header: "Fecha Desde",
        accessor: "Prestamo.fecha_inicio"
      },
      {
        Header: "Usuario",
        accessor: "Prestamo.Usuario.nombre"
      },
    ]
  }
  ]
  