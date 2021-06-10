/* eslint-disable max-len */
import React from 'react';
import style from './HomePage.css';
import CaptionedImage from '../components/CaptionedImage';
import CompanyProfile from '../components/CompanyProfile';
import Mission from '../components/Mission';

const HomePage = () => {
  return (
    <main className={style.homePage}>
      <CompanyProfile />

      <section className={style.gallery}>
        <CaptionedImage />
        <CaptionedImage />
        <CaptionedImage />
      </section>

      <Mission />
    </main>
  );
};

export default HomePage;
