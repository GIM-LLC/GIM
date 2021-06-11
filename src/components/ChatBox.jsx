import React, { useState, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketProvider';
import style from './ChatBox.css';

const ChatBox = () => {
  const socket = useContext(SocketContext);

  // consider making messages into objects that hold onto the sender's ID so we can differentiate between self-sent messages and other user-sent ones, since the socket is sending the players message back to them
  const [messages, setMessages] = useState([]);

  // tracking whether there are messages from other users that the client player has not read
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
    setMessages(prev => [...prev, message]);
    if(collapsed) setUnreadMessages(unreadMessages => unreadMessages + 1);
  };

  const handleExpandClick = () => {
    setCollapsed(false);
    setUnreadMessages(0);
  };

  useEffect(() => {
    socket.on('socket message', handleIncomingMessage);

    return () => {
      socket.off('socket message', handleIncomingMessage);
    };
  }, [socket]);

  return (
    <div>
      {collapsed

        ? <div
          className={style.chatIcon}
          onClick=  {handleExpandClick}
        >
          {unreadMessages > 0 && 
          <span className={style.badge}>
            {unreadMessages}
          </span>}

          <span>
              Need help?
          </span>
            
        </div>

        : <div
          className={style.chatBox}
          onBlur={() => setCollapsed(true)}
        >
          <span className={style.closeSpan} onClick={() => setCollapsed(true)}>X</span>
          <ul aria-label="message list" className={style.messageList}>
            {messages.map((message, index) => {
              return message.sender === socket.id
                ? <li
                  key={message + '-' + index}
                  className={style.selfMessage}>
                  {message.text}
                </li>
                : <li
                  key={message + '-' + index}>
                  <p className={style.sender}>{message.sender}:</p>
                  <p>{message.text}</p>
                </li>;
            })}
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
      }
    </div>
    
    
  );
};

export default ChatBox;
