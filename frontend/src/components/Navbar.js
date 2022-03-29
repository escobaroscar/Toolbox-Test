
import { Navbar, Container, Button, FormControl, Form, Nav } from 'react-bootstrap';

import React from 'react'

export default function Head({ search }) {

    const handleSearch = () => {
        const method = search;
        let inputValue = document.getElementById("search").value; 
        if(inputValue){
            method(inputValue);
        }
    };
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Test-App</Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    ></Nav>
                    <Form className="d-flex">
                        <FormControl
                            id="search"
                            type="search"
                            placeholder="test2.csv"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button onClick={handleSearch} variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
