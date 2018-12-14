import React from 'react';
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

export default class Example extends React.Component {

  showSettings(event) {
    event.preventDefault();

  }


  render() {
    return (
      <Menu width={ '100%' }>
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to='/' className="navbar-item">
              <span className="level-item pr-2 mx-auto is-hidden-touch is-borderless">
                <i className="fas fa fa-globe is-hidden-touch"></i>
              </span>
            </Link>

            <a role="button" onClick={this.showSettings} className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" />
        

          </div>

          <div id="my-nav" className="navbar-menu">
            <div className="navbar-start">

              <Link to='/about' className="navbar-item menu-item">
                About
            </Link>

              <Link to='/projects' className="navbar-item menu-item">
                Projects
             </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <Link to='/' className="navbar-link menu-item">
                  More
             </Link>

                <div className="navbar-dropdown">
                  <Link to='/blog' className="navbar-item">
                    Blog
               </Link>
                  <Link to='/projects' className="navbar-item">
                    Projects
                 </Link>
                  <Link to='/resume' className="navbar-item">
                    Resume
                  </Link>
                  <hr className="navbar-divider" />
                  <Link to='/worldmap ' className="navbar-item">
                    Where I've been
                </Link>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className='navbar-item'><div class="buttons-social masthead-item">
                <Link target="_blank" to="https://www.facebook.com/CreativeBloQ" class="icon icon-circle icon-facebook"></Link >
                <Link target="_blank" to="https://twitter.com/intent/user?screen_name=creativebloq" class="icon icon-circle icon-twitter"></Link >
                <Link target="_blank" to="https://www.instagram.com/creativebloqofficial/" rel="nofollow" class="icon icon-circle icon-instagram"></Link >
                <Link target="_blank" to="https://www.pinterest.co.uk/creativebloq/" class="icon icon-circle icon-pinterest"></Link >
              </div>
              </div>
              <div className="navbar-item">
                <div className="buttons">
                  <Link to='/resume' className="button is-primary">
                    <strong>Resume</strong>
                  </Link>
                  <Link to='/login' className="button is-light">
                    Log in
          </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Menu>
    );
  }
}