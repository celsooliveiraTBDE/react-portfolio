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

export default class MktNavBar extends React.Component {

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


            <Nav className='navbar level is-uppercase is-centered is-size-1 is-black nav is-marginless'>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Celso Oliveira</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Phone</p>
                        <p className="heading">614-906-0387</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Email</p>
                        <p className="heading has-text-primary">celso.oliv@gmail.com</p>
                    </div>
                </div>

            </Nav>
        )
    }
}