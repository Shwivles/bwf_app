import React from 'react';
import { Link } from 'react-router-dom';

//bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navi() {
   

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">
                BWF
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <NavDropdown title="Workouts" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/fullbody">Fullbody</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/push">Push</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/pull">Pull</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/legs">Legs</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                
            </Navbar.Collapse>

        </Navbar>
    );

}

export default Navi;