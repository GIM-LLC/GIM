/* eslint-disable max-len */
import React from 'react';
import style from './HomePage.css';

import CompanyProfile from '../components/profile/CompanyProfile';
import Mission from '../components/mission/Mission';
import Gallery from '../components/gallery/Gallery';
import HiddenText from '../components/hiddenText/HiddenText';
import useRevealText from '../components/hiddenText/useRevealText';

const HomePage = () => {
  const { startFadeOutStyle, endFadeInStyle, startTransition, endTransition } =
    useRevealText();

  return (
    <main
      id="mainBody"
      onAnimationStart={startTransition}
      onAnimationEnd={endTransition}
      className={`${style.homePage} ${style[startFadeOutStyle]} ${style[endFadeInStyle]}`}
    >
      <HiddenText />
      <CompanyProfile />
      <Gallery />
      <Mission />
    </main>
  );
};

export default HomePage;
