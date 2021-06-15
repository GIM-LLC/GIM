/* eslint-disable quotes */
import React, { useContext, useEffect, useState } from 'react';
import style from './Header.css';
import { SocketContext } from '../../context/SocketProvider';
import SearchForm from './SearchForm';
import useDontClick from '../../hooks/useDontClick';

const HeaderNav = () => {
  const socket = useContext(SocketContext);
  const [hover, setHover] = useState({
    about: false,
    locations: false,
    'join us': false,
    press: false,
    investors: false,
  });

  const { btnClicked, handleDontClick } = useDontClick();

  const handleLinkHover = (e) => {
    const linkName = e.target.textContent;
    setHover((prev) => ({ ...prev, [linkName]: true }));
    socket.emit('link hover', { ...hover, [linkName]: true });
  };

  const handleLinkOff = (e) => {
    const linkName = e.target.textContent;
    setHover((prev) => {
      return { ...prev, [linkName]: false };
    });
    socket.emit('link hover', { ...hover, [linkName]: false });
  };

  const handleSocketLinkHover = (newHoverData) => {
    setHover(newHoverData);
  };

  useEffect(() => {
    socket.on('socket link hover', handleSocketLinkHover);
  }, [socket]);

  return (
    <nav className={style.navBar}>
      <ul>
        <li className={style.navLink}>
          <a
            href="#"
            onMouseEnter={(e) => handleLinkHover(e)}
            onMouseOut={(e) => handleLinkOff(e)}
            style={hover.about ? { color: '#f97c00' } : { color: '#3f8a72' }}
          >
            about
          </a>
          {hover.about && (
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
          )}
        </li>

        <li className={style.navLink}>
          <a
            href="#"
            onMouseEnter={(e) => handleLinkHover(e)}
            onMouseOut={(e) => handleLinkOff(e)}
            style={
              hover.locations ? { color: '#f97c00' } : { color: '#3f8a72' }
            }
          >
            locations
          </a>
          {hover.locations && (
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
          )}
        </li>

        <li className={style.navLink}>
          <a
            href="#"
            onMouseEnter={(e) => handleLinkHover(e)}
            onMouseOut={(e) => handleLinkOff(e)}
            style={
              hover['join us'] ? { color: '#f97c00' } : { color: '#3f8a72' }
            }
          >
            join us
          </a>
          {hover['join us'] && (
            <ul className={style.subNav}>
              <li className={style.subLink}>
                <a href="#">openings</a>
              </li>
              <li className={style.subLink}>
                <a
                  href="#"
                  onClick={handleDontClick}
                  clicked={btnClicked.toString()}
                >
                  {btnClicked ? 'DON&apos;T' : 'I SAID DON&apos;T!!'}
                </a>
              </li>
              <li className={style.subLink}>
                <a href="#">benefits</a>
              </li>
            </ul>
          )}
        </li>

        <li className={style.navLink}>
          <a
            href="#"
            onMouseEnter={(e) => handleLinkHover(e)}
            onMouseOut={(e) => handleLinkOff(e)}
            style={hover.press ? { color: '#f97c00' } : { color: '#3f8a72' }}
          >
            press
          </a>
          {hover.press && (
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
          )}
        </li>

        <li className={style.navLink}>
          <a
            href="#"
            onMouseEnter={(e) => handleLinkHover(e)}
            onMouseOut={(e) => handleLinkOff(e)}
            style={
              hover.investors ? { color: '#f97c00' } : { color: '#3f8a72' }
            }
          >
            investors
          </a>
          {hover.investors && (
            <ul className={style.subNav}>
              <li className={style.subLink}>
                <a href="#">financials</a>
              </li>
              <li className={style.subLink}>
                <a href="#">stock info</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <SearchForm />
    </nav>
  );
};

export default HeaderNav;
