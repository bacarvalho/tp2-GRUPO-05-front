import React, {useState} from 'react';

async function handleSubmit(e) {
    e.preventDefault();
	const response = await LoginUser(username, password);
	if(response.status) {
		const cookie = new Cookies();
		cookie.set('login', response.data);
		navigate("/");
	} else {
		setIsDisabled(false);
		setErrorMessage(response.error.message);
	}
  };

export const Filters = ({columns}) =>{
    const [isbn, setIsbn] = useState("");
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [publisher, setPublisher] = useState('');
    const [genre, setGenre] = useState('');


    console.log(columns);
    return (
        <div className='filters-container'>
        <div className='filters-form'>
            Filtrar Resultados
            <form id='filters-form' onSubmit= {handleSubmit}>
                {columns.map((column)=>{
                    if (! column.disableFilterBy) {
                        return ( 
                            <>
                                <label for='`${column.Header}`'>{column.Header}: </label>
                                <span></span>
                                <input type='text' id='`${column.Header}`' onChange={(e) => setusername(e.target.value)}></input>
                            </>
                        )
                    }
                })}
                <div className='button-container'>
                    <button id='submit-filters' type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    </div>
    )

}