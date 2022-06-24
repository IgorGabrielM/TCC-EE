import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import './style/CadastroUsuario.css'
import myaxios from './myaxios'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { reduxLogin } from './actions'

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


const CadastroForm = () => {
  const initialState = { email: "", password: "" }
  const [formState, dispatch] = useReducer(formReducer, initialState);

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
    try {
      myaxios.post("auth/register", formState)
      reduxDispatch(await reduxLogin(formState))
      alert("Dados enviados com sucesso");
    } catch (err) {
      navigate("/")
    }
  }

  return (
    <div className='container-cadastro-usuario'>
      <div className="div-cadastro">
        <form className='row'>
          <div>
            <div className="form-cadastro">
              <label Htmlfor="email">Email</label>
              <input type="email" onChange={handleChange}
                className="input-cadastro" name="email" id="email" aria-describedby="helpId" placeholder="exemplo@gmail.com"
                value={formState.email} />
            </div>

            <div className="form-cadastro">
              <label Htmlfor="password">Senha</label>
              <input type="password" onChange={handleChange}
                className="input-cadastro" name="password" id="password" aria-describedby="helpId" placeholder=""
                value={formState.password} />
            </div>
          </div>
          <div className='div-but'>
            <button type="submit" onClick={submitForm} className="but-cadastro"><Link to={"../cadastro-usuario-pt2"} className="but-cadastro-a">Proximo</Link></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CadastroForm
