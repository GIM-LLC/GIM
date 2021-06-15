// import { SocketContext } from '../../context/SocketProvider';
import { GameStateContext } from '../../context/GameStateProvider';
import { useContext, useState } from 'react';

const useRevealText = () => {
  //   //   const socket = useContext(SocketContext);
  const { incrementPoints, textRevealed } = useContext(GameStateContext);
  //   const hiddenText = useRef(null);
  //   const mainBody = useRef(null);
  //   const handleReveal = () => {
  //     mainBody.addClass('fadeOut');
  //     hiddenText.addClass('fadeIn');
  //   };
  //   const handleReset = () => {
  //     mainBody.removeClass('fadeOut');
  //     mainBody.addClass('fadeIn');
  //     hiddenText.removeClass('fadeIn');
  //     hiddenText.addClass('fadeOut');
  //   };
  //   return { textRevealed, hiddenText, handleReveal };

  let startFadeInStyle;
  let endFadeInStyle;
  let startFadeOutStyle;
  let endFadeOutStyle;

  // starts animation if trigger is truthy
  const [animation, setAnimation] = useState(false);

  // if animation has ended, wait 5s then transition back to normal
  const [endAnimation, setEndAnimation] = useState(false);

  const startTransition = () => {
    if (textRevealed) setAnimation(true);
    startFadeInStyle = animation ? 'fadeIn' : null;
    startFadeOutStyle = animation ? 'fadeOut' : null;
    console.log(startFadeInStyle, startFadeOutStyle);
  };

  const handleTimeout = () => {
    setEndAnimation(true);
    endFadeInStyle = endAnimation ? 'fadeIn' : null;
    endFadeOutStyle = endAnimation ? 'fadeOut' : null;
  };

  const endTransition = () => {
    setTimeout(handleTimeout, 5000);
  };

  return {
    startFadeInStyle,
    endFadeInStyle,
    startFadeOutStyle,
    endFadeOutStyle,
    startTransition,
    endTransition,
  };
};

export default useRevealText;
