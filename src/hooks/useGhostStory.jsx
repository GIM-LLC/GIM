import { useState, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketProvider';
import { GameStateContext } from '../context/GameStateProvider';

const useGhostStory = () => {
  const socket = useContext(SocketContext);
  const { incrementPoints } = useContext(GameStateContext);

  const [showGhostStory, setShowGhostStory] = useState(false);
  const [ghostStoryCounted, setGhostStoryCounted] = useState(false);

  const handleGhostStoryPoint = points => {
    incrementPoints(points);
    setGhostStoryCounted(true);
  };

  const handleGhostStoryFlip = () => {
    setShowGhostStory(prev => !prev);
  };

  const handleStoryClick = () => {
    handleGhostStoryFlip();
    
    if(!ghostStoryCounted) {
      handleGhostStoryPoint(1);
      socket.emit('ghostStoryPoint', 1);
    }

    socket.emit('ghostStoryFlip');
  };

  useEffect(() => {
    socket.on('ghostStoryFlip', handleGhostStoryFlip);
    socket.on('socketGhostStoryPoint', handleGhostStoryPoint);

    return () => {
      socket.off('ghostStoryFlip', handleGhostStoryFlip);
      socket.off('socketGhostStoryPoint', handleGhostStoryPoint);
    };
  }, [socket]);

  return { showGhostStory, handleStoryClick };
};

export default useGhostStory;
