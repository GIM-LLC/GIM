import React from 'react';
import './app.css';
import { SocketContext, socket } from '../context/SocketProvider';
import { GameStateProvider } from '../context/GameStateProvider';
import CursorWrapper from '../cursors/CursorWrapper';
import Popup from '../components/popup/Popup';
import { useState, useEffect } from 'react';

export default function App() {
  
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {setTimedPopup(true);}, 9000);
  }, []);



  return (
    <SocketContext.Provider value={socket}>
      <GameStateProvider>
        <Popup trigger={timedPopup} setTrigger={setTimedPopup} />
        <CursorWrapper />
      </GameStateProvider>
    </SocketContext.Provider>
  );
}
