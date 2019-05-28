import React from 'react';
import './Header.css';

import HeaderThumb from './ImageThumbnail'
import HeaderContent from './HeaderContent'

function BuildHeader () {
    return (
      <div className = "headerContainer">
        <HeaderThumb link="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" />
        <HeaderContent headerText="Let's learn react by builing simple interfaces components.
        Don't try to overthink it, just keep it simple abd have fun. Once you feel comfortable using
        components you are well on your way to master React !"/>     
      </div>
    );
  }

  export default BuildHeader;