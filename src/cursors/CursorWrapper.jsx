/* eslint-disable max-len */
import React, { useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketProvider';
import style from './Cursor.css';
import HomePage from '../pages/HomePage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CursorWrapper = () => {
  const socket = useContext(SocketContext);
  //CURSORS
  //current client cursor movement handling

  const handleClientCursor = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentageX = (x / rect.width) * 100;
    const percentageY = (y / rect.height) * 100;

    socket.emit('movement', { x: percentageX, y: percentageY });
  };

  //other users' cursor movement handling
  const users = {};
  const cursors = {};

  const handleCursorMove = (data) => {
    //if this is a new user add a cursor for them
    // eslint-disable-next-line no-prototype-builtins
    if (!users.hasOwnProperty(data.id)) {
      const cursorWrapper = document.getElementById('cursorWrapper');
      const cursorDiv = document.createElement('img');
      cursors[data.id] = cursorWrapper.appendChild(cursorDiv);
      cursors[data.id].style.position = 'absolute';
      cursors[data.id].src = '/assets/cursor.png';
      cursors[data.id].alt = 'pointer';
      cursors[data.id].style.width = '10px';
      cursors[data.id].id = data.id;
    }

    //update users cursor position whether they are new or not
    cursors[data.id].style.left = data.x + '%';
    cursors[data.id].style.top = data.y + '%';
    users[data.id] = data;
  };

  //remove user cursor when they disconnect
  const removeCursor = (id) => {
    console.log('disconnected', id);
    delete users[id];
    const cursorDiv = document.getElementById(`${id}`);
    cursorDiv.remove();
  };

  useEffect(() => {
    socket.on('moving', handleCursorMove);
    socket.on('removeCursor', removeCursor);
    return () => {
      socket.off('moving', handleCursorMove);
    };
  }, [socket]);

  return (
    <div
      className={style.cursorWrapper}
      onMouseMove={(e) => handleClientCursor(e)}
      id="cursorWrapper"
    >
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default CursorWrapper;
