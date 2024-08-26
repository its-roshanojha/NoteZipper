import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <>
       <Navbar expand="lg" className="bg-dark" variant='dark'>
      <Container>
        <Navbar.Brand href="#"><Link to={"/"} style={{color : "white", textDecoration: "none"}}>Node Zipper</Link></Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          
            <Button variant="primary">Search</Button>
          </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><Link to={"/mynotes"} style={{color : "white", textDecoration: "none"}}>My Notes</Link></Nav.Link>
            <NavDropdown title="User-Name" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                 My Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default header