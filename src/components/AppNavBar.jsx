import React from 'react'
import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { NavLink } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg='secondary' variant='dark'>
            <Container fluid className='px-5'>
                <Navbar.Brand>
                    <div className='d-flex align-items-center fs-3'>
                        <FontAwesomeIcon icon={faUtensils} />
                    <p className='mb-0 ms-3'>RESTORAN</p>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto fs-5 fw-semibold py-1'>
                        <Nav.Link as={NavLink} to="/" href='#home'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="login" href='#login'>Login</Nav.Link>
                        <Nav.Link as={NavLink} to="register" href='#register'>Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}
