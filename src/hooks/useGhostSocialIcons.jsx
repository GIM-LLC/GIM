import { useState, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketProvider';
import { GameStateContext } from '../context/GameStateProvider';

const useGhostSocialIcons = () => {
  const socket = useContext(SocketContext);
  const { incrementPoints } = useContext(GameStateContext);
  const [iconGhostState, setIconGhostState] = useState({
    twitter: false,
    instagram: false,
    github: false,
    linkedin: false,
  });

  const handleSocketIconChange = (iconData) => {
    setIconGhostState((prev) => ({ ...prev, ...iconData }));
  };

  useEffect(() => {
    socket.on('icon change', handleSocketIconChange);
    return () => {
      socket.off('icon change', handleSocketIconChange);
    };
  }, [socket]);

  useEffect(() => {
    if(Object.values(iconGhostState).every((value) => value)) incrementPoints(1);
  }, [iconGhostState]);

  const handleIconClick = (e) => {
    if(!Object.values(iconGhostState).every((value) => value)) {
      setIconGhostState((prev) => {
        const prevObj = { ...prev };
        prevObj[e.target.alt.split('-')[0]] = true;
        socket.emit('icon change', prevObj);
        return { ...prevObj };
      });
    }
  };

  return { iconGhostState, handleIconClick };
};

export default useGhostSocialIcons;
