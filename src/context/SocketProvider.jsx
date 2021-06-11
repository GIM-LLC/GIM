import { createContext } from 'react';
import io from 'socket.io-client';


// this URL is the sandbox
// const sandbox = 'https://gim-llc.herokuapp.com';

// whatever localhost strikes your fancy
const localhost = 'http://localhost:8080';

// this is the real backend
// const url = 'https://gim-server.herokuapp.com';

export const socket = io(localhost, {
  cors: true,
});

export const SocketContext = createContext();
