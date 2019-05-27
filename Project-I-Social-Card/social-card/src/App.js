import React from 'react';
import './App.css';


import BuildHeader from './components/HeaderComponents/HeaderContainer';
import FooterBuilder from './components/FooterComponents/Footer';

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
      <FooterBuilder />
    </div>
  );
};

export default App;
