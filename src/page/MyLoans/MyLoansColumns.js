 import {format} from 'date-fns'

 const handleReturn= (cell) => {
    console.log("details ",cell?.row?.original);
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
             <button className="act-btn" id='return' onClick={() => handleReturn(props)}>Editar</button>
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
     ]
   }
   ]
