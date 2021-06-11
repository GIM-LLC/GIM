import React from 'react';
import style from './Mission.css';

const Mission = () => {
  return (
    <section className={style.mission}>
      <p className={style.missionHeader}>Core Values</p>
      <p className={style.missionBody}>
        Here at General Industrial Manufacturers, we believe in providing the best quality service and products to our loyal customer base. We strive to create economic growth through infrastructure and energy development, and to provide solutions that support communities and protect the planet. Our goal is to provide the highest level of service, the broadest selection of products and the most competitive prices.
      </p>
    </section>
  );
};

export default Mission;
