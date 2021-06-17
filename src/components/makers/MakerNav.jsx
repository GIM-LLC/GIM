import React from 'react';
import style from '../../pages/AboutPage.css';

const MakerNav = () => {
  return (
    <nav className={style.navBar}>
      <ul>
        <li className={style.navLink}>Devon Wolfkiel</li>
        <li className={style.navLink}>Julianne Vela</li>
        <li className={style.navLink}>Casey Warren</li>
        <li className={style.navLink}>Cameron Zimmerman</li>
        <li className={style.navLink}>Katrina Cloyd</li>
      </ul>

      <span>
        <input type="text" placeholder="Thanks for saving me!" />
        <button>Play again?</button>
      </span>
    </nav>
  );
};

export default MakerNav;
