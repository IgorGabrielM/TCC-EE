import './style/CadastroUsuarioPt2.css'
import React, { useState, useReducer } from 'react'
import InputMask from "react-input-mask";
import myaxios from './myaxios'
import ClipLoader from "react-spinners/ClipLoader";
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


const CadastroFormPt2 = () => {
  const initialState = { nomeUsuario: "", cep: "", rua: "", bairro: "", esporteFav: "", profileImage: "" }
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    dispatch({

      type: 'ATUALIZA',
      name: e.target.name,
      value: e.target.value
    })
  }

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true)
    myaxios.post("/proprietario", formState)
    navigate("/home")
  }

  return (
    <div className='container-cadastro-usuario'>
      {!loading ?
        <div className="div-cadastro">
          <form className='row'>
            <div className='col-md-6'>
              <div className="form-cadastro">
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" onChange={handleChange}
                  className="input-cadastro" name="nome" id="nome" aria-describedby="helpId" placeholder=""
                  value={formState.nome} />
              </div>

              <div className="form-cadastro">
                <label htmlFor="nomeUsuario">Nome de usuario</label>
                <input type="text" onChange={handleChange}
                  className="input-cadastro" name="nomeUsuario" id="nomeUsuario" aria-describedby="helpId" placeholder=""
                  value={formState.nomeUsuario} />
              </div>

              <div className="form-cadastro">
                <label htmlFor="cep">CEP</label>
                <InputMask type="text" onChange={handleChange}
                  className="input-cadastro" mask="99999-999" name="cep" id="cep" aria-describedby="helpId" placeholder=""
                  value={formState.cep} />
              </div>
            </div>



            <div className='col-md-6'>
              <div className="form-cadastro">
                <label htmlFor="rua">Rua</label>
                <input type="text" onChange={handleChange}
                  className="input-cadastro" name="rua" id="rua" aria-describedby="helpId" placeholder=""
                  value={formState.rua} />
              </div>

              <div className="form-cadastro">
                <label htmlFor="bairro">Bairro</label>
                <input type="text" onChange={handleChange}
                  className="input-cadastro" name="bairro" id="bairro" aria-describedby="helpId" placeholder=""
                  value={formState.bairro} />
              </div>

              <div className="form-cadastro">
                <label htmlFor="esporteFav">Esporte Favorito</label>
                <input type="text" onChange={handleChange} className="input-cadastro" name="esporteFav" id="esporte" aria-describedby="helpId" value={formState.esporteFav} placeholder="Ex: Voleibol" />
              </div>
            </div>

            <div className='div-but'>
              <button type="submit" onClick={submitForm} className="but-cadastro"> Enviar</button>
            </div>
          </form>
        </div>
        : <ClipLoader color={"white"} loading={loading} size={150} />}
    </div>
  )
}

export default CadastroFormPt2
