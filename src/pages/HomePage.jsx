/* eslint-disable max-len */
import React from 'react';
import style from './HomePage.css';
import CompanyProfile from '../components/profile/CompanyProfile';
import Mission from '../components/mission/Mission';
import Gallery from '../components/gallery/Gallery';

const HomePage = () => {
  return (
    <main className={style.homePage}>
      <CompanyProfile />
      <Gallery />
      <Mission />
    </main>
  );
};

export default HomePage;
