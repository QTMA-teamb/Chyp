
import React, { Component } from 'react';
import logo from '../../LogoDarkClear.png';
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
        <Navbar color="light" dark expand="md">
          <NavbarBrand href="/"><img id = "logo" src = {logo} width = '200' height="60" alt = 'logo'/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink id="Navlink-overide" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="NavLinker"><Link to='/events' id="Navlink-overide">Events</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="NavLinker"><Link to='/create' id="Navlink-overide">Create</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="NavLinker"><Link to='/about' id="Navlink-overide">About</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
