/* eslint-disable quotes */
import { useContext, useEffect, useState } from 'react';
import { GameStateContext } from '../context/GameStateProvider';
import { SocketContext } from '../context/SocketProvider';

const useDontClick = () => {
  const socket = useContext(SocketContext);
  const { incrementPoints } = useContext(GameStateContext);

  const [btnClicked, setBtnClicked] = useState(0);

  const btnMessages = ["DON'T", "I SAID DON'T!!", 'REALLY?!?!', 'GET ME OUT OF HERE'];

  const updateClickPoints = () => {
    if (btnClicked < 3) {
      setBtnClicked((btnClicked) => btnClicked + 1);
      incrementPoints(1);
    }
  };

  const handleDontMsg = (btnClicked) => {
    if (btnClicked === 0) {
      return btnMessages[0];
    } else if (btnClicked === 1) {
      return btnMessages[1];
    } else if (btnClicked === 2) {
      return btnMessages[2];
    } else {
      return btnMessages[3];
    }
  };

  const handleDontClick = () => {
    updateClickPoints();
    handleDontMsg(btnClicked);
    socket.emit('ClientDontClick', btnClicked + 1);
  };

  const handleSocketDontMsg = (newBtnClicked) => {
    if (newBtnClicked < 4) {
      setBtnClicked(newBtnClicked);
      incrementPoints(1);
    }
  };

  useEffect(() => {
    socket.on('SocketDontClick', handleSocketDontMsg);
    return () => {
      socket.off('SocketDontClick', handleSocketDontMsg);
    };
  }, [socket]);

  return {
    btnClicked,
    handleDontClick,
    handleDontMsg,
  };
};

export default useDontClick;
