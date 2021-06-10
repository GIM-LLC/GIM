import { createContext } from 'react';
import io from 'socket.io-client';

const url = 'http://localhost:7890';

export const socket = io(url, {
  cors: true
});

export const SocketContext = createContext();
