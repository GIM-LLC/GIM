import React from 'react';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <header>
      <img src="http://placekitten.com/100/100" alt="logo and/or kitten" />
      <h1>General Industrial Manufacturing</h1>
      <HeaderNav />
    </header>
  );
};

export default Header;
