import { useState, useContext, useEffect, useRef } from 'react';
import { SocketContext } from '../context/SocketProvider';
import { GameStateContext } from '../context/GameStateProvider';

const buttonOptionsObj = {
  stockholder: ['I', 'Proficient', 'Large', 'Pale'],
  employment: ['How', 'Manufacturing', 'Need', 'Stock'],
  life: ['Heat', 'Around', 'Out', 'Where'],
};

const answerArray = ['I', 'Need', 'Out'];

const useGalleryImageButtons = () => {
  const socket = useContext(SocketContext);
  const { incrementPoints } = useContext(GameStateContext);

  const [imageHoverState, setImageHoverState] = useState({
    stockholder: false,
    employment: false,
    life: false,
  });

  const [buttonState, setButtonState] = useState({
    stockholder: 'View More',
    employment: 'View More',
    life: 'View More',
  });

  const [allTrue, setAllTrue] = useState(false);

  const handleButtonClick = (name) => {
    setButtonState((prev) => {
      const newObj = { ...prev };
      const oldValue = newObj[name];
      const nextIndex = buttonOptionsObj[name].indexOf(oldValue) + 1;
      const newButtonValue =
        buttonOptionsObj[name][nextIndex] || buttonOptionsObj[name][0];
      newObj[name] = newButtonValue;

      socket.emit('button text change', newObj);
      return newObj;
    });
  };

  const handleSocketButtonChange = (buttonTextData) => {
    setButtonState((prev) => ({ ...prev, ...buttonTextData }));
  };

  const handleSocketHover = (hoverData) => {
    setImageHoverState((prev) => ({ ...prev, ...hoverData }));
  };

  useEffect(() => {
    socket.on('button text change', handleSocketButtonChange);
    socket.on('image hover', handleSocketHover);
    return () => {
      socket.off('button text change', handleSocketButtonChange);
      socket.off('image hover', handleSocketHover);
    };
  }, [socket]);
  const handleMouseOn = (name) => {
    setImageHoverState((prev) => {
      const newObj = { ...prev };
      newObj[name] = true;

      socket.emit('image hover', newObj);
      return newObj;
    });
  };

  useEffect(() => {
    const buttonArr = Object.values(buttonState);
    if(answerArray.every(answerItem => buttonArr.includes(answerItem))) {
      setAllTrue(true);
      incrementPoints(2);
      const audio = document.querySelector('#buttons');
      audio.volume = 0.3;
      audio.play();
    }
  }, [buttonState]);

  const handleMouseOff = (name) => {
    setImageHoverState((prev) => {
      const newObj = { ...prev };
      newObj[name] = false;

      socket.emit('image hover', newObj);
      return newObj;
    });
  };

  return {
    allTrue,
    imageHoverState,
    buttonState,
    handleButtonClick,
    handleMouseOn,
    handleMouseOff,
  };
};

export default useGalleryImageButtons;
