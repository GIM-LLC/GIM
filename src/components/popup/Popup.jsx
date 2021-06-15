import React from 'react';
import PropTypes from 'prop-types';
import style from './Popup.css';
import useGhostPopup from '../../hooks/useGhostPopup';
function Popup(props) {
  const popup = useGhostPopup();
  
  const {
    largeText,
    smallText,
    inputPlaceholder,
    buttonText
  } = popup;

  return (props.trigger) ? (
    <div className={style.popup}>
      <div className={style.popupInner}>
        <p>{largeText}</p>
        <p className={style.smallPopupText}>{smallText}</p>
        <input 
          type='email'
          name='email'
          placeholder={inputPlaceholder}
        />
        <button className={style.popupCloseButton} onClick={() => props.setTrigger(false)}>x</button>
        <button className={style.popupSubmitButton} onClick={() => props.setTrigger(false)}>{buttonText}</button>
        
      </div>
      <button>TEST</button>
    </div>
  ) : '';
}


Popup.propTypes = {
  trigger: PropTypes.any.isRequired,
  setTrigger: PropTypes.any.isRequired,
};
  
export default Popup;
