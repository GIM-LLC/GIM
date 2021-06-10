import React from 'react';
import style from './CaptionedImage.css';
const CaptionedImage = ({title, text}) => {
  return (
    <div className={style.container}>
      <figure className={style.captionedImage}>
        <img src="https://www.placecage.com/g/200/200" alt="cage" />
      </figure>
      <div className={style.imageOverlay}>
        <div className={style.text}>
          <h3>{title}</h3>
          <div>
            <p>{text}</p>
            <button>View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptionedImage;
