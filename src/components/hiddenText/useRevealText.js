import { SocketContext } from '../../context/SocketProvider';
import { GameStateContext } from '../../context/GameStateProvider';
import { useContext, useState } from 'react';

const useRevealText = () => {
  const socket = useContext(SocketContext);
  const { incrementPoints, bodyRevealed } = useContext(GameStateContext);

  // grab body id to allow style manipulation
  const body = document.getElementById('body');

  // Check if global bodyRevealed state is true
  if (bodyRevealed) {
    // if true, transition body to transparent and reveal hidden element behind
    // after transition emit socket to increase player points by 2
  }
  // if not, do nothing

  return {};
};

export default useRevealText;
