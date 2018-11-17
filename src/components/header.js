import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
<Link className="btn btn-primary" to="/posts/new">NEW POST</Link>            
     
        )
    }
}
export default Header;