import React from 'react';
import PropTypes from 'prop-types';
import style from './HiddenText.css';

const HiddenText = ({ revealed }) => {
  console.log(revealed);
  return (
    <section
      id="hiddenText"
      className={`${revealed ? style.reveal : style.hidden}`}
      //   reveal={revealed}
    >
      <p
        className={`${style.hiddenText1} ${
          revealed ? style.reveal : style.hidden
        }`}
      >
        Some Text
      </p>
      <p
        className={`${style.hiddenText2} ${
          revealed ? style.reveal : style.hidden
        }`}
      >
        Some More Text
      </p>
      <p
        className={`${style.hiddenText3} ${
          revealed ? style.reveal : style.hidden
        }`}
      >
        Even More Text
      </p>
    </section>
  );
};

HiddenText.propTypes = {
  revealed: PropTypes.string,
};

export default HiddenText;
