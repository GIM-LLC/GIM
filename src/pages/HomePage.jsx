/* eslint-disable max-len */
import React from 'react';
import style from './HomePage.css';
import useGlowingObjects from '../hooks/useGlowingObjects';

import CompanyProfile from '../components/profile/CompanyProfile';
import Mission from '../components/mission/Mission';
import Gallery from '../components/gallery/Gallery';

const HomePage = () => {
  const { allTrue, glowingObjectState, handleGlowChange } = useGlowingObjects();

  return (
    <main className={style.homePage}>
      <CompanyProfile
        glowingObjectState={glowingObjectState}
        glowChangeHandler={handleGlowChange}
      />
      <Gallery
        glowingObjectState={glowingObjectState}
        glowChangeHandler={handleGlowChange}
      />
      <Mission />
    </main>
  );
};

export default HomePage;
