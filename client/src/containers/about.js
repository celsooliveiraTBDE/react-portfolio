import React, { Component } from "react";
import MktNavbar from '../components/Navbar/MktNavBar'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
class About extends Component {
  render() {
    return (
      // <div className='wrapper'>
      <div className='wrapper is-gapless is-fluid is-dark'>

        <MktNavbar></MktNavbar>
        <Navbar />
        <section className="hero is-danger py-1 my-0">
          <div className="hero-body pt-1 mb-0 pb-0">
            <div className='level-left is-full-width pb-2'><span className='level-item title is-size-2 has-text-white'> AT A GLANCE</span></div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}

export default About;
