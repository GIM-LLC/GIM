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
      <ul>
        <li className={style.navLink} onMouseEnter={(e) => about(e)}>
          <a href="#">about</a>
          <ul className={style.subNav}>
            <li className={style.subLink}>
              <a>our why</a>
            </li>
            <li className={style.subLink}>
              <a>our history</a>
            </li>
            <li className={style.subLink}>
              <a>our team</a>
            </li>
          </ul>
        </li>

        <li className={style.navLink} onMouseEnter={(e) => about(e)}>
          <a href="#">locations</a>
          <ul className={style.subNav}>
            <li className={style.subLink}>
              <a href="#">northeast</a>
            </li>
            <li className={style.subLink}>
              <a href="#">midwest</a>
            </li>
            <li className={style.subLink}>
              <a href="#">coming soon</a>
            </li>
          </ul>
        </li>

        <li className={style.navLink} onMouseEnter={(e) => about(e)}>
          <a href="#">join us</a>
          <ul className={style.subNav}>
            <li className={style.subLink}>
              <a href="#">openings</a>
            </li>
            <li className={style.subLink}>
              <a href="#">benefits</a>
            </li>
          </ul>
        </li>

        <li className={style.navLink} onMouseEnter={(e) => about(e)}>
          <a href="#">press</a>
          <ul className={style.subNav}>
            <li className={style.subLink}>
              <a href="#">resources</a>
            </li>
            <li className={style.subLink}>
              <a href="#">press sheet</a>
            </li>
            <li className={style.subLink}>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </li>

        <li className={style.navLink} onMouseEnter={(e) => about(e)}>
          <a href="#">investors</a>
          <ul className={style.subNav}>
            <li className={style.subLink}>
              <a href="#">financials</a>
            </li>
            <li className={style.subLink}>
              <a href="#">stock info</a>
            </li>
          </ul>
        </li>
      </ul>

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
