import React from 'react';
import MakerNav from './MakerNav';
import style from '../../pages/AboutPage.css';

const MakerHeader = () => {
  const handleHeaderAudio = () => {
    const audio = document.querySelector('#GIM-title-audio');
    audio.volume = 0.1;
    audio.play();
  };

  return (
    <header className={style.makerHdr} onClick={handleHeaderAudio}>
      <span className={style.headerTxt}>
        <h1 style={{ transform: 'rotate(5deg) translate(30px, 10px)' }}>
          Ghost In The Machine
        </h1>
        <h3>-LLC.-</h3>
      </span>
      <MakerNav />
    </header>
  );
};

export default MakerHeader;
