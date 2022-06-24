import React, { useReducer, useState } from 'react'
import './style/CadastroProprietario.css'
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
const CadastroProprietarioPt2 = () => {
  const initialState = { nomeProps: "", cnpj: "" }
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
    myaxios.post("/usuario", formState)
    navigate("/")
  }

  return (
    <div className='container-cadastro-prop'>
      {!loading ?
        <div className="div-cadastro-prop">
          <form>
            <div className="form-cadastro-prop">
              <label for="nomeProps">Nome Completo</label>
              <input type="text" onChange={handleChange}
                className="input-cadastro-prop" name="nome" id="nome" aria-describedby="helpId" placeholder=""
                value={formState.nomeProps} />
            </div>

            <div className="form-cadastro-prop">
              <label for="cnpj">CNPJ</label>
              <InputMask type="text" onChange={handleChange}
                className="input-cadastro-prop" mask="99.999.999/9999-99" name="cnpj" id="cnpj" aria-describedby="helpId" placeholder=""
                value={formState.cnpj} />
            </div>
          </form>

          <div className='div-but'>
            <button type="submit" onClick={submitForm} className="but-cadastro">Enviar</button>
          </div>

        </div>
        : <ClipLoader color={"white"} loading={loading} size={150} />}
    </div>
  )
}

export default CadastroProprietarioPt2
