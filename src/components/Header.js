import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ marginLeft: '250px' }}>
      <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="ml-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="#notifications"><FaBell /></Nav.Link>
          <Nav.Link href="#profile"><FaUserCircle /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
