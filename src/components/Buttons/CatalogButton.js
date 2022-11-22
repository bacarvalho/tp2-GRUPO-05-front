import { Link } from 'react-router-dom';
import './styles.desktop.css'

const CatalogButton = () => {
    return (
        <div className='catalog-button-container'>
            <Link to='/'><button id='navigate-home'>Ver Catálogo</button></Link>
        </div>
    )
}

export default CatalogButton;