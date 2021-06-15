/* eslint-disable max-len */
import React, { useContext } from 'react';
import style from './HomePage.css';

import CompanyProfile from '../components/profile/CompanyProfile';
import Mission from '../components/mission/Mission';
import Gallery from '../components/gallery/Gallery';
import HiddenText from '../components/hiddenText/HiddenText';
import useRevealText from '../components/hiddenText/useRevealText';

const HomePage = () => {
  const { textRevealed } = useRevealText();

  const revealed = textRevealed.toString();
  console.log(revealed);
  return (
    <main
      id="mainBody"
      className={`${style.homePage} ${style.fadeOut}`}
      reveal={revealed}
    >
      <HiddenText revealed={revealed} />
      <CompanyProfile />
      <Gallery />
      <Mission />
    </main>
  );
};

export default HomePage;
