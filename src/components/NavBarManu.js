import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'

export default class NavBarManu extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>NovaSoft</Navbar.Brand>
                    <Navbar.Toggle aria-contorls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">


                            <Nav.Link href="#list"><Link to="/register">Register</Link></Nav.Link>
                            {
                                localStorage.getItem('login') ?
                                    <Nav.Link href="#list"><Link to="/logout">Logout</Link></Nav.Link>
                                    :
                                    <Nav.Link href="#list"><Link to="/login">Login</Link></Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
