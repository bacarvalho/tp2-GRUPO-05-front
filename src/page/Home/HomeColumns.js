import { useNavigate } from "react-router-dom";

const handleView= (cell, navigate, location) => {
  //Depende de lo que pase en el back, es posible que tengamos que hacer un request al detalle del libro para ver el dueño y si esta prestado.
    navigate('books/detail',  
      {state:{data: cell.cell.row.original}}
    );
}


export const COLUMNS = () => {

  const navigate = useNavigate();
  
  return([
    {
      Header: 'Acción',
      disableFilter: true,
      disableSortBy: true,
      Cell: props => (
        <span>
          <button className="act-btn" id='view' onClick={() => handleView(props, navigate)}>Ver Detalle</button>
        </span>
      )
    },
    {
      Header: 'Portada',
      accessor: 'Libro.imagen_portada',
      disableSortBy: true,
      disableFilterBy: true,
      Cell: tableProps => (
        <img
          src={`/imagenes_portadas/${tableProps.row.original.Libro.isbn}.jpg`}
          width={60}
          alt='Portada'
        />
      )
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
  ])

} 
  