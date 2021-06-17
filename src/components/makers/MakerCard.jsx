import React from 'react';
import PropTypes from 'prop-types';
import style from '../../pages/AboutPage.css';

const MakerCard = ({ maker }) => {
  return (
    <article className={style.makerCard} id={`${maker.name}-card`}>
      <figure>
        <img src={`/assets/${maker.image}`} />
        {/* on hover set src to maker.imageX */}
        <figcaption>
          {maker.name} | {maker.title}
        </figcaption>
      </figure>
      <p>{maker.bio}</p>
    </article>
  );
};

MakerCard.propTypes = {
  maker: PropTypes.shape({
    bio: PropTypes.any,
    image: PropTypes.any,
    name: PropTypes.any,
    title: PropTypes.any,
  }),
};

export default MakerCard;
