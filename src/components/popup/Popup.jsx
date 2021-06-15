import React from 'react';
import PropTypes from 'prop-types';
import style from './Popup.css';
import useGhostPopup from '../../hooks/useGhostPopup';
function Popup(props) {
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

  return (props.trigger) ? (
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
            canClose ? props.setTrigger(false) 
              : {}}>
            x
        </button>
        
        <button 
          className={style.popupSubmitButton} 
          onClick={() => 
            canClose 
              ? props.setTrigger(false) 
              : getNextSlide()}>
          {buttonText[slideIndex]}
        </button>
        
      </div>
      <button onClick={justATest}>TEST</button>
      <button onClick={getNextSlide}>next</button>
    </div>
  ) : '';
}

Popup.propTypes = {
  trigger: PropTypes.bool.isRequired,
  setTrigger: PropTypes.func.isRequired,
};
  
export default Popup;
