import React from 'react';
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
  DropdownItem
} from 'reactstrap';

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

        <Navbar
          expand="md"
          color='danger'
          className='pt-5'


        >
          <NavbarBrand href="/">Celso Oliveira</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/celsooliveiraTBDE">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  About
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="https://github.com/celsooliveiraTBDE">Projects</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://github.com/celsooliveiraTBDE">Creative</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="https://github.com/celsooliveiraTBDE">Contact</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

    );
  }
}