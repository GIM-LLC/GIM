import React from 'react';
import PropTypes from 'prop-types';
import style from './HiddenText.css';

const HiddenText = () => {
  return (
    <section className={style.hiddenElement}>
      <p className="hiddenText1">Some Text</p>
      <p className="hiddenText2">Some More Text</p>
      <p className="hiddenText3">Even More Text</p>
    </section>
  );
};

HiddenText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HiddenText;
