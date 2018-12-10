import React, { Component } from "react";
import MktNavbar from './MktNavBar'
import Navbar from "./Navbar";
import Sidebar from './Sidebar'
import Portfolio from './projects'
import Footer from "./Footer"
import Resume from './Resume'
import AboutMeTile from './AboutMeTile'
class About extends Component {
  render() {
    return (
      // <div className='wrapper'>
      <div className='wrapper is-gapless is-fluid is-dark'>

        <MktNavbar></MktNavbar>
        <Navbar />

        <section className="columns is-gapless">
          <div className="column is-one-fifth">
            <div id='my-sidebar-on-mobile' className='hero is-dark is-fullheight'>
              <Sidebar />
            </div>
          </div>

          <div className="column is-four-fifths">
<AboutMeTile />
          </div>
        </section>
        <Resume />
        <Portfolio />
        <Footer></Footer>
      </div>
    );
  }
}

export default About;
