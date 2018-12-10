import React from 'react';

 
export default class AboutMeTile extends React.Component {

   
            
            render(){
              return(
            <div id='about-me-tile-image'className='hero bg is-primary is-fullheight'>
              <div className='inner'>
                <div id='my-title-banner' >
                  <div className="level-item title is-size-2 is-uppercase is-paddingless is-centered">Full Stack Developer</div>
                  <hr className='is-full-width' />
                  <div className="level-item title is-paddingless is-uppercase is-centered">Los Altos, California </div>
                  <hr className='is-full-width is-paddingless' />
                </div>
              </div>
            </div>
              )
            }
}