import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import style from './Popup.css';
import { GameStateContext } from '../../context/GameStateProvider';

const LosePopup = () => {
  const { lose, setLose } = useContext(GameStateContext);
  return lose ? (
    <div className={style.losingPopup}>
      <div className={style.losingPopupInner}>
        <h2>500 Internal Server Error</h2>
        <p>
				Contact your administrator.
        </p>
        <p>
				(semi readable THANKS FOR TRYING!)
        </p>
        <span className={style.links}>
          <a href="/about"
            onClick={() => setLose(false)}
          >About</a>
          <a href='#'
            onClick={() => {
              window.location.replace('/');
              setLose(false);
            }}
          >Replay?</a>
        </span>
      </div>
      
    </div>
  ) : '';
};

LosePopup.propTypes = {
  setPopupActive: PropTypes.func.isRequired
};

export default LosePopup;
