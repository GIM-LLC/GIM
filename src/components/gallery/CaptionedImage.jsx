import React from 'react';
import style from './CaptionedImage.css';
const CaptionedImage = ({
  title,
  text,
  clickHandler,
  name,
  currentButtonText,
  mouseHoverOnHandler,
  mouseHoverOffHandler,
  hover,
  allTrue
}) => {
  return (
    <div
      className={style.container}
      onMouseEnter={() => mouseHoverOnHandler(name)}
      onMouseLeave={() => mouseHoverOffHandler(name)}
    >
      <figure className={style.captionedImage}>
        <img src="https://www.placecage.com/g/200/200" alt="cage" />
      </figure>
      <div
        className={
          hover || allTrue
            ? `${style.hovered} ${style.imageOverlay}`
            : style.imageOverlay
        }
      >
        <div className={style.text}>
          <h3>{title}</h3>
          <div>
            <p>{text}</p>
            <button
              disabled={allTrue}
              onClick={() => clickHandler(name)}
              className={allTrue ? style.pulse : ''}
            >
              {currentButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptionedImage;
