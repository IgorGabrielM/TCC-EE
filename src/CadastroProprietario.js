import React, { useReducer, useState } from 'react'
import './style/CadastroProprietario.css'
import myaxios from './myaxios'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { reduxLogin } from './actions'
import ClipLoader from "react-spinners/ClipLoader";


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
const CadastroProprietario = () => {
  const initialState = { email: "", senha: "" }
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    dispatch({
      type: 'ATUALIZA',
      name: e.target.name,
      value: e.target.value
    })
    

  }

  const navigate = useNavigate();
  const reduxDispatch = useDispatch();

  const submitForm = async (e) => {
    e.preventDefault();
    myaxios.post("auth/register/owner", formState)
    reduxDispatch(await reduxLogin(formState))
    navigate("/login-proprietario/cadastro-proprietario-pt2")
  }

  return (
    <div className='container-cadastro-prop'>
      {!loading ?
        <div className="div-cadastro-prop">
          <form>
            <div className="form-cadastro-prop">
              <label htmlFor="email">Email</label>
              <input type="email" onChange={handleChange}
                className="input-cadastro-prop" name="email" id="email" aria-describedby="helpId" placeholder="exemplo@gmail.com"
                value={formState.email} />
            </div>
            <div className="form-cadastro-prop">
              <label htmlFor="password">Senha</label>
              <input type="password" onChange={handleChange}
                className="input-cadastro-prop" name="password" id="password" aria-describedby="helpId" placeholder=""
                value={formState.password} />
            </div>
          </form>

          <div className='div-but'>
            <button type="submit" onClick={submitForm} className="but-cadastro">Proximo</button>
          </div>
        </div>
        : <ClipLoader color={"white"} loading={loading} size={150} />}
    </div>
  )
}

export default CadastroProprietario
