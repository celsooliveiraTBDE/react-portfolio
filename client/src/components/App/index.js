import React, { Component } from "react";
import MktNavbar from '../Navbar/MktNavBar'
import MainTile from '../MainPage'
import Footer from "../Footer"
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

