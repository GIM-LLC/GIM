/* eslint-disable quotes */
import React, { useContext, useEffect, useState } from 'react';
import style from './Header.css';
import { SocketContext } from '../context/SocketProvider';

const HeaderNav = () => {
  const socket = useContext(SocketContext);

  //input field 
  const [searchDisable, setSearchDisable] = useState(false);
  const [searchInput, setSearchInput] = useState(null);

  const handleInputChange = (e) => {
    socket.emit('search input', e.target.value);
    setSearchInput(e.target.value);
    //we will need to do more with these once we decide what they trigger
  };

  //another user is typing in search box 
  const handleSocketInputChange = (newInput) => {
    setSearchDisable(true);
    setSearchInput(newInput);
  };

  //search button do we need to track this at all? 
  const [searchBttnState, setSearchBttnState] = useState(true);

  const handleSearchClick = () => {
    socket.emit('click', !searchBttnState);
    setSearchBttnState((bttnState) => !bttnState);
    setSearchInput('');
    //what do we do when someone enters a search phrase? 
  };

  //incoming click from socket
  const handleButtonChange = (newButtonState) => {
    setSearchBttnState(newButtonState);
  };

  //NEED TO ADD INPUT CHANGE LISTENER TO BACK END
  useEffect(() => {
    socket.on('search input typing', handleSocketInputChange);
    socket.on('click', handleButtonChange);
  }, [socket, searchInput]);


  return (
    <nav className={style.navBar}>
      <p>link 1</p>
      <p>link 2</p>
      <p>link 3</p>
      <p>link 4</p>
      <p>link 5</p>
      <section>
        <input
          type='text'
          placeholder='what do you need?'
          onChange={handleInputChange}
          disabled={searchDisable}
          value={searchInput}
        />
        <button onClick={handleSearchClick}>
          {searchBttnState ? 'search' : 'CLICKED!'}
        </button>
      </section>
    </nav>
  );
};

export default HeaderNav;
