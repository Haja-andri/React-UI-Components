import React from 'react';
import './App.css';

// The row-child components

function RowChild (props) {
  const { className, text, bkg } = props;

  return (
    <div className={className} style={{backgroundColor: `${bkg}`}} >
    {text}
    </div>
  );
}


const App = () => {
  return (
    <div className="mainContainer">
      <div className="row">
        <RowChild className="row-child full" text="0" bkg="black" />
      </div>
      <div className="row">
        <RowChild className="row-child TF small" text="clear" />
        <RowChild className="row-child forth white" text="/" bkg="red"/>
      </div>      
      <div className="row">
        <RowChild className="row-child forth" text="7" />
        <RowChild className="row-child forth" text="8" />
        <RowChild className="row-child forth" text="9" />
        <RowChild className="row-child forth white" text="X" bkg="red" />
      </div>      
      <div className="row">
        <RowChild className="row-child forth" text="4" />
        <RowChild className="row-child forth" text="5" />
        <RowChild className="row-child forth" text="6" />
        <RowChild className="row-child forth white" text="-" bkg="red" />
      </div>      
      <div className="row">
        <RowChild className="row-child forth" text="1" />
        <RowChild className="row-child forth" text="2" />
        <RowChild className="row-child forth" text="3" />
        <RowChild className="row-child forth white" text="+" bkg="red" />
      </div>      
      <div className="row">
        <RowChild className="row-child TF" text="0" />
        <RowChild className="row-child forth white" text="=" bkg="red"/>
      </div>      
    </div>
  );
};

export default App;
