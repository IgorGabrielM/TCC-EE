import React, { useState, useEffect } from 'react'
import myaxios from './myaxios'
import Pagination from 'react-bootstrap/Pagination'

const Evento = () => {

    const entraEvento = () => {
        myaxios.post('/evento').then(r => r.data)
    }

    const [eventos, setEventos] = useState([])

    const baixaEventos = async () => {
        const response = await myaxios.get(`/evento`)

        console.log(response.data)
        setEventos(response.data)

    }

    useEffect(() => {
        baixaEventos();
    }, [])

    return (

        < div >
            <div className="card-body">
                {
                    eventos != null ? eventos.map(evento => {
                        return (
                            <div>
                                <div className='card'>
                                    <h4 className="card-title" key={evento.id} >{evento.nomeEvento}</h4>
                                    <p className="card-text">
                                        Participantes: {evento.participantes}
                                        <br />
                                        Esporte: {evento.esporte}
                                        <br />
                                        Lugar: {evento.nomeLugar}
                                        <br />
                                        Inicio: {evento.dataHoraInicio}
                                        <br />
                                        Fim: {evento.dataHoraFim}
                                    </p>
                                    < button onClick={entraEvento} className="entraEvento"> Participar </button>
                                </div>
                            </div>)
                    })
                        : "Nenhum evento encontrado"}
            </div>

        </div >

    )
}


export default Evento
