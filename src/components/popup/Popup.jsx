import React, { useContext, useEffect } from 'react';
import style from './Popup.css';
import useGhostPopup from '../../hooks/useGhostPopup';
import { GameStateContext } from '../../context/GameStateProvider';

function Popup({ popupActive, setPopupActive }) {
  const { points } = useContext(GameStateContext);

  const { 
    popup, 
    slideIndex, 
    getNextSlide,
    canClose,
    handlePointsUpdate,
    justATest 
  } = useGhostPopup(setPopupActive);
  
  const {
    largeText,
    smallText,
    inputPlaceholder,
    buttonText
  } = popup;

  useEffect(() => {
    handlePointsUpdate(points);
  }, [points]);

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
