import React from 'react';
import useChat from '../hooks/useChat';
import style from './ChatBox.css';

const ChatBox = () => {
  const {
    clientId,
    messages,
    unreadMessages,
    inputMessage,
    setInputMessage,
    collapsed,
    setCollapsed,
    handleExpandClick,
    handleFormSubmit
  } = useChat();

  return (
    <div>
      {collapsed
        ? <div
          className={style.chatIcon}
          onClick={handleExpandClick}
        >
          {unreadMessages > 0 && 
          <span className={style.badge}>
            <i className="fas fa-exclamation-circle"></i>
          </span>}

          <span>
            <i className="far fa-comment-dots"></i>
          </span>
            
        </div>

        : <div
          className={style.chatBox}
        >
          <div className={style.topBar}>
            <span className={style.online}>
             You are online with our virtual assistant
            </span>
            <span className={style.closeSpan} onClick={() => setCollapsed(true)}>X</span>
          </div>
          
          <ul aria-label="message list" className={style.messageList} id="messageList">
            {messages.map((message, index) => {
              return message.sender === clientId
                ? <li
                  key={message + '-' + index}
                  className={style.selfMessage}>
                  {message.text}
                </li>
                : <li
                  key={message + '-' + index}>
                  <span className={style.sender}>{message.sender}:</span>
                  <br />
                  <span>{message.text}</span>
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
