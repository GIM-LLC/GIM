import React from 'react';
import makers from '../makers/MakersData.js';
import { useHistory } from 'react-router-dom';
import style from '../../pages/AboutPage.css';

const MakerNav = () => {
  const history = useHistory();
  return (
    <nav className={style.navBar}>
      <ul>
        {makers.map((maker) => (
          <li className={style.navLink} key={maker.name}>
            {maker.name}
            <span>
              <a href={maker.github}>
                <img src="/assets/Github_icon.png" alt="github icon" />
              </a>
              <a href={maker.linkedIn}>
                <img
                  src="public/assets/linkedin-icon-2.png"
                  alt="linkedin icon"
                />
              </a>
            </span>
          </li>
        ))}
      </ul>

      <span>
        <input type="text" placeholder="Thanks for saving me!" />
        <button onClick={() => history.push('/')}>PLAY AGAIN?</button>
      </span>
    </nav>
  );
};

export default MakerNav;
