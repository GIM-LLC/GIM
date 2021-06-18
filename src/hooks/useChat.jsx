import React, { useState, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketProvider';

const useChat = () => {
  const socket = useContext(SocketContext);

  const [messages, setMessages] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [inputMessage, setInputMessage] = useState('');
  const [collapsed, setCollapsed] = useState(true);

  const handleFormSubmit = e => {
    e.preventDefault();

    if(inputMessage) {
      
      const messageObj = {
        sender: socket.id,
        text: inputMessage
      };

      socket.emit('client message', messageObj);
      setMessages(prev => [...prev, messageObj]);

      setInputMessage('');
    }
  };

  const handleIncomingMessage = message => {
    const audio = document.querySelector('#chat-audio');
    audio.volume = 0.1;
    audio.play();

    setMessages(prev => [...prev, message]);
    if(collapsed) setUnreadMessages(unreadMessages => unreadMessages + 1);
  };

  const handleExpandClick = () => {
    setCollapsed(false);
    setUnreadMessages(0);
  };

  useEffect(() => {
    if(messages.length && messages[messages.length - 1].sender === socket.id) {
      const messageList = document.getElementById('messageList');
      messageList.scrollTo(0, messageList.scrollHeight, { behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    socket.on('socket message', handleIncomingMessage);
    return () => {
      socket.off('socket message', handleIncomingMessage);
    };
  }, [socket]);

  return {
    clientId: socket.id,
    messages,
    unreadMessages,
    inputMessage,
    setInputMessage,
    collapsed,
    setCollapsed,
    handleExpandClick,
    handleFormSubmit
  };
};

export default useChat;
