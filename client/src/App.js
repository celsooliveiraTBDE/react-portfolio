import React, { Component } from "react";
import MktNavbar from './components/MktNavBar'
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar'
import MainTile from './components/MainTile'
import Portfolio from './components/projects'
import Footer from "./components/Footer"
import Resume from './components/Resume'
class App extends Component {
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
<MainTile></MainTile>
          </div>
        </section>
        <section class="hero is-danger py-1 my-0">
  <div className="hero-body pt-3 mb-0 pb-0">
  <div className='level-left is-full-width pb-4'><span className='level-item title is-size-2 has-text-white'> AT A GLANCE</span></div> 
  </div>
</section>
        <Resume />
        
        <Portfolio />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
             
