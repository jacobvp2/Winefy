import React from 'react'
import { Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to='/' className='text-dark text-decoration-none'>Winefy</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav>
            <Nav.Link><Link to='/' className='text-muted text-decoration-none'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/choice' className='text-muted text-decoration-none'>Find Your Wine!</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
