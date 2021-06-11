/* eslint-disable quotes */
import React, { useContext, useEffect, useState } from 'react';
import styles from './Header.css';
import { SocketContext } from '../../context/SocketProvider';
import SearchForm from './SearchForm';

const HeaderNav = () => {
  const socket = useContext(SocketContext);

  const [hover, setHover] = useState({});

  const handleLinkHover = (e) => {
    const linkName = e.target.textContent;
    setHover(prev => { return { ...prev, [linkName]: false }; });
    socket.emit('link hover', hover);
    console.log('enter: ' + linkName + ' about: ' + hover.about + ' locations: ' + hover.locations);
  };

  const handleLinkOff = (e) => {
    const linkName = e.target.textContent;
    setHover(prev => { return { ...prev, [linkName]: true }; });
    socket.emit('link hover', hover);
    console.log('left: ' + linkName + ' about: ' + hover.about + ' locations: ' + hover.locations);
  };

  const handleSocketLinkHover = (newHoverData) => {
    setHover(newHoverData);
  };

  useEffect(() => {
    socket.on('socket link hover', handleSocketLinkHover);
  }, [socket, hover]);


  return (
    <nav className={styles.navBar}>
      <p
        className={styles.navLink}
        onMouseEnter={(e) => handleLinkHover(e)}
        onMouseOut={(e) => handleLinkOff(e)}
        style={hover.about ? { color: '#f97c00' } : { color: '#3f8a72' }}
      >
        about
      </p>
      <div className={[styles.dropList, styles.sublist1].join(' ')}>
        <p className={styles.subLink}>our why</p>
        <p className={styles.subLink}>our history</p>
        <p className={styles.subLink}>our team</p>
      </div>
      <p
        className={styles.navLink}
        onMouseEnter={(e) => handleLinkHover(e)}
        onMouseOut={(e) => handleLinkOff(e)}
        style={hover.locations ? { color: '#f97c00' } : { color: '#3f8a72' }}
      >
        locations
      </p>
      <div className={[styles.dropList, styles.sublist2].join(' ')}>
        <p className={styles.subLink}>northeast</p>
        <p className={styles.subLink}>midwest</p>
        <p className={styles.subLink}>coming soon</p>
      </div>
      <p
        className={styles.navLink}
        onMouseEnter={(e) => handleLinkHover(e)}
        onMouseOut={(e) => handleLinkOff(e)}
        style={hover.press ? { color: '#f97c00' } : { color: '#3f8a72' }}
      >
        press
      </p>
      <div className={[styles.dropList, styles.sublist3].join(' ')}>
        <p className={styles.subLink}>resources</p>
        <p className={styles.subLink}>press sheet</p>
        <p className={styles.subLink}>FAQs</p>
      </div>
      <p
        className={styles.navLink}
        onMouseEnter={(e) => handleLinkHover(e)}
        onMouseOut={(e) => handleLinkOff(e)}
        style={hover.join ? { color: '#f97c00' } : { color: '#3f8a72' }}
      >
        join us
      </p>
      <div className={[styles.dropList, styles.sublist4].join(' ')}>
        <p className={styles.subLink}>openings</p>
        <p className={styles.specialSubLink}>{`DON'T`}</p>
        <p className={styles.subLink}>benefits</p>
      </div>
      <p
        className={styles.navLink}
        onMouseEnter={(e) => handleLinkHover(e)}
        onMouseOut={(e) => handleLinkOff(e)}
        style={hover.investors ? { color: '#f97c00' } : { color: '#3f8a72' }}
      >
        investors
      </p>
      <div className={[styles.dropList, styles.sublist5].join(' ')}>
        <p className={styles.subLink}>financials</p>
        <p className={styles.subLink}>stock info</p>
      </div>
      <SearchForm />
    </nav>
  );
};

export default HeaderNav;
