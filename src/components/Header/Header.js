
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
                <NavLink id="Navlink-overide"><Link to='/events'>Events</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="Navlink-overide"><Link to='/create'>Create</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="Navlink-overide"><Link to='/about'>About</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
<<<<<<< HEAD
=======

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
>>>>>>> 62ff207f868e84a3c1186b4d975ffadbcaae28fb
