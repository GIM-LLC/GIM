import React, { useState } from 'react';
import HeaderNav from './HeaderNav';
import style from './Header.css';


const Header = () => {

  const [headerClicks, setHeaderClicks] = useState(0);

  const upHeaderClickCount = () => {
    if (headerClicks === 3) setHeaderClicks(0);
    else setHeaderClicks(prev => prev + 1);
    console.log(headerClicks);
  };

  //NEED TO TIE THIS TO THE SOCKET

  let headerText = 'GIM';
  if (headerClicks === 1) {
    headerText = 'Ghost  IM';
  } else if (headerClicks === 2) {
    headerText = 'Ghost  In  The  M';
  } else if (headerClicks >= 3) {
    headerText = 'Ghost  In  The  Machine';
  }

  return (
    <header>
      <span className={style.masthead}>
        <h1 onClick={upHeaderClickCount}>
          {headerText}
        </h1>
        <h3>-LLC.-</h3>
      </span>
      <HeaderNav />
    </header>
  );
};

export default Header;
