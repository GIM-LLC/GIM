import { createContext } from 'react';
import io from 'socket.io-client';

// whatever localhost strikes your fancy
// const url = 'http://localhost:8080';

// this is the staging backend
// const url = 'https://gim-server.herokuapp.com';

// this is the live main backend
const url = 'https://gim-llc-main.herokuapp.com/';

export const socket = io(url, {
  cors: true,
});

export const SocketContext = createContext();
