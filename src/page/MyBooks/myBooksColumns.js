import {format} from 'date-fns'
import { eliminarLibro, getDetailsBook } from '../../services/librosServices';
import { getTokenUser } from '../../services/OauthServices';
import { useNavigate } from "react-router-dom";



const handleEdit = async(cell, navigate) => {
  console.log(cell?.row?.original.id, getTokenUser())
  let response = await getDetailsBook(cell?.row?.original.id, getTokenUser());
  
  navigate('/page/EditCreateBooks',
    { state: { data: response.data} }
    
  );
}

const handleDelete = async(cell) => {
  let response = await eliminarLibro(cell.row.original.id, getTokenUser());
  if (response.status) {
    alert('Libro eliminado');
    window.location.reload(true);
    //TODO: Cambiar por un modal o algo mas lindo. Igualmente la funcionalidad está.
  }
}

export const COLUMNS = () => {

  const navigate = useNavigate();

return([
    // primer grupo
    // Header: "Libro",
    // // primer grupo de columnas
    // columns: [
      {
        Header: 'Acción',
        accessor: 'action',
        disableFilterBy: true,
        disableSortBy: true,
        Cell: props => (
          <span>
            <button className="act-btn" id='edit' onClick={() => handleEdit(props, navigate)}>Editar</button>
            <button className="act-btn" id ='delete' onClick={()=> handleDelete(props)}>Borrar</button>
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
            src={tableProps.row.original.Libro.imagen_portada}
            width={60}
            alt='Portada'
          />
        )
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
      },
      //]
  // },
  // // segundo grupo de columnas: info de prestamo
  // {
  //   Header: "Prestamos",
  //   columns: [
      {
        Header: "Fecha Desde",
        accessor: "Prestamo.fecha_inicio",
        disableFilterBy: true,
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
  //  ]
  //}
    ])
  };
