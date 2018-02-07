
import React, { Component } from 'react';
import logo from '../../Logo.png';
//import './Header.css';
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
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/"><img id = "logo" src = {logo} width = '160' height="47" alt = 'logo'/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/events">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/create">Create</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
    
/*class Header extends Component {

  render() {
    return (
      <div classhost="Header">
      <header>
        <nav class="nav">
          <Link to = '/'><img id = "logo" src = {logo} width = '160' height="47" alt = 'logo'/></Link>
            <ul class = 'nav'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/events' id = "events">Events</Link></li>
              <li><Link to ="/create">Create</Link></li>
              <li><Link to ='/about'>About</Link></li>
            </ul>
        </nav>
      </header>
      </div>
    );
  }
}

export default Header;*/