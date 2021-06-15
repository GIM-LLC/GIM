import React from 'react';
import style from './HiddenText.css';
import useRevealText from './useRevealText';
// import useRevealText from './useRevealText';

const HiddenText = () => {
  const { startTransition, endTransition, startFadeInStyle, endFadeOutStyle } =
    useRevealText();

  return (
    <section
      id="hiddenText"
      onAnimationStart={startTransition}
      onAnimationEnd={endTransition}
      className={`${style[startFadeInStyle]} ${style[endFadeOutStyle]}`}
    >
      <p
      // className={`${style.hiddenText1} ${
      //   revealed ? style.reveal : style.hidden
      // }`}
      >
        Some Text
      </p>
      <p
      // className={`${style.hiddenText2} ${
      //   revealed ? style.reveal : style.hidden
      // }`}
      >
        Some More Text
      </p>
      <p
      // className={`${style.hiddenText3} ${
      //   revealed ? style.reveal : style.hidden
      // }`}
      >
        Even More Text
      </p>
    </section>
  );
};

export default HiddenText;
