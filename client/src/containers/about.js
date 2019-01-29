import React, { Component } from "react";
import AppWrapper from '../components/AppWrapper/index'
import { Jumbotron, Button  } from 'reactstrap'
import Resume from '../components/AboutMe/Resume'
const imageId = 'main-tile-image';

class About extends Component {
  render() {
    return (

      // <div className='wrapper'>
      <AppWrapper image={imageId} className="hero bg is-danger is-large">
<Jumbotron fluid className='is-transparent has-text-danger mx-3 px-3' >
<h1 className="display-3">I'm Celso Oliveira!</h1>
        <p className="lead">Javascript Developer</p>
        <hr className="my-2" />
        <p className="lead pb-2">
          <Button color="link mt-1">Learn More</Button>
        </p>
</Jumbotron>
<section className="hero is-danger pt-1 pb-3">
          <div className="hero-body pt-0 mb-0 pb-0">
            <div className="level-left is-full-width pb-0">
              <span className="level-item title is-size-4 has-text-white">
                SNAPSHOT
              </span>
            </div>
          </div>
        </section>
<Resume />
 </AppWrapper>
    );
  }
}

export default About;
