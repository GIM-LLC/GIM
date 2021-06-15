import React from 'react';
import useGalleryImageButtons from '../../hooks/useGalleryImageButtons';
import CaptionedImage from './CaptionedImage';
import style from './Gallery.css';
import { useContext } from 'react';
import { GameStateContext } from '../../context/GameStateProvider';

const Gallery = ({ glowingObjectState, glowChangeHandler }) => {
  const {
    imageHoverState,
    buttonState,
    allTrue,
    handleButtonClick,
    handleMouseOn,
    handleMouseOff,
  } = useGalleryImageButtons();
  
  const { points, failedTimeouts } = useContext(GameStateContext);

  return (
    <section className={style.gallery}>
      <CaptionedImage
        glowingObjectState={null}
        glowChangeHandler={() => null}
        name="stockholder"
        hover={imageHoverState.stockholder}
        clickHandler={handleButtonClick}
        mouseHoverOnHandler={handleMouseOn}
        mouseHoverOffHandler={handleMouseOff}
        currentButtonText={buttonState.stockholder}
        allTrue={allTrue}
        title="Stockholder Information"
        text="Stockholders Dividend are paid quarterly on the 5th business day of June, August, October, and November at end of day. Stockholders may have their funds deposited via check and direct deposit."
        imageSource={ points >= 6 ? '/assets/networking3.jpg' : (points >= 4 ? '/assets/networking2.jpg' : '/assets/networking1.jpg') }
      />
      <CaptionedImage
        glowingObjectState={null}
        glowChangeHandler={() => null}
        name="employment"
        hover={imageHoverState.employment}
        clickHandler={handleButtonClick}
        mouseHoverOnHandler={handleMouseOn}
        mouseHoverOffHandler={handleMouseOff}
        currentButtonText={buttonState.employment}
        allTrue={allTrue}
        title="Employment"
        text="Supporting you as you make the next step in your career towards state of the art manufacturing technology. Dozens of open roles at your fingertips to help shape the future of industrialized manufacturing. For contracting inquiries please contact via email."
        imageSource={ points >= 5 ? '/assets/helpdesk3.jpg' : (failedTimeouts >= 1 ? '/assets/helpdesk2.jpg' : '/assets/helpdesk1.jpg') }
      />
      <CaptionedImage
        glowingObjectState={glowingObjectState['galleryImg']}
        glowChangeHandler={glowChangeHandler}
        name="life"
        hover={imageHoverState.life}
        clickHandler={handleButtonClick}
        mouseHoverOnHandler={handleMouseOn}
        mouseHoverOffHandler={handleMouseOff}
        currentButtonText={buttonState.life}
        allTrue={allTrue}
        title="Life with GIM"
        text="Here at GIM you will find minimal bureaucracy, and more support. GIM has a welcoming and warm culture, ready to serve the community with amazing industrial manufacturing products"
        imageSource={ points >= 8 ? '/assets/collaborate3.jpg' : (failedTimeouts >= 2 ? '/assets/collaborate2.jpg' : '/assets/collaborate1.jpg') }
      />
    </section>
  );
};

export default Gallery;
