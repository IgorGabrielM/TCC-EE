import React from 'react'
import { Link } from 'react-router-dom'
import './style/Header.css'
import logoEE from './style/logoEE.png'
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Container, Offcanvas, NavDropdown, Form, Button, Nav, FormControl } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faHome, faBars, faUser, faPlus, faFutbol, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { logoutUser } from './actions'

const Header = () => {
    const reduxDispatch = useDispatch();
    return (
        <div className='div-header'>
            <Navbar bg="light" expand="sm">
                <Container fluid>
                    <Navbar.Brand href="#"><img className='image-login' src={logoEE} alt='' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton variant="white">
                            <Offcanvas.Title>
                                Encontro Esportivo
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action2"> <Link to={"home"}><a className="nav-link" href="#">
                                    <FontAwesomeIcon icon={faHome} />
                                    Home</a></Link></Nav.Link>
                                <Nav.Link href="#action1"> <Link to={"usuario"}><a className="nav-link active" href="#">
                                    <FontAwesomeIcon icon={faUser} />
                                    Meu perfil</a>
                                </Link></Nav.Link>
                                <Nav.Link href="#action2"><Link to={"eventos"}><a className="nav-link" href="#">
                                    <FontAwesomeIcon icon={faFutbol} />
                                    Eventos</a></Link></Nav.Link>
                                <Nav.Link href="#action2"><Link to={"cadastro-evento"}><a className="nav-link" href="#">
                                    <FontAwesomeIcon icon={faPlus} />
                                    Criar Evento</a></Link></Nav.Link>
                                <Nav.Link href="#action2"><a onClick={() => reduxDispatch(logoutUser())} className="nav-link" href="#">
                                    <FontAwesomeIcon icon={faSignOut} />
                                    Sair</a></Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
