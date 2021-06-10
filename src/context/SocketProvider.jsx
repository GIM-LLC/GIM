import { createContext } from 'react';
import io from 'socket.io-client';

const url = 'https://3w3wg.sse.codesandbox.io/';

export const socket = io(url, {
  cors: true
});

export const SocketContext = createContext();
