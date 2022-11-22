import React, {useState, useEffect} from 'react';
import {getGeneros} from '../../services/librosServices';

// function InputField() {
//   const [mydata, setMydata] = useState([]);

//   useEffect(() => {
//       const getData = async () => {
//           let response = await getGeneros();   
//           if(response.status) {
//               setMydata(response.data);
//           }
//       }
//       getData();
//   }, []);

//   return(
//     <span>
//       <input list="dataOptions" />
      

//       <datalist id="dataOptions">

//           {mydata.map((e,i)=>{
//             return(<option key={i} value={e.nombre}/>)
//           })}

//       </datalist>

//     </span>
//   )
// }

// export default InputField

export default class InputField extends React.Component {

  constructor(props){
    super(props);
    this.state={
        mydata:[]
    }
}

  async componentDidMount() {

    let response = await getGeneros();   
    if(response.status) {
        this.setState({ mydata: response.data });
    }

  }

  
  render(){
    
    return(
      <span>
        <input list="dataOptions" />
        

        <datalist id="dataOptions">

            {this.state.mydata.map((e,i)=>{
              return(<option key={i} value={e.nombre}/>)
            })}

        </datalist>

    </span>
    )
  }
}