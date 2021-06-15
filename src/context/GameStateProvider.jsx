//wait for a  user to trigger an event(GIM header, etc)
//start the 90 second timer, if they complete another event within the time reset timer and do not increment failed timers
// if they do not solve within the timer, increment the failed timeouts and start a new timer

import React, { createContext, useState, useEffect } from 'react';
const TIMEOUT_LENGTH = 90000;
let currentTimeout;

export const GameStateProvider = ({ children }) => {
  //track amount of times player has failed a timeout
  const [failedTimeouts, setFailedTimeouts] = useState(0);
  const [points, setPoints] = useState(0);
  const [textRevealed, setTextRevealed] = useState(false);

  // When user clicks on 'Transparency' in the footer, this function is triggered to reveal hidden text beneath the Text element
  const handleRevealClick = () => {
    setTextRevealed(true);
  };

  const incrementPoints = (points) => setPoints((prev) => prev + points);
  // when the 90 second timer is failed, increment failed timouts and start new timer
  const handleTimeout = () => {
    setFailedTimeouts((prev) => prev + 1);
    currentTimeout = setTimeout(handleTimeout, TIMEOUT_LENGTH);
  };
  //check for a change in points -> then start a new timer, clear old timer if it exists
  useEffect(() => {
    if (points >= 1) {
      if (currentTimeout !== undefined) {
        clearTimeout(currentTimeout);
      }
      currentTimeout = setTimeout(handleTimeout, TIMEOUT_LENGTH);
    }
  }, [points]);

  const gameState = {
    failedTimeouts,
    points,
    incrementPoints,
    textRevealed,
    handleRevealClick,
  };

  return (
    <GameStateContext.Provider value={gameState}>
      {children}
    </GameStateContext.Provider>
  );
};

export const GameStateContext = createContext();
