import { useState, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketProvider';
import { GameStateContext } from '../context/GameStateProvider';

const useFooterTitles = () => {
  const socket = useContext(SocketContext);
  const { incrementPoints } = useContext(GameStateContext);

  const [footerTitleGhostState, setFooterTitleGhostState] = useState({
    titleOne: 'our people',
    titleTwo: 'why GIM',
    titleThree: 'our products',
    titleFour: 'contact us',
  });

  const newText = {
    titleOne: 'HELP',
    titleTwo: 'FREE',
    titleThree: 'MY',
    titleFour: 'SOUL',
  };


  const [totalFooterClicks, setTotalFooterClicks] = useState(0);
  const incrementFooterPoints = () => setTotalFooterClicks((prev) => prev + 1);

  const handleSocketTitleChange = (titleData) => {
    setFooterTitleGhostState((prev) => ({
      ...prev, ...titleData
    }));
    incrementFooterPoints();
  };

  useEffect(() => {
    socket.on('socketFooterTitleClick', handleSocketTitleChange);
    return () => {
      socket.off('socketFooterTitleClick', handleSocketTitleChange);
    };
  }, [socket]);

  const handleTitleClick = (titleNumber) => {
    setFooterTitleGhostState ((prev) => {
      const prevTitles = { ...prev };
      if(prevTitles[titleNumber] !== newText[titleNumber]) {
        prevTitles[titleNumber] = newText[titleNumber];
        socket.emit('footerTitleClick', prevTitles);
        return prevTitles;
      }
      return prev;
    });
    incrementFooterPoints();

  };

  useEffect(() => {
    if(totalFooterClicks === 4) {
      incrementPoints(2);
      
      const audio = document.querySelector('#footer-audio');
      audio.volume = 0.1;
      audio.play();
    }
  }, [totalFooterClicks]);

  return { handleTitleClick, footerTitleGhostState };
};

export default useFooterTitles;
