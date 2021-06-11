import React from 'react';
import CaptionedImage from './CaptionedImage';
import style from './Gallery.css';

const Gallery = () => {
  return (
    <section className={style.gallery}>
      <CaptionedImage
        title="Stockholder Information"
        text="Stockholders Dividens are paid quarterly on the 5th business day of June, August, October, and November at end of day. Stockholders may have their funds deposited via check and direct deposit."
      />
      <CaptionedImage
        title="Employment"
        text="Supporting you as you make the next step in your career towards state of the art manufacturing technology. Dozens of open roles at your fingertips to help shape the future of industrialized manufacturing. For contracting inquiries please contact via email."
      />
      <CaptionedImage
        title="Life with GIM"
        text="Here at GIM you will find minimal bureaucracy, and more support. GIM has a welcoming and warm culture, ready to welcome and serve the community with amazing industrial manufacturing products"
      />
    </section>
  );
};

export default Gallery;
