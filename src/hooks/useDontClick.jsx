/* eslint-disable quotes */
import { useContext, useEffect, useState } from 'react';
import { GameStateContext } from '../context/GameStateProvider';
import { SocketContext } from '../context/SocketProvider';

const useDontClick = () => {
  const socket = useContext(SocketContext);
  const { incrementPoints } = useContext(GameStateContext);
  const [btnClicked, setBtnClicked] = useState(0);

  const btnMessages = ["DON'T", "I SAID DON'T!!", 'REALLY?!?!', 'i give up...'];

  const updateClickPoints = () => {
    if (btnClicked < 3) {
      setBtnClicked((btnClicked) => btnClicked + 1);
      incrementPoints(1);
    }
  };

  const handleDontMsg = (btnClicked) => {
    if (btnClicked === 1) {
      return btnMessages[1];
    } else if (btnClicked === 2) {
      return btnMessages[2];
    } else if (btnClicked === 3) {
      return btnMessages[3];
    } else {
      return btnMessages[0];
    }
  };

  const handleDontClick = () => {
    updateClickPoints();
    handleDontMsg;
    socket.emit('ClientDontClick');
  };

  useEffect(() => {
    // listen for server socket broadcast
    socket.on('SocketDontClick', handleDontMsg);
    return () => {
      socket.off('SocketDontClick', handleDontMsg);
    };
  }, [btnClicked]);

  return {
    btnClicked,
    handleDontClick,
    handleDontMsg,
  };
};

export default useDontClick;
