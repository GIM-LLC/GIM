import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../context/SocketProvider';
import { GameStateContext } from '../../context/GameStateProvider';
import style from './Header.css';

const SearchForm = () => {
  const socket = useContext(SocketContext);
  const { incrementPoints } = useContext(GameStateContext);
  const [placeHolderText, setPlaceHolderText] = useState('Search Term');
  const [buttonText, setButtonText] = useState('SEARCH');
  const [prompt, setPrompt] = useState(1);

  const disableInputs = (trueORfalse) => {
    setSearchDisable(trueORfalse);
    setSearchBtnDisable(trueORfalse);
  };

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
    disableInputs(true);
    setSearchInput(newInput);
  };

  //search button do we need to track this at all?
  const [searchBtnDisable, setSearchBtnDisable] = useState(false);

  const handleSearchClick = () => {
    setSearchInput('');
    // on first answer typed into search box and click submit 
    if (prompt === 1) {
      incrementPoints(1);
      setPrompt(2);
      setPlaceHolderText('What is my name?');
      setButtonText('GUESS');
      socket.emit('searchSubmit', { newPrompt: 2, points: 1, newPlaceholderTxt: 'What is my name?', newButtonTxt: 'GUESS' });
    } else if (prompt === 2 && searchInput.toUpperCase() === 'ROBIN SMITH') {
      incrementPoints(2);
      setPrompt(3);
      setPlaceHolderText('What is MY core value?');
      socket.emit('searchSubmit', { newPrompt: 3, points: 2, newPlaceholderTxt: 'What is MY core value?', newButtonTxt: 'GUESS' });
    } else if (prompt === 3 && searchInput.toUpperCase() === 'ESCAPE') {
      incrementPoints(2);
      setPrompt(4);
      setPlaceHolderText('You\'re getting closer');
      setButtonText('GO FASTER');
      disableInputs(true);
      socket.emit('searchSubmit', { newPrompt: 4, points: 2, newPlaceholderTxt: 'You\'re getting closer', newButtonTxt: 'GO FASTER' });
    } else if (searchInput.toUpperCase() === 'DUCK') {
      socket.emit('duck', true);
    }
  };

  //incoming click from socket
  const handleSocketButtonClick = ({ newPrompt, points, newPlaceholderTxt, newButtonTxt }) => {
    //re-enable input and button
    disableInputs(false);
    //update new prompt #
    setPrompt(newPrompt);
    //up points 
    console.log('points coming in from emit: ', points);
    incrementPoints(points);
    //set new input placeholder text 
    setPlaceHolderText(newPlaceholderTxt);
    //set new button text 
    setButtonText(newButtonTxt);
    //clear input field 
    setSearchInput('');
    //disable search bttn and input if all answers correct 
    if (newPrompt >= 4) {
      disableInputs(true);
    }
  };

  useEffect(() => {
    socket.on('search input typing', handleSocketInputChange);
    socket.on('socket search click', handleSocketButtonClick);
    return () => {
      // socket.off('current users', handleCurrentUsers);
      socket.on('search input typing', handleSocketInputChange);
      socket.on('socket search click', handleSocketButtonClick);
    };
  }, [socket]);

  return (
    <section>
      <input
        type="text"
        placeholder={placeHolderText}
        onChange={handleInputChange}
        disabled={searchDisable}
        value={searchInput}
        className={prompt === 2 || prompt === 3 ? [style.inputBlink, style.pulse].join(' ') : ''}
      />
      <button
        onClick={handleSearchClick}
        disabled={searchBtnDisable}>
        {buttonText}
      </button>
    </section>
  );
};

export default SearchForm;
