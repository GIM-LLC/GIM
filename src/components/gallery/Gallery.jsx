import React from 'react';
import useGalleryImageButtons from '../../hooks/useGalleryImageButtons';
import CaptionedImage from './CaptionedImage';
import style from './Gallery.css';

const Gallery = () => {
  const { imageHoverState, buttonState, allTrue, handleButtonClick, handleMouseOn, handleMouseOff } = useGalleryImageButtons();
  return (
    <section className={style.gallery}>
      <CaptionedImage
        name="stockholder"
        hover={imageHoverState.stockholder}
        clickHandler={handleButtonClick}
        mouseHoverOnHandler={handleMouseOn}
        mouseHoverOffHandler={handleMouseOff}
        currentButtonText={buttonState.stockholder}
        allTrue={allTrue}
        title="Stockholder Information"
        text="Stockholders Dividens are paid quarterly on the 5th business day of June, August, October, and November at end of day. Stockholders may have their funds deposited via check and direct deposit."
      />
      <CaptionedImage
        name="employment"
        hover={imageHoverState.employment}
        clickHandler={handleButtonClick}
        mouseHoverOnHandler={handleMouseOn}
        mouseHoverOffHandler={handleMouseOff}
        currentButtonText={buttonState.employment}
        allTrue={allTrue}
        title="Employment"
        text="Supporting you as you make the next step in your career towards state of the art manufacturing technology. Dozens of open roles at your fingertips to help shape the future of industrialized manufacturing. For contracting inquiries please contact via email."
      />
      <CaptionedImage
        name="life"
        hover={imageHoverState.life}
        clickHandler={handleButtonClick}
        mouseHoverOnHandler={handleMouseOn}
        mouseHoverOffHandler={handleMouseOff}
        currentButtonText={buttonState.life}
        allTrue={allTrue}
        title="Life with GIM"
        text="Here at GIM you will find minimal bureaucracy, and more support. GIM has a welcoming and warm culture, ready to serve the community with amazing industrial manufacturing products"
      />
    </section>
  );
};

export default Gallery;
