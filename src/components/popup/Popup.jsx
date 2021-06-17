import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './Popup.css';
import useGhostPopup from '../../hooks/useGhostPopup';
import { GameStateContext } from '../../context/GameStateProvider';

function Popup({ popupActive, setPopupActive }) {
  const { points } = useContext(GameStateContext);

  const {
    popup,
    slideIndex,
    getNextSlide,
    endGameClick,
    canClose,
    handlePointsUpdate
  } = useGhostPopup(setPopupActive);

  const {
    largeText,
    smallText,
    inputPlaceholder,
    buttonText
  } = popup;

  const winAndRedirect = () => {
    setPopupActive(false);
    endGameClick();
  };

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
          name="nextButton"
          className={style.popupSubmitButton}
          onClick={() =>
            canClose && points >= 15
              ? winAndRedirect()
              : canClose ? setPopupActive(false) : getNextSlide()}>
          {buttonText[slideIndex]}
        </button>

      </div>
    </div>
  ) : '';
}

Popup.propTypes = {
  popupActive: PropTypes.bool.isRequired,
  setPopupActive: PropTypes.func.isRequired
};

export default Popup;
