import React from 'react';
import style from '../../pages/AboutPage.css';

const GhostieCard = () => {
  return (
    <article className={`${style.makerCard}`}>
      <figure>
        <img src={'/assets/ghostieProfile.png'} />
      </figure>
      <p className={style.makerInfo}>
        <span>Robin Smith</span>
        <span>Employee of the Year</span>
        <span>R.I.P</span>
      </p>
    </article>
  );
};

export default GhostieCard;
