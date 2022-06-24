import React, { useReducer, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style/Loginproprietario.css'
import logo from './style/logoEE.png'
import './style/Login.css'
import ClipLoader from "react-spinners/ClipLoader";
import { reduxLogin } from './actions'
import { useDispatch } from 'react-redux'
import myaxios from './myaxios'

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


const LoginProprietario = () => {
    const initialState = { nome: "", senha: "" }
    const [formState, dispatch] = useReducer(formReducer, initialState);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const reduxDispatch = useDispatch();

    const handleChange = (e) => {
        dispatch({
            type: 'ATUALIZA',
            name: e.target.name,
            value: e.target.value
        })

    }

    const submitForm = async (e) => {
        e.preventDefault();
        reduxDispatch(await reduxLogin(formState))
        setLoading(true)
        navigate("/home-proprietario")
    }


    return (
        <div className='container-login-prop'>
            {!loading ?
                <div className="div-login-prop">
                    <form>
                        <img className='image-login' src={logo} alt='' />
                        <div className="form-login-prop">
                            <label htmlFor="email">Email: </label>
                            <input type="text" onChange={handleChange}
                                className="input-login-prop" name="email" id="email" aria-describedby="helpId" placeholder=""
                                value={formState.email} />
                        </div>

                        <div className="form-login-prop">
                            <label htmlFor="password">Senha: </label>
                            <input type="password" onChange={handleChange}
                                className="input-login-prop" name="password" id="password" aria-describedby="helpId" placeholder=""
                                value={formState.password} />
                        </div>
                        <div className='but-small-login-prop'>
                            <div className='div-but-login-prop'>
                                <button onClick={submitForm} type="submit" className="but-login-prop" >Entrar</button>
                            </div>
                            <small className='small-log'>Ainda não possui uma conta? cadastre-se <Link to={"cadastro-proprietario"}><a className="link-core" href="#">aqui</a></Link></small>
                        </div>
                    </form>
                </div> : <ClipLoader color={"white"} loading={loading} size={150} />}
        </div>
    )
}

export default LoginProprietario
