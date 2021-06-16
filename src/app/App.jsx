import React from 'react';
import './app.css';
import { SocketContext, socket } from '../context/SocketProvider';
import { GameStateProvider } from '../context/GameStateProvider';
import CursorWrapper from '../cursors/CursorWrapper';
import Popup from '../components/popup/Popup';
import { useState, useEffect } from 'react';
import LosePopup from '../components/popup/LosePopup';

export default function App() {
  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPopupActive(true);
    }, 9000);
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <GameStateProvider>
        <Popup popupActive={popupActive} setPopupActive={setPopupActive} />
        <LosePopup />
        <CursorWrapper/>
      </GameStateProvider>
    </SocketContext.Provider>
  );
}
