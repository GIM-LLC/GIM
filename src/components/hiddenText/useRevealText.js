// import { SocketContext } from '../../context/SocketProvider';
import { GameStateContext } from '../../context/GameStateProvider';
import { useContext } from 'react';

const useRevealText = () => {
  //   const socket = useContext(SocketContext);
  const { incrementPoints, textRevealed } = useContext(GameStateContext);

  const hiddenText = document.querySelector('hidden');

  const revealText = () => {
    if (textRevealed === true) {
      hiddenText.style = 'fadeIn';
    }
  };

  return { textRevealed, revealText };
};

export default useRevealText;
