//wait for a  user to trigger an event(GIM header, etc)
//start the 90 second timer, if they complete another event within the time reset timer and do not increment failed timers
// if they do not solve within the timer, increment the failed timeouts and start a new timer

import PropTypes from 'prop-types';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { SocketContext } from './SocketProvider';

const TIMEOUT_LENGTH = 16000;
let currentTimeout;

export const GameStateProvider = ({ children }) => {
  const socket = useContext(SocketContext);

  //track amount of times player has failed a timeout
  const [failedTimeouts, setFailedTimeouts] = useState(0);
  const [points, setPoints] = useState(0);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);

  const incrementPoints = (points) => setPoints((prev) => prev + points);
  // when the 90 second timer is failed, increment failed timouts and start new timer
  const handleTimeout = () => {
    setFailedTimeouts((prev) => prev + 1);
    currentTimeout = setTimeout(handleTimeout, TIMEOUT_LENGTH);
  };
  //check for a change in points -> then start a new timer, clear old timer if it exists
  useEffect(() => {
    if(points > 0 && points < 4) {
      socket.emit('game start');
    }
    if(points >= 1) {
      if(currentTimeout !== undefined) {
        clearTimeout(currentTimeout);
      }
      currentTimeout = setTimeout(handleTimeout, TIMEOUT_LENGTH);
    }
    if(points >= 15) {
      setWin(true);
    }
  }, [points]);

  useEffect(() => {
    if(failedTimeouts >= 5) {
      setLose(true);
    }
  }, [failedTimeouts]);

  // both end state popups should include a replay link and an about us link
  useEffect(() => {
    if(win || lose) {
      // the game is over
      if(win) {
        // trigger a win popup
      }
      if(lose) {
        // trigger a lose popup (500 error that takes up whole screen)
        
      }
      // route to about page
    }
  }, [win, lose]);

  const gameState = {
    failedTimeouts,
    points,
    incrementPoints,
    win,
    lose,
    setLose
  };

  return (
    <GameStateContext.Provider value={gameState}>
      {children}
    </GameStateContext.Provider>
  );
};

GameStateProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const GameStateContext = createContext();
