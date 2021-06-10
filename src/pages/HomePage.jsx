/* eslint-disable max-len */
import React from 'react';
import style from './HomePage.css';
import CaptionedImage from '../components/CaptionedImage';

const HomePage = () => {
  return (
    <main className={style.homePage}>
      <section className={style.story}>
        <h2>GIM</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          molestiae perspiciatis perferendis, dignissimos corporis incidunt
          debitis fugit accusamus totam iure libero vero fuga repellendus itaque
          aspernatur eligendi, error alias ad.
        </p>
      </section>

      <section className={style.news}>
        <h3>And more things...</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          molestiae perspiciatis perferendis, dignissimos corporis incidunt
          debitis fugit accusamus totam iure libero vero fuga repellendus itaque
          aspernatur eligendi, error alias ad.
        </p>
      </section>

      <section className={style.gallery}>
        <CaptionedImage />
        <CaptionedImage />
        <CaptionedImage />
      </section>

      <section className={style.mission}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea rerum
          harum tenetur. Nihil rerum fugiat culpa repellat aliquid doloribus
          nisi accusantium et vel facilis obcaecati excepturi ipsum, tenetur
          libero? Expedita.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
