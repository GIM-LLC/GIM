import React from 'react';
import './app.css';
import { SocketContext, socket } from '../context/SocketProvider';
import CursorWrapper from '../cursors/CursorWrapper';

export default function App() {
  return (
    <SocketContext.Provider value={socket}>
      <CursorWrapper />
    </SocketContext.Provider>
  );
}
