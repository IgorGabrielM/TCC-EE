import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import myaxios from './myaxios';
import './style/home.css';

const Home = () => {

    const [lugares, setlugares] = useState([]);

    const baixaLugares = async () => {
        const response = await myaxios.get('/lugar')

        console.log(response.data)
        setlugares(response.data);
    }

    useEffect(() => {
        baixaLugares()
    }, [])

    return (

        <div>
            <MapContainer center={[-23.097481363633214, -47.228580221562]} zoom={16} scrollWheelZoom={true} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    lugares != null ? lugares.map(lugar => {
                        return (<Marker position={[lugar.lat, lugar.lng]}>
                            <Popup key={lugar.id}>
                                Nome do lugar: {lugar.nomeLugar}<br />
                                Esportes disponiveis: {lugar.esportDisp} <br />
                                Descrição: {lugar.descricao}
                            </Popup>
                        </Marker>)
                    })
                        : null}
            </MapContainer>
        </div>
    );
}

export default Home;