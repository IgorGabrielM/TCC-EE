import React, { useReducer } from 'react'
import InputMask from "react-input-mask";
import myaxios from './myaxios'
import './style/CadastroLugar.css'
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
const CadastroLugar = () => {
    const initialState = { nomeLugar: "", cep: "", rua: "", bairro: "", numero: "", lat: "", lng: "", disponibilidade: "", valor: "", descricao: "", esporteDisp: "" }
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
            const res = await myaxios.post("/lugar", formState)
            alert("Dados enviados com sucesso");
            navigate("/home-proprietario")
        } catch (err) {
            navigate("/home")
        }
    }

    return (
        <div className='container-cadastro-lugar'>
            <div className="div-cadastro-lugar">
                <form className='row'>
                    <div className='col-md-6'>
                        <div className="form-cadastro-lugar">
                            <label for="nomeLugar">Nome do lugar</label>
                            <input type="text" onChange={handleChange}
                                className="input-cadastro-lugar" name="nome" id="nome" aria-describedby="helpId" placeholder=""
                                value={formState.nomelugar} />
                        </div>
                        <div className="form-cadastro-lugar">
                            <label for="cep">CEP</label>
                            <InputMask type="text" onChange={handleChange}
                                className="input-cadastro-lugar" mask="99999-999" name="cep" id="cep" aria-describedby="helpId" placeholder="99999-999"
                                value={formState.cep} />
                        </div>
                        <div className="form-cadastro-lugar">
                            <label for="rua">Rua</label>
                            <input type="text" onChange={handleChange}
                                className="input-cadastro-lugar" name="rua" id="rua" aria-describedby="helpId" placeholder="R. Exemplo"
                                value={formState.rua} />
                        </div>
                        <div className="form-cadastro-lugar">
                            <label for="bairro">Bairro</label>
                            <input type="text" onChange={handleChange}
                                className="input-cadastro-lugar" name="bairro" id="bairro" aria-describedby="helpId" placeholder="Jd. Exemplo"
                                value={formState.bairro} />
                        </div>
                        <div className="form-cadastro-lugar">
                            <label for="numero">Número</label>
                            <input type="text" onChange={handleChange}
                                className="input-cadastro-lugar" name="numero" id="numero" aria-describedby="helpId" placeholder="N°"
                                value={formState.numero} />
                        </div>
                    </div>



                    <div className='col-md-6'>
                        <div className="form-cadastro-lugar">
                            <label for="lat">Latitude</label>
                            <input type="text" onChange={handleChange}
                                className="input-cadastro-lugar" name="lat" id="lat" aria-describedby="helpId" placeholder=""
                                value={formState.lat} />
                        </div>
                        <div className="form-cadastro-lugar">
                            <label for="lng">Longitude</label>
                            <input type="text" onChange={handleChange}
                                className="input-cadastro-lugar" name="lng" id="lng" aria-describedby="helpId" placeholder=""
                                value={formState.lng} />
                        </div>
                        <div className="form-cadastro-lugar">
                            <label for="disponibilidade">Disponibilidade</label>
                            <input type="text" onChange={handleChange}
                                className="input-cadastro-lugar" name="disponibilidade" id="disponibilidade" aria-describedby="helpId" placeholder=""
                                value={formState.disponibilidade} />
                        </div>
                        <div className="form-cadastro-lugar">
                            <label for="valor">Valor(Hora)</label>
                            <InputMask type="text" onChange={handleChange}
                                className="input-cadastro-lugar" mask="9999,99" name="valor" id="valor" aria-describedby="helpId" placeholder="9999,99"
                                value={formState.valor} />
                        </div>
                        <div className="form-cadastro-lugar">
                            <label for="descricao">Descrição</label>
                            <input type="text" onChange={handleChange}
                                className="input-cadastro-lugar" name="descricao" id="descricao" aria-describedby="helpId" placeholder="Descrição do lugar"
                                value={formState.descricao} />
                        </div>
                        <div className="form-cadastro-lugar">
                            <label for="esporteDisp">Esporte Disponiveis</label>
                            <input type="text" onChange={handleChange}
                                className="input-cadastro-lugar" name="esporteDisp" id="esporteDisp" aria-describedby="helpId" placeholder="Ex. Futbool"
                                value={formState.esporteDisp} />
                        </div>
                    </div>

                    <div className='div-but'>
                        <button type="submit" onClick={submitForm} className="but-cadastro-lugar">Enviar</button>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default CadastroLugar
