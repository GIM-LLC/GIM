import { useContext, useEffect, useState } from 'react';
import { GameStateContext } from '../context/GameStateProvider';
import { SocketContext } from '../context/SocketProvider';

const useDaniDuck = () => {
  const socket = useContext(SocketContext);
  const { incrementPoints } = useContext(GameStateContext);
  const [keyword, setKeyword] = useState(false);

  const revealDaniDuck = () => {
    setKeyword('duck');
  };

  useEffect(() => {
    socket.on('daniDuck', revealDaniDuck);
    return () => {
      socket.off('daniDuck', revealDaniDuck);
    };
  }, [socket]);

  useEffect(() => {
    incrementPoints(1);
    socket.emit('daniDuck', keyword);
  }, [keyword]);

  return { keyword };
};

export default useDaniDuck;
