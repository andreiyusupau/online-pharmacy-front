import React from "react";
import {Navbar, Nav} from "react-bootstrap";

export default function Navigation(){
    return <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Pharmline</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/productcategories/add">Add Product Category</Nav.Link>
                <Nav.Link href="/products/add">Add Product</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;
}
