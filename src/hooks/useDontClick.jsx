import { useContext, useEffect, useState } from 'react';
import { GameStateContext } from '../context/GameStateProvider';
import { SocketContext } from '../context/SocketProvider';

const useDontClick = () => {
  const socket = useContext(SocketContext);
  const { incrementPoints } = useContext(GameStateContext);
  const [btnClicked, setBtnClicked] = useState(0);

  const btnMessages = {
    // eslint-disable-next-line quotes
    one: "I SAID DON'T!!",
    two: 'REALLY?!?!',
    three: 'i give up...',
  };

  const currentMsg = () => {
    if (btnClicked === 1) {
      return btnMessages.one;
    } else if (btnClicked === 2) {
      return btnMessages.two;
    } else {
      return btnMessages.three;
    }
  };

  const handleDontClick = () => {
    setBtnClicked((btnClicked) => btnClicked + 1);
    // emit socket click to server
    socket.emit('dont click', btnClicked);
  };

  const handleSocketDont = () => {
    if (btnClicked === 3) incrementPoints(3);
  };

  useEffect(() => {
    // listen for server socket broadcast
    socket.on('dont socket', handleSocketDont);
    return () => {
      socket.off('dont socket', handleSocketDont);
    };
  }, [btnClicked]);

  return {
    btnClicked,
    handleDontClick,
    currentMsg,
  };
};

export default useDontClick;
