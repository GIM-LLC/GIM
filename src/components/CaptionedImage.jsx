import React from 'react';
import style from './CaptionedImage.css';
const CaptionedImage = () => {
  return (
    <div className={style.container}>
      <figure className={style.captionedImage}>
        <img src="https://www.placecage.com/g/200/200" alt="cage" />
      </figure>
      <div className={style.imageOverlay}>
        <div className={style.text}>
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deleniti placeat accusantium veritatis sed maiores tempora fuga provident, voluptates recusandae eum illo voluptate eius veniam nisi corrupti natus earum officia.
          Neque fuga quaerat a consectetur eius amet mollitia nobis adipisci inventore? Error commodi beatae ipsam quidem culpa quam harum vel quod, mollitia in id ipsum omnis soluta fugit rerum et?</p>
        </div>
      </div>
    </div>
  );
};

export default CaptionedImage;
