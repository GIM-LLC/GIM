/* eslint-disable quotes */
import React, { useContext, useEffect, useState } from 'react';
import style from './Header.css';
import { SocketContext } from '../context/SocketProvider';

const HeaderNav = () => {
  const socket = useContext(SocketContext);
  const [buttonState, setButtonState] = useState(true);

  const handleClick = () => {
    socket.emit('click', !buttonState);
    setButtonState((buttonState) => !buttonState);
  };

  const handleButtonChange = (newButtonState) => {
    setButtonState(newButtonState);
  };

  useEffect(() => {
    socket.on('click', handleButtonChange);
  }, [socket]);

  return (
    <nav className={style.navBar}>
      <ul>
        <li>
          <button onClick={handleClick}>
            {buttonState ? 'stuff' : "n'Things"}
          </button>
        </li>
        <li>
          <button onClick={handleClick}>stuff</button>
        </li>
        <li>
          <button onClick={handleClick}>stuff</button>
        </li>
        <li>
          <button onClick={handleClick}>stuff</button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
