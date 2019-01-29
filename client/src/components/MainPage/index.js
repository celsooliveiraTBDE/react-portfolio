import React from 'react';
import MyTitleBanner from './MyTitleBanner'
import AppWrapper from '../AppWrapper'

const imageId = 'main-tile-image'
export default class MainTile extends React.Component {



  render() {
    return (
      <AppWrapper image={imageId} className="hero bg is-danger is-large">
   
        <div className='inner'>
          <MyTitleBanner />
        </div>
        </AppWrapper>

    )
  }
}