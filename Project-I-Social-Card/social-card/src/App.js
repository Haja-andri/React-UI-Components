import React from 'react';
import './App.css';


import BuildHeader from './components/HeaderComponents/HeaderContainer';
import CardBuilder from './components/CardComponents/CardContainer'
import FooterBuilder from './components/FooterComponents/Footer';


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
