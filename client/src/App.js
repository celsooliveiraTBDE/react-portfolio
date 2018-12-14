import React, { Component } from "react";
import MktNavbar from './components/MktNavBar'
import MainTile from './components/MainTile'
import Footer from "./components/Footer"
import Resume from './components/Resume'
class App extends Component {
  render() {
    return (
      <div className='wrapper is-gapless is-fluid is-dark'>

        <MktNavbar></MktNavbar>

        <MainTile></MainTile>
  
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

