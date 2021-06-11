import React from 'react';
import PropTypes from 'prop-types';
import style from './Popup.css';

function Popup(props) {
  return (props.trigger) ? (
    <div className={style.popup}>
      <div className={style.popupInner}>
        <p>Join our newsletter to receive the latest updates and promotions.</p>
        <p className={style.smallPopupText}>First time customers get 10% off the first order now!</p>
        <input 
          type= 'email'
          name= 'email'
          placeholder= 'example@email.com'
        />
        <button className={style.popupCloseButton} onClick={() => props.setTrigger(false)}>x</button>
        <button className={style.popupSubmitButton} onClick={() => props.setTrigger(false)}>Subscribe</button>
      </div>
            
    </div>
  ) : '';
}


Popup.propTypes = {
  trigger: PropTypes.any.isRequired,
  setTrigger: PropTypes.any.isRequired,
};
  
export default Popup;
