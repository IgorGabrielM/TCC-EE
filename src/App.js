import React, { useState } from 'react'
import CadastroUsuario from './CadastroUsuario'
import Header from './Header'
import { Routes, Route, Outlet } from 'react-router'
import Home from './Home'
import './style/App.css'
import CadastroProprietario from './CadastroProprietario'
import CadastroLugar from './CadastroLugar'
import LoginProprietario from './LoginProprietario'
import CadastroEvento from './CadastroEvento'
import Login from './Login'

import { useSelector } from 'react-redux'
import HomeProprietario from './HomeProprietario'
import Usuario from './Usuario'
import CadastroFormPt2 from './CadastroUsuarioPt2'
import CadastroProprietarioPt2 from './CadastroProprietarioPt2'
import Evento from './Evento'

const App = () => {
  const loggedIn = useSelector(state => state.loggedIn)

  return (
    <>
      <header>
        {loggedIn ?
          <Header /> : null
        }
      </header>
      <main className='app-container'>
        <Routes>
          {loggedIn ?
            <>
              <Route path="/usuario" element={<Usuario />} />
              <Route path='/home' element={<Home />} />
              <Route path='/home-proprietario' element={<HomeProprietario />} />
              <Route path='/proprietario/cadastro-lugar' element={<CadastroLugar />} />
              <Route path='/cadastro-evento' element={<CadastroEvento />} />
              <Route path='/eventos' element={<Evento />} />
            </>
            :
            <>
              <Route path='*' element={<Login />} />
              <Route path='/login-proprietario' element={<LoginProprietario />} />
              <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
              <Route path='/cadastro-usuario-pt2' element={<CadastroFormPt2 />} />
              <Route path="/login-proprietario/cadastro-proprietario" element={<CadastroProprietario />} />
              <Route path='/login-proprietario/cadastro-proprietario-pt2' element={< CadastroProprietarioPt2 />} />
            </>
          }
        </Routes>
        <Outlet />
      </main>
    </>
  )
}

export default App
