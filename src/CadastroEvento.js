import React, { useReducer } from 'react'
import './style/CadastroEvento.css'
import myaxios from './myaxios'
import { useNavigate } from 'react-router-dom';


const formReducer = (state, action) => {
    switch (action.type) {
        case 'ATUALIZA':
            return {
                ...state,
                [action.name]: action.value
            }
        case 'INICIALIZA_CAMPOS':
            return { ...action.state }
        default:
            return state;
    }
}
const CadastroEvento = () => {
    const initialState = { nomeEvento: "", nomeLugar: "", esportes: "", dataHoraInicio: "", dataHoraFim: "" }
    const [formState, dispatch] = useReducer(formReducer, initialState);
    const handleChange = (e) => {
        dispatch({
            type: 'ATUALIZA',
            name: e.target.name,
            value: e.target.value
        })

    }
    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            const res = await myaxios.post("/evento", formState)
            alert("Dados enviados com sucesso");
            navigate("/home")
        } catch (err) {
            navigate("/home")
        }


    }
    return (

        <div className='container-cadastro-evento'>
            <div className="div-cadastro-evento">
                <form className='row'>
                    <div className='col-md-6'>
                        <div className="form-cadastro-evento">
                            <label for="nomeEvento">Nome do evento</label>
                            <input type="text" onChange={handleChange}
                                className="input-cadastro-evento" name="nomeEvento" id="nomeEvento" aria-describedby="helpId" placeholder=""
                                value={formState.nomeEvento} />
                        </div>

                        <div className="form-cadastro-evento">
                            <label for="nomeLugar">Nome do lugar</label>
                            <input type="nomeLugar" onChange={handleChange}
                                className="input-cadastro-evento" name="nomeLugar" id="nomeLugar" aria-describedby="helpId" placeholder=""
                                value={formState.nomeLugar} />
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="form-cadastro-evento2">
                            <label for="esportes">Esporte praticado</label>
                            <input type="esportes" onChange={handleChange}
                                className="input-cadastro-evento" name="esportes" id="esportes" aria-describedby="helpId" placeholder=""
                                value={formState.esportes} />
                        </div>

                        <div className="form-cadastro-evento2">
                            <label for="dataHoraInicio">Data e hora de inicio</label>
                            <input type="datetime-local" onChange={handleChange}
                                className="input-cadastro-evento" name="dataHoraInicio" id="dataHoraInicio" aria-describedby="helpId" placeholder=""
                                value={formState.dataHoraInicio} />
                        </div>

                        <div className="form-cadastro-evento2">
                            <label for="dataHoraFim">Data e hora do fim</label>
                            <input type="datetime-local" onChange={handleChange}
                                className="input-cadastro-evento" name="dataHoraFim" id="dataHoraFim" aria-describedby="helpId" placeholder=""
                                value={formState.dataHoraFim} />
                        </div>
                    </div>
                    <div className='div-but'>
                        <button type="submit" onClick={submitForm} className="but-cadastro-evento">Enviar</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default CadastroEvento
