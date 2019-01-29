import React, { Component } from "react";
import Navbar from '../Navbar'
export default class AppWrapper extends Component {
    render() {
        return (

            <div
                id={this.props.image}
                className='hero bg is-transparent is-fullheight'>
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}
