import React, { Component } from 'react';

 
export default class MainTile extends React.Component {

   
            
            render(){
              return(
            <div id='main-tile-image' className='hero bg is-primary is-fullheight'>
              <div className='inner '>
                <div id='my-title-banner ' >
                  <div className="level-item title is-size-2 is-uppercase mb-1 is-paddingless is-marginless is-centered">Full Stack Developer</div>
                  <hr className='is-full-width is-paddingless my-1' />
                  <div className="level-item title is-paddingless is-marginless is-uppercase is-centered">Los Angeles, California </div>
                  <hr className='is-full-width mt-1 is-paddingless' />
                </div>
              </div>
            </div>
              )
            }
}