import { format } from 'date-fns'
import { useNavigate } from "react-router-dom";
import { devolverLibro } from '../../services/librosServices';
import { getTokenUser } from '../../services/OauthServices';



const handleReturn = async(cell, navigate) => {
    let response = await devolverLibro(cell.cell.row.original.Ejemplar.id, getTokenUser());
    if (response.status) {
       alert('Libro devuelto correctamente');
       window.location.reload(true);
      }
};


const handleView = (cell, navigate) => {
  console.log("details ", cell?.row?.original);
  navigate('books/detail',
    { state: { data: cell.cell.row.original.Ejemplar } }
  );
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
          <button className="act-btn" id='view' onClick={() => handleView(props, navigate)}>Ver</button>
          <button className="act-btn" id='return' onClick={() => handleReturn(props)}>Devolver</button>
        </span>
      )
    },
    {
      Header: 'Portada',
      accessor: 'Ejemplar.Libro.imagen_portada',
      disableFilterBy: true,
      disableSortBy: true,
      Cell: tableProps => (
        <img
          src={`http://localhost:3000/book/imagen/${tableProps.row.original.Ejemplar.Libro.imagen_portada}`}
          // src={tableProps.row.original.Ejemplar.Libro.imagen_portada} 
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
        return format(new Date(value), 'dd/MM/yyyy')
      }
    }
  ])
}