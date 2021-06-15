import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import style from './Duck.css';
import { GameStateContext } from '../../context/GameStateProvider';

// type "duck" into search bar and trigger dani-duck to appear + 1pt

const Duck = () => {
  const { keyword, myKeyword } = useContext(GameStateContext);

  console.log('line 12', keyword, myKeyword);

  return (
    <div className={style.duckContainer}>
      <figure
        className={
          keyword || myKeyword
            ? `${style.daniDuck} ${style.textFlickerGlow}`
            : `${style.hidden}`
        }
      >
        <img src="/public/assets/dani-duck.png" alt="dani-duck" />
      </figure>
    </div>
  );
};

Duck.propTypes = {
  keyword: PropTypes.string,
};

export default Duck;
