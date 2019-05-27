import React from 'react';
import './App.css';

import './components/HeaderComponents/HeaderContent.js'

// starting with the smallest piece
// header title
function HeaderTitle ({titleText}){
  return (
    <h1>{titleText} <span>@LambdaSchool . 27 may</span></h1>
  );
}
// The header Thumbnail
function HeaderThumb ({link}) {
  return (
    <img src={link} className="logo" alt=""/>
  );
}

// The content
function HeaderContent ({headerText}) {
  return (
    <div>
      <HeaderTitle titleText ="Lambda School"/>
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

// the card section

function CardContent () {
  return (
    <div className="cardContent">
      <h2>
        Get started with react
      </h2>        
      <p>
        React make painless to create interactives UIs. Design simple view for each state in your application.
      </p>
      <span>reactjs.org</span>
    </div>
  );
}

function CardImage ({cardImgLink}) {
  return (
    <img src={cardImgLink} alt=""/>
  );
}

function CardBuilder (){
  return (
    <div className="cardContainer">
      <div className="card">
      <CardImage cardImgLink="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"/>
      <CardContent />
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div className="mainContainer">
      <BuildHeader />
      <CardBuilder />
    </div>
  );
};

export default App;
