
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import React from 'react'

export default function Head() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Test-App</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
