import { createContext } from 'react';
import io from 'socket.io-client';

const url = 'https://gim-server.herokuapp.com';

export const socket = io(url, {
  cors: true,
});

export const SocketContext = createContext();
