import React from 'react';
import {

    Nav,
    NavItem,
    NavLink

} from 'reactstrap';
import SocialBar from './SocialBar';


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

            <div className="hero-head">

                <Nav className='navbar is-uppercase is-centered pl-4 has-text-grey-light'>
                    <span className="level-item py-5 pr-2 mx-auto is-hidden-touch is-borderless">
                        <i className="fas fa-6x fa-globe is-hidden-touch"></i>
                    </span>
                    <hr className="navbar-divider is-full-width is-primary has-background-grey-dark" />

                    <SocialBar />
                    <br />
                    <NavItem className="container is-gapless has-text-centered-mobile">
                        <NavLink className="title is-focused is-4 level-item " href="/about">About</NavLink>
                    </NavItem>
                    <hr className="navbar-divider is-full-width is-primary has-background-grey-dark" />

                    <NavItem className="container is-gapless has-text-centered-mobile">
                        <NavLink className="title is-4 level-item " href="/blog">Blog</NavLink>
                    </NavItem>
                    <hr className="navbar-divider is-full-width" />

                    <NavItem className="container is-gapless has-text-centered-mobile">
                        <NavLink className="title is-4 level-item " href="/contact">Contact</NavLink>
                    </NavItem>
                    <hr className="navbar-divider is-full-width" />
                </Nav>
            </div>

        )
    }
}