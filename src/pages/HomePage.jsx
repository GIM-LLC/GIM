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
        <CaptionedImage
          title="Stockholder Information"
          text="Stockholders Dividens are paid quarterly on the 5th business day of June, August, October, and November at end of day. Stockholders may have their funds deposited via check and direct deposit."
        />
        <CaptionedImage
          title="Employment"
          text="Supporting you as you make the next step in your career towards state of the art manufacturing technology. Dozens of open roles at your fingertips to help shape the future of industrialized manufacturing. For contracting inquiries please contact via email."
        />
        <CaptionedImage
          title="Life with GIM"
          text="Here at GIM you will find minimal bureaucracy, and more support. GIM has a welcoming and warm culture, ready to welcome and serve the community with amazing industrial manufacturing products"
        />
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
