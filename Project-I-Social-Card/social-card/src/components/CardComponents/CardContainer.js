import React from 'react';
import './Card.css';
import CardContent from './CardContent'
import CardImage from './CardBanner'

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

  export default CardBuilder;
