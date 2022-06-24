import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style/Usuario.css'
import myaxios from './myaxios'

const Usuario = () => {

    const [usuario, setUsuario] = useState([])

    const baixaUsuario = async () => {
        const response = await myaxios.get('/usuario')
        console.log(response.data)
        setUsuario(response.data)
    }

    useEffect(() => {
        baixaUsuario()
    }, [])

    return (
        <div className='container-usuario'>
            <div className="div-usuario">
                {
                    usuario != null ? usuario => {
                        return (
                            <div>
                                <div className="div-usuario-content">
                                    <h4 className="card-title">Nome: {usuario.nome}</h4>
                                    <p className="card-text">Esportes favoritos: {usuario.esporteFav}</p>
                                </div>
                            </div>
                        )
                    } : null
                }

            </div>
        </div>

    )
}

export default Usuario
