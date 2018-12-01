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
          className='pt-1 is-danger'>
          <NavbarBrand className="is-family-sans-serif is-capitalized has-text-weight-bold is-size-3 has-text-white"
                       href="/">CELSO OLIVEIRA
                       
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto has-text-white" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className='is-uppercase has-text-weight-bold has-text-link' nav caret>
                  Projects
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="https://github.com/celsooliveiraTBDE">Street Art Finder</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://github.com/celsooliveiraTBDE">Canvas DRNX</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://github.com/celsooliveiraTBDE">Astrolab AR</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="https://github.com/celsooliveiraTBDE">Creative Work</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}