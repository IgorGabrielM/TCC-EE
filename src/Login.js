import React, { useReducer, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style/Login.css'
import logo from './style/logoEE.png'
import ClipLoader from "react-spinners/ClipLoader";
import { reduxLogin } from './actions'
import { useDispatch } from 'react-redux'


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

const Login = () => {
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
        setLoading(true)
        reduxDispatch(await reduxLogin(formState))
        navigate("/home")
    }


    return (
        <div className='container-login'>
            {!loading ?
                <div className="div-login">
                    <form>
                        <div>
                            <img className='image-login' src={logo} alt='' />
                            <div className="form-login">
                                <label Htmlfor="email">Email: </label>
                                <input type="email" onChange={handleChange}
                                    className="input-login" name="email" id="email" aria-describedby="helpId" placeholder="exemplo@gmail"
                                    value={formState.email} />
                            </div>
                            <div className="form-login">
                                <label Htmlfor="password">Senha: </label>
                                <input type="password" onChange={handleChange}
                                    className="input-login" name="password" id="password" aria-describedby="helpId" placeholder=""
                                    value={formState.password} />
                            </div>
                        </div>
                    </form>

                    <div className='but-small-login'>
                        <div className='div-but-login'>
                            <button onClick={submitForm} type="submit" className="but-login">Entrar</button>
                        </div>

                        <small className='small-log'>Ainda não possui uma conta?<br /> Cadastre-se <Link to={"cadastro-usuario"}><a className="link-core" href="#">aqui</a></Link></small> <br />
                        <small className='small-log'>É proprietario? Clique <Link to={"../login-proprietario"}><a className="link-core" href="#">aqui</a></Link></small>
                    </div>
                </div> : <ClipLoader color={"white"} loading={loading} size={150} />}
        </div>
    )
}

export default Login