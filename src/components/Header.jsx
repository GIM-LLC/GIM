import React from 'react';
import HeaderNav from './HeaderNav';
import style from './Header.css';

const Header = () => {
  return (
    <header className={style.header}>
      <span className={style.masthead}>
        <img src="http://placekitten.com/100/100" alt="logo and/or kitten" />
        <h1>General Industrial Manufacturing</h1>
      </span>
      <HeaderNav />
    </header>
  );
};

export default Header;
