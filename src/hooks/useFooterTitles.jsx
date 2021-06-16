import { useState, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketProvider';
import { GameStateContext } from '../context/GameStateProvider';

const useFooterTitles = () => {
  const socket = useContext(SocketContext);
  const { incrementPoints } = useContext(GameStateContext);

  //   const [titleOne, setTitleOne] = useState('our people');
  //   const [titleTwo, setTitleTwo] = useState('why GIM');
  //   const [titleThree, setTitleThree] = useState('our products');
  //   const [titleFour, setTitleFour] = useState('contact us');

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
    }
  }, [totalFooterClicks]);

  return { handleTitleClick, footerTitleGhostState };
};

export default useFooterTitles;
