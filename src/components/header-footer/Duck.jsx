import React from 'react';
import PropTypes from 'prop-types';
import style from './Duck.css';
// type "duck" into search bar and trigger dani-duck to appear + 1pt

const Duck = (keyword) => {
  return (
    <figure
      className={
        keyword
          ? `${style.textFlickerGlow}` + ' ' + `${style.daniDuck}`
          : `${style.daniDuck}`
      }
    >
      <img src="public/assets/dani-duck.png" alt="dani-duck" />
    </figure>
  );
};

Duck.propTypes = {
  keyword: PropTypes.string,
};

export default Duck;
