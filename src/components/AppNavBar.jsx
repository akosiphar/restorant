import React, { useEffect, useState } from 'react'
import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { NavLink } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import Login from '../pages/Login'


export default function NavBar() {
    const [sticky, setSticky] = useState(false)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        function handleScroll() {
            if(window.scrollY > 90) {
                setSticky(true)
            } else if(window.scrollY < 45) {
                setSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
    }, [])

    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleLinkClick() {
      setIsModalVisible(true);
      setIsActive(false);
    }
  
    function handleModalClose() {
      setIsModalVisible(false);
      setIsActive(false)
    }


  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg='secondary' variant='dark' className={`${sticky ? 'sticky-top shadow-sm' : ''}`}>
            <Container fluid className='px-5'>
                <Navbar.Brand>
                    <div className={`d-flex align-items-center fs-3`}>
                        <FontAwesomeIcon icon={faUtensils} />
                    <p className='mb-0 ms-3'>RESTORAN</p>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto fs-5 fw-semibold py-1'>
                        <Nav.Link as={NavLink} to="/" href='#home'>Home</Nav.Link>
                        <Nav.Link active={isActive} onClick={handleLinkClick}>Login</Nav.Link>
                        <Nav.Link as={NavLink} to="register" href='#register'>Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Login isVisible={isModalVisible} onClose={handleModalClose} />
    </>
  )
}
