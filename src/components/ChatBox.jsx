import React, { useState, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketProvider';
import style from './ChatBox.css';

const ChatBox = () => {
  const socket = useContext(SocketContext);

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    if(inputMessage) socket.emit('client message', inputMessage);
    setInputMessage('');
  };

  const handleIncomingMessage = message => {
    setMessages(prev => [...prev, message]);
  };

  useEffect(() => {
    socket.on('socket message', handleIncomingMessage);

    return () => {
      socket.off('socket message', handleIncomingMessage);
    };
  }, [socket]);

  return (
    <div className={style.chatBox}>

      <ul aria-label="message list" className={style.messageList}>
        {messages.map((message, index) => (
          <li key={message + '-' + index}>
            {message}
          </li>
        ))}
      </ul>
      
      <form
        aria-label="message submission form"
        className={style.messageSubmit}
        onSubmit={handleFormSubmit}
      >
        <input
          aria-label="message input"
          value={inputMessage}
          onChange={e => setInputMessage(e.target.value)}
        />
        <button aria-label="message submit">Send</button>
      </form>

    </div>
  );
};

export default ChatBox;
