import React from 'react';
import {Link} from 'react-router-dom';
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

import Mktbar from './MktNavBar'
import MktNavBar from './MktNavBar';

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
        <MktNavBar/>
        <Navbar className='px-2 py-0' sticky='top' expand="sm">
          <NavbarBrand href="/">CELSO OLIVEIRA</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto is-uppercase has-text-white" navbar>

              <NavItem>
                <NavLink href="https://github.com/celsooliveiraTBDE/">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  About Me
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <Link to="/projects">Projects</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="/about">About</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Link to="/contact">Contact</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}