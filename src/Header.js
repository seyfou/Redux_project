import React from 'react'
import {Navbar}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'

function Header() {
    return (
    <div>
    <Navbar className="Nav">
  <Navbar.Brand style={{fontSize:"40px"}}>My<span className="a"> TODO </span>App</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
