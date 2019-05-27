import React from 'react';
import './Header.css';

// The content

// header title
function HeaderTitle ({titleText}){
  return (
    <h1>{titleText} <span>@LambdaSchool . 27 may</span></h1>
  );
}

function HeaderContent ({headerText}) {
  return (
    <div>
      <HeaderTitle titleText ="Lambda School"/>
      <p> {headerText} </p>
    </div>
  );
}

export default HeaderContent;