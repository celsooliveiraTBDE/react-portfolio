import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6


export default class MainTile extends React.Component {



  render() {
    return (
      <div id='my-title-banner' >
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionEnterTimeout={1000}
          transitionEnter={true}
          transitionLeave={false}><h1 className='title is-paddingless is-marginless'  >Full Stack Developer</h1>

          <hr className='is-full-width is-paddingless my-1' />
          <div className="level-item title is-paddingless is-marginless is-uppercase has-text-centered">Los Angeles, California </div>
          <hr className='is-full-width mt-1 is-paddingless' />
        </CSSTransitionGroup> </div>
    )
  }
}

