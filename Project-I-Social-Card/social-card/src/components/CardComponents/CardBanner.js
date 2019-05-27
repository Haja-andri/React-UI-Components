import React from 'react';
import './Card.css';

function CardImage ({cardImgLink}) {
    return (
      <img src={cardImgLink} alt=""/>
    );
  }

  export default CardImage;
