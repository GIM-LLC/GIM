import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from '../../pages/AboutPage.css';

const MakerCard = ({ maker }) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseOut = () => {
    setHover(false);
  };

  const gridName = `${maker.name}-card`;

  return (
    <article
      className={`${style.makerCard} ${style.gridName}`}
      id={`${maker.name}-card`}
    >
      <figure>
        <img
          src={hover ? `assets/${maker.imageX}` : `/assets/${maker.image}`}
          onMouseEnter={onMouseEnter}
          onMouseOut={onMouseOut}
        />
      </figure>
      <p className={style.makerInfo}>
        <span>{maker.name}</span>
        <span>
          {maker.title} | Pronouns: {maker.pronouns}
        </span>
        <span>{maker.bio}</span>
      </p>
    </article>
  );
};

MakerCard.propTypes = {
  maker: PropTypes.shape({
    bio: PropTypes.string,
    image: PropTypes.string,
    imageX: PropTypes.string,
    name: PropTypes.string,
    pronouns: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default MakerCard;
