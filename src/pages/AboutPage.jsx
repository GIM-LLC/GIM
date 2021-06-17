import React from 'react';
import makers from '../components/makers/MakersData.js';
import Footer from '../components/header-footer/Footer';
import MakerCard from '../components/makers/MakerCard';
import MakerHeader from '../components/makers/MakerHeader';
import style from './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <MakerHeader />
      <main className={style.main}>
        <h2>Meet the Makers of Robin Smith, the Ghost In The Machine</h2>
        <section className={style.makers}>
          {makers.map((maker) => (
            <MakerCard
              maker={maker}
              className={`style.${maker.name}`}
              key={maker.name}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
