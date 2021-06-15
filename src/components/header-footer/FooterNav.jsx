import React, { useState, useContext, useEffect } from 'react';
import useGhostSocialIcons from '../../hooks/useGhostSocialIcons';
import { SocketContext } from '../../context/SocketProvider';
import { GameStateContext } from '../../context/GameStateProvider';
import style from './Footer.css';

const FooterNav = () => {
  const socket = useContext(SocketContext);
  const { incrementPoints } = useContext(GameStateContext);
  const { iconGhostState, handleIconClick } = useGhostSocialIcons();
  const [transparentClicked, setTransparentClicked] = useState(false);
  const [transparentPts, setTransparentPts] = useState(false);

  const blinkMessage = () => {
    setTransparentClicked(true);
    setTimeout(() => setTransparentClicked(false), 3000);
  };

  const showMessage = () => {
    blinkMessage();
    socket.emit('transparent click');

    if (!transparentPts) {
      incrementPoints(2);
      setTransparentPts(true);
      socket.emit('transparent points');
    }
  };

  const handleSocketTransparentChange = () => {
    blinkMessage();
  };

  const handleSocketTransparentPoints = () => {
    incrementPoints(2);
    setTransparentPts(true);
  };

  useEffect(() => {
    socket.on('socket transparent click', handleSocketTransparentChange);
    socket.on('socket transparent points', handleSocketTransparentPoints);
  }, [socket]);

  return (
    <>
      <nav >
        <ul>
          <li className={style.footerListItem}>
            <p className={style.headers}>our people</p>
            <p>Meet the Suppliers</p>
            <p>The Journey</p>
            <p>Leadership</p>
            <p>Experts in the field</p>
          </li>
          <li className={style.footerListItem}>
            <p className={style.headers}>why GIM</p>
            <p onClick={showMessage} className={style.pointer}>Transparency</p>
            <p>Commitment to Sustainability</p>
            <p>Contributions & Partnerships</p>
            <p>Global Health Impact</p>
          </li>
          <li className={style.footerListItem}>
            <p className={style.headers}>our products</p>
            <p>Raw Materials</p>
            <p>Installations</p>
            <p>Accesories</p>
            <p>Supplies and Consumables</p>
          </li>
          <li className={style.footerListItem}>
            <p className={style.headers}>contact us</p>
            <div className={style.contactUsDiv}>
              <div className={style.iconDiv}>
                <img
                  onClick={(e) => handleIconClick(e)}
                  className={
                    iconGhostState.twitter
                      ? [style.iconImageGhost, style.pulse].join(' ')
                      : style.iconImage
                  }
                  src={
                    !iconGhostState.twitter
                      ? '/assets/Twitter.png'
                      : '/assets/ghostie.png'
                  }
                  alt="twitter-icon"
                />
                <img
                  onClick={(e) => handleIconClick(e)}
                  className={
                    iconGhostState.instagram
                      ? [style.iconImageGhost, style.pulse].join(' ')
                      : style.iconImage
                  }
                  src={
                    !iconGhostState.instagram
                      ? '/assets/ig.png'
                      : '/assets/ghostie.png'
                  }
                  alt="instagram-icon"
                />
                <img
                  onClick={(e) => handleIconClick(e)}
                  className={
                    iconGhostState.github
                      ? [style.iconImageGhost, style.pulse].join(' ')
                      : style.iconImage
                  }
                  src={
                    !iconGhostState.github
                      ? '/assets/Github_icon.png'
                      : '/assets/ghostie.png'
                  }
                  alt="github-icon"
                />
                <img
                  onClick={(e) => handleIconClick(e)}
                  className={
                    iconGhostState.linkedin
                      ? [style.iconImageGhost, style.pulse].join(' ')
                      : style.iconImage
                  }
                  src={
                    !iconGhostState.linkedin
                      ? '/assets/linkedin-icon-2.png'
                      : '/assets/ghostie.png'
                  }
                  alt="linkedin-icon"
                />
                <img
                  className={[style.iconImageGhost, style.pulse].join(' ')}
                  src={'/assets/ghostie.png'}
                  alt="ghost-icon"
                />
              </div>
              <div className={style.addressDiv}>
                <p className={style.addressesHeader}>Corporate Offices</p>
                <p className={style.addresses}>Oak Square Business Park</p>
                <p className={style.addresses}>1532 Smithsonian St</p>
                <p className={style.addresses}>Middleton, Nebraska, 68833</p>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div
        className={transparentClicked ? [style.hiddenMessage, style.reveal].join(' ') : [style.hiddenMessage, style.hide].join(' ')}
      >YES! The answers are all here.... keep clicking around!</div>
    </>
  );
};

export default FooterNav;
