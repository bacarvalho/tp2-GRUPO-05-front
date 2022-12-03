import { useNavigate } from "react-router-dom";
import { isLoggedUser } from "../../services/OauthServices";

const handleView = (cell, navigate, location) => {
  if (isLoggedUser()) {
    navigate('books/detail',
      { state: { data: cell.cell.row.original } }
    );
  } else
    alert('Es necesario estar logeado para ver este detalle');
}

export const COLUMNS = () => {

  const navigate = useNavigate();

  return ([
    {
      Header: 'Acción',
      disableFilterBy: true,
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
          // src={`/imagenes_portadas/${tableProps.row.original.Libro.isbn}.jpg`}
          src={`http://localhost:3000/book/imagen/${tableProps.row.original.Libro.imagen_portada}`}
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
