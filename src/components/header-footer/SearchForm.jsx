import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../context/SocketProvider';
import { GameStateContext } from '../../context/GameStateProvider';
import style from './Header.css';
import PropTypes from 'prop-types';

const SearchForm = ({ showDuck }) => {
  const socket = useContext(SocketContext);
  const { incrementPoints } = useContext(GameStateContext);
  const [placeHolderText, setPlaceHolderText] = useState('Search Term');
  const [buttonText, setButtonText] = useState('SEARCH');
  const [prompt, setPrompt] = useState(1);

  const [searchInputDisable, setSearchInputDisable] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchBtnDisable, setSearchBtnDisable] = useState(false);

  const disableInputs = (trueORfalse) => {
    setSearchInputDisable(trueORfalse);
    setSearchBtnDisable(trueORfalse);
  };

  const handleInputChange = (e) => {
    socket.emit('search input', e.target.value);
    setSearchInput(e.target.value);
  };

  //incoming input from socket
  const handleSocketInputChange = (newInput) => {
    disableInputs(true);
    setSearchInput(newInput);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setSearchInput('');
    if (prompt === 1) {
      incrementPoints(1);
      const audio = document.querySelector('#social-icon');
      audio.volume = 0.2;
      audio.play();
      setPrompt(2);
      setPlaceHolderText('What is my name?');
      setButtonText('GUESS');
      socket.emit('searchSubmit', { newPrompt: 2, points: 1, newPlaceholderTxt: 'What is my name?', newButtonTxt: 'GUESS' });
    }
    else if (prompt === 2 && searchInput.toUpperCase() === 'DUCK') {
      showDuck();
      socket.emit('searchSubmit', { newPrompt: 2, points: 0, newPlaceholderTxt: 'What is my name?', newButtonTxt: 'GUESS' });
    }
    else if (prompt === 2 && searchInput.toUpperCase() !== 'ROBIN SMITH') {
      socket.emit('searchSubmit', { newPrompt: 2, points: 0, newPlaceholderTxt: 'What is my name?', newButtonTxt: 'GUESS' });
    }
    else if (prompt === 2 && searchInput.toUpperCase() === 'ROBIN SMITH') {
      incrementPoints(2);
      const audio = document.querySelector('#social-icon');
      audio.volume = 0.2;
      audio.play();
      setPrompt(3);
      setPlaceHolderText('What is MY core value?');
      socket.emit('searchSubmit', { newPrompt: 3, points: 2, newPlaceholderTxt: 'What is MY core value?', newButtonTxt: 'GUESS' });
    }
    else if (prompt === 3 && searchInput.toUpperCase() === 'DUCK') {
      showDuck();
      socket.emit('searchSubmit', { newPrompt: 3, points: 0, newPlaceholderTxt: 'What is MY core value?', newButtonTxt: 'GUESS' });
    }
    else if (prompt === 3 && searchInput.toUpperCase() !== 'ESCAPE') {
      socket.emit('searchSubmit', { newPrompt: 3, points: 0, newPlaceholderTxt: 'What is MY core value?', newButtonTxt: 'GUESS' });
    }
    else if (prompt === 3 && searchInput.toUpperCase() === 'ESCAPE') {
      incrementPoints(2);
      const audio = document.querySelector('#social-icon');
      audio.volume = 0.2;
      audio.play();
      setPrompt(4);
      setPlaceHolderText('You\'re getting closer');
      setButtonText('HURRY UP!!');
      disableInputs(true);
      socket.emit('searchSubmit', { newPrompt: 4, points: 2, newPlaceholderTxt: 'You\'re getting closer', newButtonTxt: 'GO FASTER' });
    }
  };

  //incoming click from socket
  const handleSocketButtonClick = ({ newPrompt, points, newPlaceholderTxt, newButtonTxt }) => {
    disableInputs(false);
    setPrompt(newPrompt);
    incrementPoints(points);
    setPlaceHolderText(newPlaceholderTxt);
    setButtonText(newButtonTxt);
    setSearchInput('');
    const audio = document.querySelector('#social-icon');
    audio.volume = 0.2;
    audio.play();

    if (newPrompt >= 4) {
      const audio = document.querySelector('#social-icon');
      audio.volume = 0.2;
      audio.play();
      disableInputs(true);
    }
  };

  useEffect(() => {
    socket.on('search input typing', handleSocketInputChange);
    socket.on('socket search click', handleSocketButtonClick);
    return () => {
      socket.on('search input typing', handleSocketInputChange);
      socket.on('socket search click', handleSocketButtonClick);
    };
  }, [socket]);

  return (
    <section>
      <form>
        <input
          type="text"
          placeholder={placeHolderText}
          onChange={handleInputChange}
          disabled={searchInputDisable}
          value={searchInput}
          className={prompt === 2 || prompt === 3 ? [style.inputBlink, style.pulse].join(' ') : ''}
        />
        <button
          onClick={handleSearchClick}
          disabled={searchBtnDisable}>
          {buttonText}
        </button>
      </form>
    </section>
  );
};

SearchForm.propTypes = {
  showDuck: PropTypes.func.isRequired
};

export default SearchForm;
