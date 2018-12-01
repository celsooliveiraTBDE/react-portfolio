import React, { Component } from "react";
import MktNavbar from './components/MktNavBar'
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar'
import Portfolio from './components/projects'
import Footer from "./components/Footer"
import Marketing from './components/Marketing'
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
              <div className='level px-5 pb-10'>
                <span className="level-item">
                  <i className="fab fa-2x fa-github"></i>
                </span>
                <span className="level-item px-2 ">
                  <i className="fab fa-2x fa-linkedin"></i>
                </span>
                <span className="level-item px-2">
                  <i className="fab fa-2x fa-google"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="column is-four-fifths">
            <div className='hero bg is-primary is-fullheight'>
              <div className='inner'>
                <div id='my-title-banner' >
                 <div className="level-item title is-size-2 is-uppercase is-paddingless is-centered">Full Stack Developer</div>
                 <hr className='is-full-width'/>
                 <div className="level-item title is-paddingless is-uppercase is-centered">Los Angeles, California </div>
                 <hr className='is-full-width is-paddingless' /> 
              </div>
              </div>
            </div>
          </div>
        </section>
        <Marketing />
        <Portfolio />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
