import React from 'react';
import './App.css';


import BuildHeader from './components/HeaderComponents/HeaderContainer'

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

// Footer start here

function FooterBuilder () {
  return (
    <footer>
      <div className="icon-countainer">
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
      </div>
    </footer>
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
