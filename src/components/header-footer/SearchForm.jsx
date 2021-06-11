import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../context/SocketProvider';

const SearchForm = () => {
  const socket = useContext(SocketContext);

  //input field
  const [searchDisable, setSearchDisable] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    socket.emit('search input', e.target.value);
    setSearchInput(e.target.value);
    //we will need to do more with these once we decide what they trigger
  };

  //another user is typing in search box
  const handleSocketInputChange = (newInput) => {
    setSearchDisable(true);
    setSearchBtnDisable(true);
    setSearchInput(newInput);
  };

  //search button do we need to track this at all?
  const [searchBtnDisable, setSearchBtnDisable] = useState(false);
  const [searchBttnState, setSearchBttnState] = useState(true);

  const handleSearchClick = () => {
    socket.emit('searchSubmit', !searchBttnState);
    setSearchBttnState((bttnState) => !bttnState);
    setSearchInput('');
    //what do we do when someone enters a search phrase?
  };

  //incoming click from socket
  const handleButtonChange = (newButtonState) => {
    setSearchDisable(false);
    setSearchBtnDisable(false);
    setSearchBttnState(newButtonState);
    setSearchInput('');
  };

  //NEED TO ADD INPUT CHANGE LISTENER TO BACK END
  useEffect(() => {
    socket.on('search input typing', handleSocketInputChange);
    socket.on('socket serach click', handleButtonChange);
  }, [socket, searchInput]);

  return (
    <section>
      <input
        type="text"
        placeholder="what do you need?"
        onChange={handleInputChange}
        disabled={searchDisable}
        value={searchInput}
      />
      <button
        onClick={handleSearchClick}
        disabled={searchBtnDisable}>
        {searchBttnState ? 'search' : 'CLICKED!'}
      </button>
    </section>
  );
};

export default SearchForm;
