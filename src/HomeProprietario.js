import React from 'react';
import './style/HomeProps.css';
import { Link } from 'react-router-dom'

const HomeProprietario = () => {

    return (
        <div className='container'>
            <div className='card-button'>
                <a className='but-home-props'><Link to={"../proprietario/cadastro-lugar"}>Adicionar lugar</Link> </a>
            </div>
        </div>
    );
}

export default HomeProprietario;