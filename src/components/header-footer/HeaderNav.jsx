/* eslint-disable quotes */
import React, { useContext, useEffect, useState } from 'react';
import style from './Header.css';
import { SocketContext } from '../../context/SocketProvider';

const HeaderNav = () => {
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
    setSearchInput(newInput);
  };

  //search button do we need to track this at all?
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
    setSearchBttnState(newButtonState);
    setSearchInput('');
  };

  //NEED TO ADD INPUT CHANGE LISTENER TO BACK END
  useEffect(() => {
    socket.on('search input typing', handleSocketInputChange);
    socket.on('socket serach click', handleButtonChange);
  }, [socket, searchInput]);

  const about = (e) => {
    //on scroll we can pass the main link name and then emit that to the socket
    console.log('scrolled over about: ' + e.target.textContent);
  };

  return (
    <nav className={style.navBar}>
      <p className={style.navLink} onMouseEnter={(e) => about(e)}>
        about
      </p>
      <div className={[style.dropList, style.sublist1].join(' ')}>
        <p className={style.subLink}>our why</p>
        <p className={style.subLink}>our history</p>
        <p className={style.subLink}>our team</p>
      </div>
      <p className={style.navLink} onMouseEnter={(e) => about(e)}>
        locations
      </p>
      <div className={[style.dropList, style.sublist2].join(' ')}>
        <p className={style.subLink}>northeast</p>
        <p className={style.subLink}>midwest</p>
        <p className={style.subLink}>coming soon</p>
      </div>
      <p className={style.navLink} onMouseEnter={(e) => about(e)}>
        press
      </p>
      <div className={[style.dropList, style.sublist3].join(' ')}>
        <p className={style.subLink}>resources</p>
        <p className={style.subLink}>press sheet</p>
        <p className={style.subLink}>FAQs</p>
      </div>
      <p className={style.navLink} onMouseEnter={(e) => about(e)}>
        join us
      </p>
      <div className={[style.dropList, style.sublist4].join(' ')}>
        <p className={style.subLink}>openings</p>
        <p className={style.specialSubLink}>{`DON'T`}</p>
        <p className={style.subLink}>benefits</p>
      </div>
      <p className={style.navLink} onMouseEnter={(e) => about(e)}>
        investors
      </p>
      <div className={[style.dropList, style.sublist5].join(' ')}>
        <p className={style.subLink}>financials</p>
        <p className={style.subLink}>stock info</p>
      </div>
      <section>
        <input
          type="text"
          placeholder="what do you need?"
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
