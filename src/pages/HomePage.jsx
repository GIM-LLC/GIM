/* eslint-disable max-len */
import React from 'react';
import style from './HomePage.css';

import CompanyProfile from '../components/profile/CompanyProfile';
import Mission from '../components/mission/Mission';
import Gallery from '../components/gallery/Gallery';
import HiddenText from '../components/hiddenText/HiddenText';

const HomePage = () => {
  return (
    <main id="body" className={style.homePage}>
      <HiddenText />
      <CompanyProfile />
      <Gallery />
      <Mission />
    </main>
  );
};

export default HomePage;
