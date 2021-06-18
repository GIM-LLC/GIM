import PropTypes from 'prop-types';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { SocketContext } from './SocketProvider';

// Sets timeout length for failed attempts
const TIMEOUT_LENGTH = 16000;
let currentTimeout;

export const GameStateProvider = ({ children }) => {
  const socket = useContext(SocketContext);

  const [failedTimeouts, setFailedTimeouts] = useState(0);
  const [points, setPoints] = useState(0);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);

  // Increments points as players solve challenges
  const incrementPoints = (points) => setPoints((prev) => prev + points);

  // Keeps track of timeout and increments failedTimeouts to monitor losing state
  const handleTimeout = () => {
    setFailedTimeouts((prev) => prev + 1);
    currentTimeout = setTimeout(handleTimeout, TIMEOUT_LENGTH);
  };

  // Monitors points and resets timer upon challenge completion.
  useEffect(() => {
    if (points > 0 && points < 4) {
      socket.emit('game start');
    }
    if (points >= 1) {
      if (currentTimeout !== undefined) {
        clearTimeout(currentTimeout);
      }
      currentTimeout = setTimeout(handleTimeout, TIMEOUT_LENGTH);
    }
    if (points >= 15) {
      setWin(true);
    }
  }, [points]);

  // Determins win/lose status
  useEffect(() => {
    if (failedTimeouts >= 10) {
      setLose(true);
    }
  }, [failedTimeouts]);

  useEffect(() => {
    if (win || lose) {
      clearTimeout(currentTimeout);
    }
  }, [win, lose]);

  const gameState = {
    failedTimeouts,
    points,
    incrementPoints,
    win,
    lose,
    setLose,
    setWin,
  };

  return (
    <GameStateContext.Provider value={gameState}>
      {children}
    </GameStateContext.Provider>
  );
};

GameStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const GameStateContext = createContext();
