import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar'
import Portfolio from './components/projects'
import Marketing from './components/Marketing'
class App extends Component {
  render() {
    return (
      <div className='wrapper'>
      <div className='container is-gapless is-fluid is-dark'>

      </div>
        <Navbar />
        <section className="columns is-gapless">
          <div className="column is one-fifth">
            <div className='hero is-danger is-fullheight'>
              <Sidebar />
            </div>
          </div>

          <div class="column is-four-fifths">
            <div className='hero is-primary is-fullheight'>
              <div class="hero-body has-text-centered">
                 </div>
            </div>
          </div>
        </section>
        <Marketing />
        <Portfolio />
      </div>
    );
  }
}

export default App;
