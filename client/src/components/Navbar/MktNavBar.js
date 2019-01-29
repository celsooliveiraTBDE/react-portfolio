import React from "react";
import { Link } from "react-router-dom";

import { Nav } from "reactstrap";

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
      <Nav className="navbar myheight level px-0 is-uppercase has-background-dark nav is-marginless">
        <div className="level-item">
          <div className="icon is-medium mr-1 mb-1 has-text-centered">
            <i className="fab fa-twitter fa-lg mr-2"/>
            <i className="fab fa-pinterest fa-lg mx-2" />
            <i className="fab fa-linkedin-in fa-lg mx-2" />

          </div>
          {/* <p className="heading has-text-danger">Celso Oliveira</p> */}
        </div>
        <div className="level-item has-text-centered">
          <p className="heading">Phone</p>
          <Link className="heading has-text-primary" to="/phone">
            (213)233-6168
          </Link>
        </div>
        <div className="level-item has-text-centered">
          <p className="heading">Email</p>
          <Link className="heading has-text-primary" to="/contact">
            celso.oliv@gmail.com
          </Link>
        </div>
      </Nav>
    );
  }
}
