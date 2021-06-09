/* eslint-disable max-len */
import React from 'react';
import style from './HomePage.css';
import CaptionedImage from '../components/CaptionedImage';

const HomePage = () => {
  return (
    <main className={style.homePage}>
      <section>
		  <h2>GIM</h2>
		  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestiae perspiciatis perferendis, dignissimos corporis incidunt debitis fugit accusamus totam iure libero vero fuga repellendus itaque aspernatur eligendi, error alias ad.</p>
	  </section>

	  <section>
        <h3>And more things...</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestiae perspiciatis perferendis, dignissimos corporis incidunt debitis fugit accusamus totam iure libero vero fuga repellendus itaque aspernatur eligendi, error alias ad.</p>
	  </section>

	  <section className={style.imageSection}>
        <CaptionedImage />
        <CaptionedImage />
        <CaptionedImage />
	  </section>
    </main>
  );
};

export default HomePage;
