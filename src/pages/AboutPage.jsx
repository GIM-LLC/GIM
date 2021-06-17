import React from 'react';
import Footer from '../components/header-footer/Footer';
import MakerCard from '../components/makers/MakerCard';
import MakerHeader from '../components/makers/MakerHeader';
import style from './AboutPage.css';

const AboutPage = () => {
  const makers = [
    {
      name: 'Devon',
      image: 'devon.jpg',
      imageX: 'devonx.jpg',
      title: 'Software Engineer',
      // pronouns: "what do you all think about including in the page?"
      bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla molestias corrupti quos id aut, inventore maiores adipisci in est beatae dignissimos deserunt enim dolorem vero commodi quam facilis sint at!',
    },
    {
      name: 'Julianne',
      image: 'juli.jpg',
      imageX: 'julix.jpg',
      title: 'Software Engineer',
      pronouns: 'she/her',
      bio: 'Juli is a Full Stack Software Engineer with a passion for learning and making the world a better place. She is fasinated by science and astronomy and would love to merge her two passions one day!',
    },
    {
      name: 'Cameron',
      image: 'cameron.jpg',
      imageX: 'cameronx.jpg',
      title: 'Software Engineer',
      // pronouns: "what do you all think about including in the page?"
      bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla molestias corrupti quos id aut, inventore maiores adipisci in est beatae dignissimos deserunt enim dolorem vero commodi quam facilis sint at!',
    },
    {
      name: 'Katrina',
      image: 'katrina.jpg',
      imageX: 'katrinax.jpg',
      title: 'Software Engineer',
      // pronouns: "what do you all think about including in the page?"
      bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla molestias corrupti quos id aut, inventore maiores adipisci in est beatae dignissimos deserunt enim dolorem vero commodi quam facilis sint at!',
    },
    {
      name: 'Casey',
      image: 'casey.jpg',
      imageX: 'caseyx.jpg',
      title: 'Software Engineer',
      // pronouns: "what do you all think about including in the page?"
      bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla molestias corrupti quos id aut, inventore maiores adipisci in est beatae dignissimos deserunt enim dolorem vero commodi quam facilis sint at!',
    },
  ];

  return (
    <>
      <MakerHeader />
      <main className={style.main}>
        <h2>Meet the Makers of Robin Smith, the Ghost In The Machine</h2>
        <section className={style.makers}>
          {makers.map((maker) => (
            <MakerCard maker={maker} key={maker.name} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
