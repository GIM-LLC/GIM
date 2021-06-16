import React from 'react';
import style from './Popup.css';
import usePopupTrigger from '../../hooks/usePopupTrigger';
import useGhostPopup from '../../hooks/useGhostPopup';

function Popup({ popupActive, setPopupActive }) {
  // const { popupActive, setPopupActive } = usePopupTrigger();

  const { 
    popup, 
    slideIndex, 
    getNextSlide,
    canClose,
    justATest 
  } = useGhostPopup();
  
  const {
    largeText,
    smallText,
    inputPlaceholder,
    buttonText
  } = popup;

  console.log(popupActive);

  return popupActive ? (
    <div className={style.popup}>
      <div className={style.popupInner}>
        <p>
          {largeText[slideIndex]}
        </p>

        <p className={style.smallPopupText}>
          {smallText[slideIndex]}
        </p>

        <input 
          type='email'
          name='email'
          placeholder={inputPlaceholder[slideIndex]}
        />

        <button
          className={style.popupCloseButton}
          onClick={() => 
            canClose ? setPopupActive(false) 
              : {}}>
            x
        </button>
        
        <button 
          className={style.popupSubmitButton} 
          onClick={() => 
            canClose 
              ? setPopupActive(false) 
              : getNextSlide()}>
          {buttonText[slideIndex]}
        </button>
        
      </div>
      <button onClick={justATest}>TEST</button>
      <button onClick={getNextSlide}>next</button>
    </div>
  ) : '';
}

export default Popup;
