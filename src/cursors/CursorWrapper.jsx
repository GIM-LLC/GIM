/* eslint-disable no-prototype-builtins */
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SocketContext } from '../context/SocketProvider';
import { GameStateContext } from '../context/GameStateProvider';

import style from './Cursor.css';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import Header from '../components/header-footer/Header';
import ChatBox from '../components/ChatBox';
import Footer from '../components/header-footer/Footer';
import Popup from '../components/popup/Popup';
import LosePopup from '../components/popup/LosePopup';

const CursorWrapper = () => {
  //context
  const socket = useContext(SocketContext);
  const { points } = useContext(GameStateContext);

  //CURSORS
  //current client cursor movement handling
  const handleClientCursor = (e) => {
    //get screen size so we can pass percentages for more accuracy
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
    delete users[id];
    const cursorDiv = document.getElementById(`${id}`);
    cursorDiv.remove();
  };

  //listening to socket for curspor movements or disconnects 
  useEffect(() => {
    socket.on('moving', handleCursorMove);
    socket.on('removeCursor', removeCursor);
    return () => {
      socket.off('moving', handleCursorMove);
    };
  }, [socket]);

  //POINTS to trigger shake animation
  const [globalFeedback, setGlobalFeedback] = useState(false);
  useEffect(() => {
    if (points > 0) {
      setGlobalFeedback(true);
      setTimeout(() => {
        setGlobalFeedback(false);
      }, 1500);
    }
  }, [points]);

  //TIME from inital page load to trigger first pop up window 
  const [popupActive, setPopupActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPopupActive(true);
    }, 9000);
  }, []);

  return (
    <div
      id="cursorWrapper"
      className={
        globalFeedback
          ? `${style.cursorWrapper} ${style.shakeElement}`
          : style.cursorWrapper
      }
      onMouseMove={(e) => handleClientCursor(e)}
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
