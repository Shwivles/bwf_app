import React from 'react';

//bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navi() {
   

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">BWF</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <NavDropdown title="Workouts" id="collasible-nav-dropdown">
                        <NavDropdown.Item>Full Body</NavDropdown.Item>
                        <NavDropdown.Item>Push</NavDropdown.Item>
                        <NavDropdown.Item>Pull</NavDropdown.Item>
                        <NavDropdown.Item>Legs</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                
            </Navbar.Collapse>

        </Navbar>
    );

}

export default Navi;