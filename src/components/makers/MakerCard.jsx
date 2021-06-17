import React from 'react';

const MakerCard = (maker) => {
  return (
    <article id={`${maker.name}-card`}>
      <figure>
        <img src={`/public/assets/${maker.image}`} />
        {/* on hover set src to maker.imageX */}
        <figcaption>
          {maker.name} | {maker.title}
        </figcaption>
      </figure>
      <p>{maker.bio}</p>
    </article>
  );
};

export default MakerCard;
