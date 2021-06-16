import { useState, useEffect, useContext } from 'react';
import { SocketContext } from '../context/SocketProvider';
import { GameStateContext } from '../context/GameStateProvider';

const useGlowingObjects = () => {
  const socket = useContext(SocketContext);
  const { incrementPoints } = useContext(GameStateContext);

  const [glowingObjectState, setGlowingObjectState] = useState({
    gimStoryImg: false,
    galleryImg: false,
    employeeMemorialSection: false,
  });

  const handleGlowChange = (glowingObject) => {
    setGlowingObjectState((prev) => {
      const newObj = { ...prev };
      newObj[glowingObject] = true;
      socket.emit('glowing object click', newObj);
      return newObj;
    });
  };

  const handleSocketGlowChange = (glowObjectData) => {
    setGlowingObjectState((prev) => ({ ...prev, ...glowObjectData }));
  };

  useEffect(() => {
    socket.on('socket glowing object', handleSocketGlowChange);
    return () => {
      socket.off('socket glowing object', handleSocketGlowChange);
    };
  }, [socket]);

  useEffect(() => {
    if(Object.values(glowingObjectState).every((value) => value)) {
      incrementPoints(1);
    }
  }, [glowingObjectState]);

  return {
    glowingObjectState,
    handleGlowChange,
  };
};

export default useGlowingObjects;
