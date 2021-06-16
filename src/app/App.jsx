import React from 'react';
import './app.css';
import { SocketContext, socket } from '../context/SocketProvider';
import { GameStateContext, GameStateProvider } from '../context/GameStateProvider';
import CursorWrapper from '../cursors/CursorWrapper';
import Popup from '../components/popup/Popup';
import { useState, useEffect, useContext } from 'react';

export default function App() {
  // const { points } = useContext(GameStateContext);
  const [popupActive, setPopupActive] = useState(false);
  
  useEffect(() => {
    setTimeout(() => 
    {
      setPopupActive(true);
    }, 9000);
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <GameStateProvider>
        <Popup
          popupActive={popupActive}
          setPopupActive={setPopupActive}
        />
        <CursorWrapper />
      </GameStateProvider>
    </SocketContext.Provider>
  );
}
