import React, { useContext, useState, useEffect } from 'react';
import HeaderNav from './HeaderNav';
import style from './Header.css';
import { SocketContext } from '../context/SocketProvider';



const Header = () => {

  const socket = useContext(SocketContext);

  const [headerClicks, setHeaderClicks] = useState(0);

  //NEED TO ADD CLICK LISTENER and ROOM EMIT TO BACKEND
  const upHeaderClickCount = () => {
    socket.emit('headerTextClick', headerClicks + 1);
    if (headerClicks === 3) setHeaderClicks(0);
    else setHeaderClicks(prev => prev + 1);
  };

  useEffect(() => {
    socket.on('socketHeaderTextClick',
      (newCount) => { setHeaderClicks(newCount); }
    );
  }, [socket]);

  let headerText = 'G.I.M.';
  if (headerClicks === 1) {
    headerText = 'Ghost  I.M.';
  } else if (headerClicks === 2) {
    headerText = 'Ghost  In  The  M.';

  } else if (headerClicks >= 3) {
    headerText = 'Ghost  In  The  Machine';
  }

  return (
    <header className={style.header}>
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
