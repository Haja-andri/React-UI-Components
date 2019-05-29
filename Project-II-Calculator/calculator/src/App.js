import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'

// The row-child components

const App = () => {

  return (
    <div className="mainContainer">
      <div className="row">
          <NumberButton className="row-child full" text="0" bkg="black" />
      </div>
      <div className="row">
        <NumberButton className="row-child TF small" text="clear" />
        <NumberButton className="row-child forth white" text="/" bkg="red"/>
      </div>      
      <div className="row">
        <NumberButton className="row-child forth" text="7" />
        <NumberButton className="row-child forth" text="8" />
        <NumberButton className="row-child forth" text="9" />
        <NumberButton className="row-child forth white" text="X" bkg="red" />
      </div>      
      <div className="row">
        <NumberButton className="row-child forth" text="4" />
        <NumberButton className="row-child forth" text="5" />
        <NumberButton className="row-child forth" text="6" />
        <NumberButton className="row-child forth white" text="-" bkg="red" />
      </div>      
      <div className="row">
        <NumberButton className="row-child forth" text="1" />
        <NumberButton className="row-child forth" text="2" />
        <NumberButton className="row-child forth" text="3" />
        <NumberButton className="row-child forth white" text="+" bkg="red" />
      </div>      
      <div className="row">
        <NumberButton className="row-child TF" text="0" />
        <NumberButton className="row-child forth white" text="=" bkg="red"/>
      </div>      
    </div>
  );
};

export default App;
