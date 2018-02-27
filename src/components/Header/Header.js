
import React, { Component } from 'react';
import logo from '../../Logo.png';
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './Header.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/"><img id = "logo" src = {logo} width = '160' height="47" alt = 'logo'/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink id="Navlink-overide" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="Navlink-overide" href="/events">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="Navlink-overide" href="/create">Create</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="Navlink-overide" href="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
