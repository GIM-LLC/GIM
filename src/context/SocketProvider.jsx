import { createContext } from 'react';
import io from 'socket.io-client';

// this URL is the sandbox
const url = 'https://gim-llc.herokuapp.com';

// whatever localhost strikes your fancy
const localhost = 'http://localhost:8080';

export const socket = io(localhost, {
  cors: true
});

export const SocketContext = createContext();
