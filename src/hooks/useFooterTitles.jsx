import { useState, useContext, useEffect } from 'react';
// import { SocketContext } from '../context/SocketProvider';
import { GameStateContext } from '../context/GameStateProvider';

const useFooterTitles = () => {
  // const socket = useContext(SocketContext);
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

  const handleTitleClick = (titleNumber) => {
    setFooterTitleGhostState ((prev) => {
      const prevTitles = { ...prev };
      prevTitles[titleNumber] = newText[titleNumber];
      return { ...prevTitles };
    });
  };

  //   const [totalFooterClicks, setTotalFooterClicks] = useState(0);
  //   const incrementFooterPoints = () => setTotalFooterClicks((prev) => prev + 1);

  //   const handleSocketFooterTitleChange = (titleData) => {
  //     setIconGhostState((prev) => ({ ...prev, ...titleData }));
  //   };

  //   useEffect(() => {
  //     // socket.on('socketFooterTitleClick', handleSocketFooterTitleChange);
  //     // socket.emit('footerTitleClick', totalFooterClicks + 1);
    
  //     if(totalFooterClicks === 4) {
  //       incrementPoints(2);
  //     }
  //   }, [socket]);

  return { handleTitleClick, footerTitleGhostState };
};

export default useFooterTitles;
