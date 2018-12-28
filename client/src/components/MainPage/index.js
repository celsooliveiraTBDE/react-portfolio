import React, { Component } from 'react';
import Navbar from '../Navbar'
import MyTitleBanner from './MyTitleBanner'
 
export default class MainTile extends React.Component {

   
            
            render(){
              return(
            <div id='main-tile-image' className='hero bg is-danger is-fullheight'>
<Navbar className="is-fixed-top"/>
              <div className='inner '>
<MyTitleBanner/>
              </div>
            </div>
              )
            }
}