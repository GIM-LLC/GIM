/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketProvider';
import { GameStateContext } from '../context/GameStateProvider';
import style from './Cursor.css';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import Header from '../components/header-footer/Header';
import ChatBox from '../components/ChatBox';
import Footer from '../components/header-footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Popup from '../components/popup/Popup';
import LosePopup from '../components/popup/LosePopup';

const CursorWrapper = () => {
  const socket = useContext(SocketContext);
  const [globalFeedback, setGlobalFeedback] = useState(false);
  const { points } = useContext(GameStateContext);

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
      cursors[data.id].src = '/assets/orange-cursor.png';
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

  useEffect(() => {
    if (points > 0) {
      setGlobalFeedback(true);
      setTimeout(() => {
        setGlobalFeedback(false);
      }, 1500);
    }
  }, [points]);

  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPopupActive(true);
    }, 9000);
  }, []);

  return (
    <div
      className={
        globalFeedback
          ? `${style.cursorWrapper} ${style.shakeElement}`
          : style.cursorWrapper
      }
      onMouseMove={(e) => handleClientCursor(e)}
      id="cursorWrapper"
    >
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <>
                <Popup popupActive={popupActive} setPopupActive={setPopupActive} />
                <LosePopup />
                <Header />
                <HomePage />
                <ChatBox />
                <Footer />
              </>
            )}
          />

          <Route path="/about" exact component={AboutPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default CursorWrapper;
