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
import { Link } from 'react-router-dom'

export default class Sidebar extends React.Component {

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

            <div className="hero-body">

                <NavbarToggler onMouseEnter={this.toggle} onMouseLeave={this.toggle} className="mr-2"/>

                <Collapse isOpen={this.state.isOpen} navbar>

                    <Nav className="ml-auto" navbar>

                        <NavItem>
                            <NavLink className="title is-4 is-centered" href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="title is-4 is-centered" href="/blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="title is-4 is-centered" href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>

        )
    }
}