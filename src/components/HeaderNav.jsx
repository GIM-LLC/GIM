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
      <p>link 1</p>
      <p>link 2</p>
      <p>link 3</p>
      <p>link 4</p>
      <p>link 5</p>
      <section>
        <input type='text' placeholder='let me out!' />
        <button>search</button>
      </section>
    </nav>
  );
};

export default HeaderNav;
