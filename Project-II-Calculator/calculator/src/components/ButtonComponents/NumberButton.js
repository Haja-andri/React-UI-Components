import React from 'react';
import './Button.css';

function NumberButton (props) {
    const { className, text, bkg } = props;
  
    return (
      <div className={className} style={{backgroundColor: `${bkg}`}} >
      {text}
      </div>
    );
  }

  export default NumberButton;
