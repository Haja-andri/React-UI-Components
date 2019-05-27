import React from 'react';
import './App.css';

import './components/HeaderComponents/HeaderContent.js'

// starting with the smallest piece
// header title
function HeaderTitle ({headerText}){
  return (
    <h1>{headerText} <span>@LambdaSchool . 27 may</span></h1>
  );
}
// The header Thumbnail
function HeaderThumb ({link}) {
  return (
    <img src={link} className="logo" />
  );
}

// The content
function HeaderContent ({headerText}) {
  return (
    <div>
      <h1>Lamda School <span>@LambdaSchool . 27 may</span></h1>
      <p> {headerText} </p>
    </div>
  );
}
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

const App = () => {
  return (
    <BuildHeader />
  );
};

export default App;
