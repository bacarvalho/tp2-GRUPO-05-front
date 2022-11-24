import {format} from 'date-fns'
import { eliminarLibro } from '../../services/librosServices';
import { getTokenUser } from '../../services/OauthServices';

const handleEdit = (cell) => {
  console.log("details ",cell?.row?.original);
}

const handleDelete = async(cell) => {
  console.log("delete", cell?.row?.original);


  let response = await eliminarLibro(cell.row.original.id, getTokenUser());
  if (response.status) {
    alert('Libro eliminado');
    window.location.reload(true);
    //TODO: Cambiar por un modal o algo mas lindo. Igualmente la funcionalidad está.
  }
}

export const COLUMNS = [
  {
    // primer grupo
    Header: "Libro",
    // primer grupo de columnas
    columns: [
      {
        Header: 'Acción',
        accessor: 'action',
        disableFilters: true,
        disableSortBy: true,
        Cell: props => (
          <span>
            <button className="act-btn" id='edit' onClick={() => handleEdit(props)}>Editar</button>
            <button className="act-btn" id ='delete' onClick={()=> handleDelete(props)}>Borrar</button>
          </span>
        )
      },
      {
        Header: 'Portada',
        accessor: 'Libro.imagen_portada',
        disableFilters: true,
        disableSortBy: true,
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
  