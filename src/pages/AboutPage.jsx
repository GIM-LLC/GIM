import React from 'react';
import Header from '../components/header-footer/Header';
import Footer from '../components/header-footer/Footer';
import MakerCard from '../components/makers/MakerCard';
// import style from './AboutPage.css';

const AboutPage = () => {
  const makers = [
    {
      name: 'Devon',
      image: 'devon.jpg',
      imageX: 'devonx.jpg',
      title: 'Software Engineer',
      // pronouns: "what do you all think about including in the page?"
      bio: 'bio placeholder',
    },
    {
      name: 'Julianne',
      image: 'juli.jpg',
      imageX: 'julix.jpg',
      title: 'Software Engineer',
      // pronouns: "what do you all think about including in the page?"
      bio: 'bio placeholder',
    },
    {
      name: 'Cameron',
      image: 'cameron.jpg',
      imageX: 'cameronx.jpg',
      title: 'Software Engineer',
      // pronouns: "what do you all think about including in the page?"
      bio: 'bio placeholder',
    },
    {
      name: 'Katrina',
      image: 'katrina.jpg',
      imageX: 'katrinax.jpg',
      title: 'Software Engineer',
      // pronouns: "what do you all think about including in the page?"
      bio: 'bio placeholder',
    },
    {
      name: 'Casey',
      image: 'casey.jpg',
      imageX: 'caseyx.jpg',
      title: 'Software Engineer',
      // pronouns: "what do you all think about including in the page?"
      bio: 'bio placeholder',
    },
  ];

  return (
    <>
      <Header />
      <main className={'makersPage'}>
        <h1>Meet the Makers of Robin Smith, the Ghost In The Machine</h1>
        <h3>
          Devon Wolfkiel | Julianne Vela | Cameron Zimmerman | Katrina Cloyd |
          Casey Warren
        </h3>
        <section className={'makers'}>
          {makers.map((maker) => {
            <MakerCard key={maker.name} maker={maker} />;
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
