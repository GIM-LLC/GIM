import React from 'react';
import style from './CaptionedImage.css';
const CaptionedImage = ({
  title,
  text,
  imageSource,
  clickHandler,
  name,
  currentButtonText,
  mouseHoverOnHandler,
  mouseHoverOffHandler,
  hover,
  allTrue,
  glowChangeHandler,
  glowingObjectState
}) => {
  const defaultClassName =
    name === 'life'
      ? `${style.container} ${style.objectPulse}`
      : style.container;

  return (
    <div
      className={
        name === 'life' && glowingObjectState
          ? `${defaultClassName} ${style.glowObjectChallengeEffect}`
          : defaultClassName
      }
      onMouseEnter={() => mouseHoverOnHandler(name)}
      onMouseLeave={() => mouseHoverOffHandler(name)}
      onClick={!glowingObjectState ? () => glowChangeHandler('galleryImg') : () => null}
    >
      <figure className={style.captionedImage}>
        <img src={imageSource} alt="cage" />
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
