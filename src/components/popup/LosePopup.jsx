import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './Popup.css';
import { GameStateContext } from '../../context/GameStateProvider';

const LosePopup = () => {
  const { lose, setLose } = useContext(GameStateContext);
  return lose ? (
    <div className={style.losingPopup}>
      <div className={style.losingPopupInner}>
        <h2>500 Internal Server Error</h2>
        <p>Contact your administrator.</p>
        <p className={style.ghostThanks}>THANKS FOR TRYING</p>
        <span className={style.links}>
          <Link
            to="/about"
            onClick={() => setLose(false)} // should change to use the normal popup logic, not lose state
          >
            About
          </Link>
          <Link
            to="/"
            onClick={() => {
              setLose(false);
            }}
          >
            Replay?
          </Link>
        </span>
      </div>
    </div>
  ) : (
    ''
  );
};

LosePopup.propTypes = {
  setPopupActive: PropTypes.func,
};

export default LosePopup;
