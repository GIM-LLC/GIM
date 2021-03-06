import React, { useContext, useState, useEffect } from 'react';
import HeaderNav from './HeaderNav';
import style from './Header.css';
import { SocketContext } from '../../context/SocketProvider';
import { GameStateContext } from '../../context/GameStateProvider';
import useDuck from '../../hooks/useDuck';

const Header = () => {
  const socket = useContext(SocketContext);
  const { incrementPoints } = useContext(GameStateContext);
  const { duck, showDuck } = useDuck();

  const [headerClicks, setHeaderClicks] = useState(0);

  const upHeaderClickCount = () => {
    socket.emit('headerTextClick', headerClicks + 1);
    setHeaderClicks((prev) => prev + 1);
    if(headerClicks + 1 === 4) {
      incrementPoints(1);
      const audio = document.querySelector('#GIM-title-audio');
      audio.volume = 0.1;
      audio.play();
    }
  };

  useEffect(() => {
    socket.on('socketHeaderTextClick', (newCount) => {
      setHeaderClicks(newCount);
      if(newCount === 4) {
        const audio = document.querySelector('#GIM-title-audio');
        audio.volume = 0.1;
        audio.play();
        incrementPoints(1);
      }
    });
  }, [socket]);

  let headerText = 'G.I.M.';
  let hdrDisable = false;
  if(headerClicks === 1) {
    headerText = 'Ghost  I.M.';
  } else if(headerClicks === 2) {
    headerText = 'Ghost  In  M.';
  } else if(headerClicks === 3) {
    headerText = 'Ghost  In  The  M.';
  } else if(headerClicks >= 4) {
    headerText = 'Ghost  In  The  Machine';
    hdrDisable = true;
  }

  return (
    <header className={style.header}>
      <span className={style.masthead}>
        <h1
          className={style.gim}
          onClick={upHeaderClickCount}
          disabled={hdrDisable}
          style={hdrDisable ? { transform: 'rotate(5deg) translate(30px, 10px)' } : { color: '#3a3a3a' }}
        >{headerText}</h1>
        <h3>-LLC-</h3>
      </span>
      <img
        className={duck ? style.daniDuck : style.hidden}
        src="/assets/dani-duck.png"
        alt="dani-duck" />
      <HeaderNav showDuck={showDuck} />
    </header >
  );
};

export default Header;
