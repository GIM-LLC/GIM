import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketProvider';

const useDontClick = () => {
  const socket = useContext(SocketContext);
  const [btnClicked, setBtnClicked] = useState(false);

  const handleDontClick = () => {
    setBtnClicked(true);
    // emit socket click to server
    socket.emit('dont click', true);
  };

  useEffect(() => {
    // listen for server socket broadcast
    socket.on('dont socket', handleDontClick);
    return () => {
      socket.off('dont socket', handleDontClick);
    };
  }, [btnClicked]);

  return {
    btnClicked,
    handleDontClick,
  };
};

export default useDontClick;
